import React, {useState} from 'react';
import caver from '../klaytn/caver';

function Logout() {
    const removeWallet = () => {
        caver.klay.accounts.wallet.clear()
        sessionStorage.removeItem('walletInstance')
        sessionStorage.removeItem('auth')
        alert('로그아웃')
    }

    return (
        <button className="main-btn" type="button" onClick={removeWallet}>
            로그아웃
        </button>
    )
}

export default Logout;