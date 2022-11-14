import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import caver from '../../klaytn/caver';
import {useNavigate} from 'react-router-dom';
import * as RemoveWallet from '../logout';

function MainHeader() {
  const navigate = useNavigate();

    const removeWallet = () => {
        caver.klay.accounts.wallet.clear()
        sessionStorage.removeItem('walletInstance')
        sessionStorage.removeItem('auth')
        alert('로그아웃')
        navigate('/')
    }

    return (
      <div className="mainHeader">
        <div className="headerIcon">
          <Link to ="/user">
            <img className="headerLogo" src="img/logo.png" alt="로딩 실패" width="50" height="20"/>  
            <h1 className="headerName">P:LOW</h1>
          </Link>
        </div>
        <div class="header-box">
            <ul class="menu align-center expanded text-center SMN_effect-73">
              <li><a href="">팀 소개</a></li>
              <li><a href="">비전</a></li>
              <li><a href="">목표</a></li>

              <Link to ="/authpage">
              <li><a href="">회원가입</a></li>
              </Link>

            </ul>
          </div>    
        </div>
    )
}

export default MainHeader;