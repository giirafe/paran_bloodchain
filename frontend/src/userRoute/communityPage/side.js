import {Link} from 'react-router-dom';
import React from 'react';

const SideMenu = () => {
    return (
        <div className ="communityBox">
                <Link to ="/community">
                    <button className="main-btn">홈</button>
                </Link>
                <Link to ="/writecontent">
                    <button className="main-btn" onClick="hi">글 작성</button>
                </Link>
                <Link to ="/community/myWrite">
                    <button className="main-btn">내가 쓴 글</button>
                </Link>
                <Link to ="/donatemain">
                    <button className="main-btn" onClick="hi">기부하기</button>
                </Link>
                <Link to ="/donaterecord">
                    <button className="main-btn" onClick="hi">기부 내역</button>
                </Link>
        </div>
    )
}

export default SideMenu;