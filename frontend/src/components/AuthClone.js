import React, { useState, Component, Fragment } from 'react'
import caver from '../klaytn/caver';
import {useNavigate} from 'react-router-dom';
import Main from '../main';
import './Auth.scss';

import BloodContract from './BloodContract';
import isAdmin from './isAdmin';

// import './Auth.scss';
/**
 * Auth component manages authentication.
 * It provides two different access method.
 * 1) By keystore(json file) + password
 * 2) By privatekey
 */
function Auth(props, ref) {
  const navigate = useNavigate();
  const [privateKey, setPrivateKey] = useState('')

  const print = () => {
    console.log('pk', privateKey)
  }

  const handleChange = (e) => {
    setPrivateKey(e.target.value)
  }

  /**
   * reset method reset states to intial state.
   */
  const reset = () => {
    setPrivateKey('')
  }

  /**
   * handleLogin method
   */
  const handleLogin = async () => {
    //const { accessType, keystore, password, privateKey } = this.state
    integrateWallet(privateKey)
    caver.klay.accounts.wallet.clear()
  }

  /**
   * getWallet method get wallet instance from caver.
   */
  const getWallet = () => {
    if (caver.klay.accounts.wallet.length) {
      return caver.klay.accounts.wallet[0]
    }
  }

  /**
   * integrateWallet method integrate wallet instance to caver.
   * In detail, this method works like the step below:
   * 1) it takes private key as an input argument.
   * 2) get wallet instance through caver with private key.
   * 3) set wallet instance to session storage for storing wallet instance
   * cf) session storage stores item until tab is closed.
   */
   const integrateWallet = (privateKey) => {
    try {
      console.log('pk:', privateKey)

      // 기존 wallet.add 가 아닌 Keyring으로 접근해봤다.

      // pubilcKey != Account Address 유의~
      const userAddress = caver.klay.accounts.privateKeyToAccount(privateKey).address;
      // caver.klay.accounts.accountKeyToPublicKey(accountKey)
      console.log("User Address From made with PrivateKey :",userAddress);

      const userKeyring = caver.wallet.keyring.create(userAddress, privateKey)
      // adding userKeyring to wallet
      const keyringInstance = caver.wallet.add(userKeyring);
      console.log("Keyring Instance Added to caver.wallet : ",caver.wallet[0]);
      sessionStorage.setItem('keyringInstance', JSON.stringify(keyringInstance))

      const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey)
      caver.klay.accounts.wallet.add(walletInstance)
      console.log("Whole Wallet Instance : ", caver.klay.accounts.wallet)
      console.log("Caver Wallet Access :", caver.klay.accounts.wallet[0])
      // const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
      // //세션에 개인키 저장 후 SC 접근 마다 객체 만드는 어거지
      sessionStorage.setItem('walletInstance', JSON.stringify(walletInstance))
      console.log("Caver Wallet Length : ",caver.klay.accounts.wallet.length)

      console.log(sessionStorage.getItem('auth'))
      navigate(`/${sessionStorage.getItem('auth')}`)
      reset()
      
    } catch (e) {
      console.log(e)
      alert('개인키를 올바르게 입력하십시오.')
    }
  }

  /**
   * removeWallet method removes
   * 1) wallet instance from caver.klay.accounts
   * 2) 'walletInstance' value from session storage.
   */
  const removeWallet = () => {
    caver.klay.accounts.wallet.clear()
    sessionStorage.removeItem('walletInstance')
    reset()
  }

  return (
      <div className="box">
        <div className="title">LOGIN</div>
        <div className="input">
          <input
          type="text"
          name="name"
          id="name"
          placeholder='Private Key'
          value={privateKey}
          onChange={handleChange}
          />
          <span className="spin"></span>
        </div>
        <div className="button login">
          <button onClick={handleLogin}>로그인<i className="fa fa-check"></i></button>
        </div>
      </div>
  )
}

export default Auth