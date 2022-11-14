import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Main from './main';


import Authpage from './components/authpage'
// Userhome

import User from './userRoute/userHome';

// 조회키 생성
import NFTmoreInfo from './userRoute/nftPage/NFTmoreInfo';
import Providekey from './userRoute/nftPage/providekey';

// 유저 메뉴
// 유저 정보
import Myinfo from './userRoute/myinfoPage/myinfo';
import Myinfo_comp from './components/myinfo_comp';
import Createkey from './userRoute/myinfoPage/createkey';



// 유저 커뮤니티 
import Community from './userRoute/communityPage/community';
import Donaterecord from './userRoute/communityPage/donaterecord';
import Writecontent from './userRoute/communityPage/writecontent';
import Donate from './userRoute/communityPage/donate';
import MyWrite from './userRoute/communityPage/myWrite';

// 유저 증서사용
import Useletter from './userRoute/useletterPage/useletter';

// krcHome
import Krc from './krcRoute/krcHome';

// Inquiryhome
import Inquiry from './InquiryRoute/InquiryPage';
import Inquiry2 from './InquiryRoute/InquiryPage2';

import BlockNumber from './components/BlockNumber';
import NotFound from './components/NotFound';
import Forbidden from './components/Forbidden';
import isAdmin from './components/isAdmin';
import Logout from './components/logout';
import Caver_Test_Route from './components/myinfo_comp';
import BoardView from './userRoute/communityPage/BoardView';
import Auth from './components/Auth';
import RouteIf from './components/RouteIf';
import caver from './klaytn/caver'


function App() {  

  // const walletFromSession = sessionStorage.getItem('walletInstance')
  // // If 'walletInstance' value exists, add it to caver's wallet
  // if (walletFromSession) {
  //   // caver.klay.accounts.wallet.add(JSON.parse(walletFromSession))
  //   try {
  //     caver.klay.accounts.wallet.add(JSON.parse(walletFromSession))
  //     console.log("Caver Brought From SessionStorage");
  //   } catch (e) { // error 발생시
  //     console.error(e);
  //     // If value in sessionStorage is invalid wallet instance,
  //     // remove it from sessionStorage.
  //     console.log("Wallet Instance Removed");
  //     sessionStorage.removeItem('walletInstance')
  //   }
  // }  


  return (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/InquiryPage' element={isAdmin() ? <Inquiry /> : <Forbidden />} />
      <Route path='/Inquiry' element={isAdmin() ? <Inquiry2 /> : <Forbidden />} />

      <Route path='/mint' element={isAdmin() ? <Krc /> : <Forbidden />} />
      <Route path='/writecontent' element={isAdmin() ? <Writecontent /> : <Forbidden />} />
      <Route path='/donaterecord' element={isAdmin() ? <Donaterecord /> : <Forbidden />} />     
      <Route path='/user' element={isAdmin() ? <User /> : <Forbidden />} />
      <Route path='/providekey' element={isAdmin() ? <Providekey /> : <Forbidden />} />
      <Route path='/NFTmoreInfo' element={isAdmin() ? <NFTmoreInfo /> : <Forbidden />} />
      <Route path='/myinfo' element={isAdmin() ? <Myinfo /> : <Forbidden />} />
      <Route path='/community' element={isAdmin() ? <Community /> : <Forbidden />} /> 
      <Route path='/myinfo_comp' element={isAdmin() ? <Myinfo_comp /> : <Forbidden />} />
      <Route path='/useletter' element={isAdmin() ? <Useletter /> : <Forbidden />} />      
      <Route path='/createkey' element={isAdmin() ? <Createkey /> : <Forbidden />} />
      <Route path='/krcHome' element={isAdmin() ? <Krc />: <Forbidden />} />
      <Route path='/donate' element={isAdmin() ? <Donate /> : <Forbidden />} />
      <Route path='/providekey' element={isAdmin() ? <Providekey /> : <Forbidden />} />
      <Route path='/community/myWrite' element={isAdmin() ? <MyWrite/>: <Forbidden />} />

      <Route path='/authpage' element={isAdmin() ? <Authpage/>: <Forbidden />} />

      <Route path='/community/:address/:title' element={isAdmin() ? <BoardView/> : <Forbidden />} />
      <Route path='/community/myWrite/:address/:title' element={isAdmin() ? <BoardView/> : <Forbidden />} />

      <Route path='/forbidden' element={<Forbidden />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;