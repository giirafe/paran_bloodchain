import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';

const BoardView = () => {
  const location = useLocation();
  const address = location.state.address;
  const title = location.state.title;
  const content = location.state.content;
  const createdAt = location.state.createdAt;

  return (
    <>
      <h1>
        게시글 상세 정보
      </h1>
      <h3>
        작성자 : {address}
      </h3>
      <h3>
        제목 : {title}
      </h3>
      <h3>
        작성일 : {createdAt}
      </h3>
      <h3>
        내용 : {content}
      </h3>
    </>
  )
}

export default BoardView;