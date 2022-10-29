import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import './BoardView.css';
import Header from '../../components/layout/header';

const BoardView = () => {
  const location = useLocation();
  const address = location.state.address;
  const title = location.state.title;
  const content = location.state.content;
  const createdAt = location.state.createdAt;

  return (
    <>
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="board-detail">
        <br/>
        <h1>
          게시글 상세 정보
        </h1>
        <h3>
          제목 : {title}
        </h3>
        <h3>
          작성일 : {createdAt}
        </h3>
        <h3>
          작성자 : {address}
        </h3>
        <h3>
          내용 : {content}
        </h3>
      </div>
    </>
  )
}

export default BoardView;