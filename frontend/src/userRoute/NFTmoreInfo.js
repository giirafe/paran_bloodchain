import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';
import './NFTmoreInfo.css';

function NFTmoreInfo() {
    return (
        <body>
        <Header />
        <h1 className ="NFT1"></h1>

        <div className="NFTmoreinfo">
                <h2>홍길동님의 헌혈증명서</h2>
                <h2>생년월일 : 001205 </h2>
                <h2>성별 : 남</h2>
                <h2>발급번호 : 101</h2>
                <h2>헌혈 일자 : 2022-09-04</h2>
                <h2>혈액원명 : 경기남부혈액원</h2>
                <h2>헌혈 종류 : 전혈 헌혈</h2>

            </div>

        </body>
    )
}

export default NFTmoreInfo;