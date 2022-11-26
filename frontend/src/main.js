import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState, useRef} from 'react';
import Modal from './components/modal';
import './mainBTN.css';
import isAdmin from './components/isAdmin';
import Auth from './components/AuthClone';
import MainHeader from './components/layout/mainHeader';

function Main() {
  const [signup, setSignup] = useState(false);
  const [choice, setChoice] = useState('');
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const buttonHandler = () => {
    setSignup(!signup)
    
    if (isAdmin() && sessionStorage.getItem('auth') === sessionStorage.getItem('depart')) {
      navigate(`/${sessionStorage.getItem('auth')}`)
    }
    else if (!isAdmin()) {
      return
    }
    else {
      alert('허가되지 않은 접근입니다.')
    }
  }

  const setType = (type) => {
    sessionStorage.setItem('auth', type)
  }

  const counter = ($counter, max) => {
    let now = max;
  
    const handle = setInterval(() => {
      $counter.innerHTML = Math.ceil(max - now);
    
      // 목표수치에 도달하면 정지
      if (now < 1) {
        clearInterval(handle);
      }
      
      // 증가되는 값이 계속하여 작아짐
      const step = now / 10;
      
      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step;
    }, 50);
  }
  
  window.onload = () => {
    // 카운트를 적용시킬 요소
    const $counter = document.querySelector(".count");
    
    // 목표 수치
    const max = 8233;
    
    setTimeout(() => counter($counter, max), 2000);
  }

  return (
    
    <div>
      <MainHeader/>
        <div className="img">
          <img className="mainIMG" src="img/main.png" alt="로딩 실패"/>
        </div>
        <div className="space"></div>
        <div className="space"></div>

        <div className="slogan">
          <h1>헌혈로 세상의 가치를 잇다</h1>
          <h2>당신의 헌혈이 살릴 수 있어요</h2>
          <br/>
          <h3>살린 사람 수</h3>
          <h3> : </h3>
          <h3 className="count">0</h3>
        </div>

        <div className='btn-box'>
            <button className="main-btn" onClick={() => {
              setType('user')
              buttonHandler()
            }}>사용자</button>
            {signup && (
          <Modal closeModal={() => {setSignup(!signup)}}>
            <Auth value={choice}/>
          </Modal>)}
            <button className="main-btn" onClick={() => {
              setType('InquiryPage')
              buttonHandler()
              }}>조회 기관</button>
            {signup && (
          <Modal closeModal={ () => setSignup(!signup)}>
            <Auth/>
          </Modal>)}
            <button className="main-btn" onClick={() => {
              setType('krcHome')
              buttonHandler()
              }}>헌혈 기관</button>
            {signup && (
          <Modal closeModal={() => setSignup(!signup)}>
            <Auth/>
          </Modal>)}
        </div>

    </div>
  );
}

export default Main;