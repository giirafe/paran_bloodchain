import React, { useState, Component, Fragment } from 'react'
import cx from 'classnames'
import caver from '../klaytn/caver';
import {useNavigate} from 'react-router-dom';
import Main from '../main';

/**
 * Auth component manages authentication.
 * It provides two different access method.
 * 1) By keystore(json file) + password
 * 2) By privatekey
 */
function Auth(props) {
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
  const handleLogin = () => {
    //const { accessType, keystore, password, privateKey } = this.state
    integrateWallet(privateKey)
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
    try{
      const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey)
      caver.klay.accounts.wallet.add(walletInstance)
      sessionStorage.setItem('walletInstance', JSON.stringify(walletInstance))
      reset()
      console.log(sessionStorage.getItem('walletInstance'))
      navigate(`/${sessionStorage.getItem('auth')}`)
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
        <Fragment>
            <label className="Auth__label">Private Key:</label>
            <input
            type='text'
            className="Auth__input"
            name="privateKey"
            value={privateKey}
            onChange={handleChange}
            />
            <button className="Auth__button" onClick={handleLogin}>Login</button>
        </Fragment>
    )
}

export default Auth