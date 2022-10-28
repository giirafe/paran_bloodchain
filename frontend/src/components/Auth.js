import React, { useState, Fragment } from 'react';
import caver from '../klaytn/caver';
import QRCode from 'react-qr-code';
//import { set } from 'mongoose';
//import * as KlipAPI from '../api/UseKlip';

function Auth() {
    const [qrvalue, setQrvalue] = useState("DEFAULT")
    const[privateKey, setPrivateKey] = useState('')

    const handleChange = (e) => {
        setPrivateKey(e.target.value)
    }

    const onClickLogin = () => {
        console.log('pk : ', privateKey)
    }


    //개인키로만 로그인 할 경우 메서드
    const integrateWallet = (privateKey) => {
        const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey)
        caver.klay.accounts.wallet.add(walletInstance)
        sessionStorage.setItem('walletInstance', JSON.stringify(walletInstance))
        console.log(privateKey)
        this.reset()
    }

    const handleLogin = () => {
        const { accessType, keystore, password, privateKey } = this.state
        console.log('pk: ', privateKey)
        // Access type2: acceㅜss through private key
        if (accessType == 'privateKey') {
          this.integrateWallet(privateKey)
          return
        }
      
        // Access type1: access through keystore + password
        try {
          const { privateKey: privateKeyFromKeystore } = caver.klay.accounts.decrypt(keystore, password)
          this.integrateWallet(privateKeyFromKeystore)
        } catch (e) {
          this.setState({ keystoreMsg: `Password doesn't match.` })
        }
    }

    const getWallet = () => {
        if (caver.klay.accounts.wallet.length) {
          return caver.klay.accounts.wallet[0]
        }
    }

    /**
     * removeWallet 메서드는 다음 항목들을 제거합니다.
     * 1) caver.klay.accounts의 지갑 인스턴스
     * 2) 세션 스토리지의 'walletInstance' 값
     */

    const removeWallet = () => {
        caver.klay.accounts.wallet.clear()
        sessionStorage.removeItem('walletInstance')
        this.reset()
    }

    /*
    getUserData = () => {
        KlipAPI.getAddress(setQrvalue, async (address) => {
            setMyAddress(address);
            const _balance = await getBalance(address);
            setMyBalance(_balance);
        });
    }*/

    const toggleAccessType = () => {
        const { accessType } = this.state
        this.setState({
          accessType: accessType === 'privateKey' ? 'keystore' : 'privateKey'
        }, this.reset)
    }

    return (
        <div className="authWrap">
            <div className="onlyPK">
                <h2>로그인</h2>
                <h3>개인키를 입력하세요.</h3>
                <input type='text' name="input_pk" value={privateKey} onChange={this.handleChange} />
            </div>
            <button type="button" onClick={this.handleLogin}>Login</button>
            <br/>
            <h3>QR코드 로그인</h3>
            <QRCode value={qrvalue} size={128} style={{margin: "auto"}}/>
        </div>
    )
}

export default Auth;