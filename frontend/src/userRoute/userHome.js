import '../App.css';
import Header from '../components/layout/header';
import {useNavigate} from 'react-router-dom';
import './userHome.css';
import React, { Component } from 'react'

class Home extends Component {

    
    render() {
        return (
            <section>
            <Header/>
            <div className="card">
                <div className="front">
                    홍길동님의 헌혈증명서
                </div>
                <div className="back">
                    발급번호 : 101
                    <br/>
                    헌혈 종류 : 전혈 헌혈
                    <br/>
                    헌혈 일자 : 2022-09-04
                    <br/>
                    혈액원명 : 경기남부혈액원
                    <br/>
                    헌혈 가능일까지 17일 남았습니다.   
                    <button className="submain-btn" >조회키 제공</button>
                </div>
            </div>
        </section>
        )
      }
}

export default Home;
