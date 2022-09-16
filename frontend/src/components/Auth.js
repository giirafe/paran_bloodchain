import React, {Component} from 'react'

import {cav} from '../api/caver'

class Auth extends Component {
    
    integrateWallet = (privateKey) => {
        const walletInstance = cav.klay.accounts.privateKeyToAccount(privateKey)
        cav.klay.accounts.wallet.add(walletInstance)
        sessionStorage.setItem('walletInstance', JSON.stringify(walletInstance))
        this.reset()
    }

    /**
 * handleImport method takes a file, read
 */
    handleImport = (e) => {
        const keystore = e.target.files[0]
        // 'FileReader'는 파일의 내용을 읽어오는 데에 사용됩니다.
        // 'onload' 핸들러와 'readAsText' 메서드를 사용할 것입니다.
        // * FileReader.onload
        // - 이 이벤트는 읽기 작업이 완료될 때마다 발생합니다.
        // * FileReader.readAsText()
        // - 내용을 읽어오기 시작합니다.
        const fileReader = new FileReader()
        fileReader.onload = (e) => {
        try {
            if (!this.checkValidKeystore(e.target.result)) {
            // If key store file is invalid, show message "Invalid keystore file."
            this.setState({ keystoreMsg: 'Invalid keystore file.' })
            return
            }
    
            // If key store file is valid,
            // 1) set e.target.result keystore
            // 2) show message "It is valid keystore. input your password."
            this.setState({
            keystore: e.target.result,
            keystoreMsg: 'It is valid keystore. input your password.',
            }, () => document.querySelector('#input-password').focus())
        } catch (e) {
            this.setState({ keystoreMsg: 'Invalid keystore file.' })
            return
        }
        }
        fileReader.readAsText(keystore)
    }

    handleLogin = () => {
        const { accessType, keystore, password, privateKey } = this.state
      
        // Access type2: access through private key
        if (accessType == 'privateKey') {
          this.integrateWallet(privateKey)
          return
        }
      
        // Access type1: access through keystore + password
        try {
          const { privateKey: privateKeyFromKeystore } = cav.klay.accounts.decrypt(keystore, password)
          this.integrateWallet(privateKeyFromKeystore)
        } catch (e) {
          this.setState({ keystoreMsg: `Password doesn't match.` })
        }
    }

    /**
     * removeWallet 메서드는 다음 항목들을 제거합니다.
     * 1) caver.klay.accounts의 지갑 인스턴스
     * 2) 세션 스토리지의 'walletInstance' 값
     */
    removeWallet = () => {
        cav.klay.accounts.wallet.clear()
        sessionStorage.removeItem('walletInstance')
        this.reset()
    }

    render() {
        return (
            <input
            id="input-password"
            className="Auth__passwordInput"
            name="password"
            type="password"
            onChange={this.handleChange}
            />
        )
    }
}

export default Auth;