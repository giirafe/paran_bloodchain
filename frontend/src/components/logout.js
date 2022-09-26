import React from 'react';
import caver from '../klaytn/caver';
import {useNavigate} from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const removeWallet = () => {
        caver.klay.accounts.wallet.clear()
        sessionStorage.removeItem('walletInstance')
        sessionStorage.removeItem('auth')
        alert('로그아웃')
        navigate('/')
    }

    return (
        <button className="main-btn" type="button" onClick={removeWallet}>
            로그아웃
        </button>
    )
}

export default Logout;