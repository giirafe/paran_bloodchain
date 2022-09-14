import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

function Header() {
    return (
      <div className="header">
        <div className="headerIcon">
          <h1 className="headerName">P:LOW</h1>
          <img className="headerLogo" src="img/logo.png" alt="로딩 실패" width="50" height="20"/>
        </div>
        <div className='header-box'>
            <Link to="/myinfo">
              <button className="main-btn" onClick="hi">내 정보</button>
            </Link>
        
            <Link to="/community">
              <button className="main-btn" onClick="hi">커뮤니티</button>
            </Link>

            <Link to="/useletter">
              <button className="main-btn" onClick="hi">조회 기관</button>
            </Link>
        </div>
      </div>
    )//
}

export default Header;