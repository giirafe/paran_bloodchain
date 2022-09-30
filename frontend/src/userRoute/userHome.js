import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';
import './userHome.css';

function home() {
    return(
        <body>
            
            <Header/>
            <h1 className ="NFT1"></h1>

            <Link to = "/providekey">
                 <button className="submain-btn" onClick="hi">조회 키 제공</button>
            </Link>

            <Link to = "/NFTmoreInfo">
            <div className="NFTinfo">
                <h2>홍길동님의 헌혈증명서</h2>
                <h2>발급번호 : 101</h2>
                <h2>헌혈 종류 : 전혈 헌혈</h2>

                <h2>헌혈 가능일까지 17일 남았습니다.</h2>

            </div>
            </Link>
        </body>
        

    );
}

export default home;