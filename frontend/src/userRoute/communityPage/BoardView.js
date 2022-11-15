import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './BoardView.css';
import Header from '../../components/layout/header';
import SideMenu from './side';

const BoardView = () => {
  const location = useLocation();
  const address = location.state.address;
  const title = location.state.title;
  const content = location.state.content;
  const createdAt = location.state.createdAt;

  const navigate = useNavigate();

  const donateHandler = () => {
    navigate('/donate', {state:{address:address}})
  }

  return (
    <>
      <Header/>
      <div className="space"></div>
      <SideMenu/>
      <div className="detail-box">
        <h1>
          {title} 
        </h1>
        <div className="board-detail">
          <br/>
          <h3>
            작성자 : {address}
          </h3>
          <h3>
            작성일 : {createdAt}
          </h3>
          <div className="board-content">
            {content}
          </div>
          <button className="main-btn" onClick={donateHandler}>기부하기</button>
        </div>
      </div>
    </>
  )
}

export default BoardView;