import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import caver from '../../klaytn/caver';
import {useNavigate} from 'react-router-dom';
import * as RemoveWallet from '../logout';

function Header() {
  const navigate = useNavigate();

    const removeWallet = () => {
        caver.klay.accounts.wallet.clear()
        sessionStorage.removeItem('walletInstance')
        sessionStorage.removeItem('auth')
        alert('로그아웃')
        navigate('/')
    }

    const onClickLogo = () => {
      navigate(`/${sessionStorage.getItem('auth')}`)
    }

    return (
      <div className="header">
        <div className="headerIcon">
            <img className="headerLogo" onClick={onClickLogo} src="img/logo.png" alt="로딩 실패" width="50" height="20"/>  
            <h1 className="headerName" onClick={onClickLogo}>P:LOW</h1> 
        </div>
        <div class="header-box">
            <ul class="menu align-center expanded text-center SMN_effect-73">
              <li><a href="/myinfo">내 정보</a></li>
              <li><a href="/community">커뮤니티</a></li>
              <li><a href="/donatemain">증서 사용</a></li>
              

              <li><a href="" onClick={removeWallet}>로그아웃</a></li>
            </ul>
          </div>    
        </div>
    )
}

export default Header;