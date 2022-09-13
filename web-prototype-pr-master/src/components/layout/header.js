import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

function header() {
    return (
    <body>
        <h1 className="mainName">P:LOW</h1>
        <img className="mainLogo" src="img/logo.png" alt="로딩 실패" width="50" height="20"/>

        <div className='btn-box'>
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
      </body>
    )
}

export default header;