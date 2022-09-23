import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import Modal from './components/modal';
import './mainBTN.css';
import Login from './login';
import Auth from './components/AuthClone';

function Main() {
  const [signup, setSignup] = useState(false);
  const [choice, setChoice] = useState('');
  const navigate = useNavigate();

  const onClickChoice = (choice) => {
    setChoice(choice)
    console.log(choice)
  }

  const movePage = () => {
    navigate(`/${choice}`)
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
            <button className="main-btn" onClick={() => {
              setSignup(!signup)
              sessionStorage.setItem('auth', 'user')
              }}>사용자</button>
            {signup && (
          <Modal closeModal={() => {setSignup(!signup)}}>
            <Auth value={choice}/>
          </Modal>)}
            <button className="main-btn" onClick={() => {
              setSignup(!signup)
              sessionStorage.setItem('auth', 'institute')
              }}>조회 기관</button>
            {signup && (
          <Modal closeModal={() => setSignup(!signup)}>
            <Auth/>
          </Modal>)}
            <button className="main-btn" onClick={() => {
              setSignup(!signup)
              sessionStorage.setItem('auth', 'krc')
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