import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState, useRef} from 'react';
import Modal from './components/modal';
import './mainBTN.css';
import isAdmin from './components/isAdmin';
import Auth from './components/AuthClone';

function Main() {
  const [signup, setSignup] = useState(false);
  const [choice, setChoice] = useState('');
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const buttonHandler = () => {
    setSignup(!signup)
    if (isAdmin()) {
      navigate(`/${sessionStorage.getItem('auth')}`)
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
    
    <div className="wrap">
      <div className="iconBox">
        <h1 className="mainName">P:LOW</h1>
        <img className="mainLogo" src="img/logo.png" alt="로딩 실패" width="60" height="30"/>
      </div>
      <div className="mainBox">
        <div className="slogan">
          <h2>헌혈자 수 누계</h2>
          <h2 className="count">0</h2>
          <h2>헌혈로 세상의 가치를 잇다.</h2>
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
              setType('inquirypage')
              buttonHandler()
              }}>조회 기관</button>
            {signup && (
          <Modal closeModal={() => setSignup(!signup)}>
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
    </div>
  );
}

export default Main;