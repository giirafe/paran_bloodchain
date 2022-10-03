import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Main from './main';

// Userhome
import User from './userRoute/userHome';

// 조회키 생성
import NFTmoreInfo from './userRoute/nftPage/NFTmoreInfo';
import Providekey from './userRoute/nftPage/providekey';

// 유저 메뉴
// 유저 정보
import Myinfo from './userRoute/myinfoPage/myinfo';
import Createkey from './userRoute/myinfoPage/createkey';


// 유저 커뮤니티
import Community from './userRoute/communityPage/community';
import Donaterecord from './userRoute/communityPage/donaterecord';
import Writecontent from './userRoute/communityPage/writecontent';

// 유저 증서사용
import Useletter from './userRoute/useletterPage/useletter';

// krcHome
import Krc from './krcRoute/krcHome';

// Inquiryhome
import Inquiry from './InquiryRoute/InquiryPage';

import BlockNumber from './components/BlockNumber';
import NotFound from './components/NotFound';
import Forbidden from './components/Forbidden';
import isAdmin from './components/isAdmin';
import Logout from './components/logout';
import Caver_Test_Route from './components/myinfo_comp';

import Auth from './components/Auth';
import RouteIf from './components/RouteIf';
import caver from './klaytn/caver'

function App() {  

  const [project, setProject] = useState('');

  const componentDidMount = () => {
    fetch('http://localhost:3001')
    .then(res=>res.json())
    .then(data=>setProject(data.project))
  }

  useEffect(() => {
    
  })

  return (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/InquiryPage' element={isAdmin() ? <Inquiry /> : <Forbidden />} />
      <Route path='/krcHome' element={isAdmin() ? <Krc /> : <Forbidden />} />
      <Route path='/writecontent' element={isAdmin() ? <Writecontent /> : <Forbidden />} />
      <Route path='/donaterecord' element={isAdmin() ? <Donaterecord /> : <Forbidden />} />     
      <Route path='/user' element={isAdmin() ? <User /> : <Forbidden />} />
      <Route path='/providekey' element={isAdmin() ? <Providekey /> : <Forbidden />} />
      <Route path='/NFTmoreInfo' element={isAdmin() ? <NFTmoreInfo /> : <Forbidden />} />
      <Route path='/myinfo_comp' element={isAdmin() ? <Caver_Test_Route /> : <Forbidden />} />
      <Route path='/community' element={isAdmin() ? <Community /> : <Forbidden />} />
      <Route path='/useletter' element={isAdmin() ? <Useletter /> : <Forbidden />} />      
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <div>
      <BlockNumber />
    </div>
    <div>
      <Logout />
    </div>
    <div>
      {componentDidMount()}
      {project ? `hello${project}` : 'hello world'}
    </div>

  </BrowserRouter>

  );
}

export default App;