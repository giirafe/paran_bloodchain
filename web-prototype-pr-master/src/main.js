import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, {useState} from 'react';
import Modal from './components/modal';
import './mainBTN.css';
import Login from './login';
import axios from 'axios';

function Main() {
  const [signup, setSignup] = useState(false);
  const [choice, setChoice] = useState('');

  const onClickChoice = (choice) => {
    console.log(choice)
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
          <h2 className="num">8,232</h2>
          <h2>헌혈로 세상의 가치를 잇다.</h2>
        </div>
        <div className='btn-box'>
            <button className="main-btn" onClick={() => setSignup(!signup)}>사용자</button>
            {signup && (
          <Modal closeModal={() => setSignup(!signup)}>
            <Login/>
          </Modal>)}
            <button className="main-btn" onClick={() => setSignup(!signup)}>조회 기관</button>
            {signup && (
          <Modal closeModal={() => setSignup(!signup)}>
            <Login/>
          </Modal>)}
            <button className="main-btn" onClick={() => setSignup(!signup)}>헌혈 기관</button>
            {signup && (
          <Modal closeModal={() => setSignup(!signup)}>
            <Login/>
          </Modal>)}
        </div>
      </div>
    </div>
  );
}

export default Main;