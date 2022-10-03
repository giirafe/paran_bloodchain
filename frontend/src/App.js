import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Main from './main';
import User from './userRoute/userHome';
import Providekey from './userRoute/nftPage/providekey';
import Myinfo from './userRoute/myinfoPage/myinfo';
import Community from './userRoute/communityPage/community';
import Useletter from './userRoute/useletterPage/useletter';
import NFTmoreInfo from './userRoute/nftPage/NFTmoreInfo';
import Donaterecord from './userRoute/communityPage/donaterecord';
import Writecontent from './userRoute/communityPage/writecontent';

import Caver_Test_Route from './components/myinfo_comp';

import Krc from './krcRoute/krcHome';
import Inquiry from './InquiryRoute/InquiryPage';

import caver from './klaytn/caver'
import BlockNumber from './components/BlockNumber';
import Auth from './components/Auth';
import NotFound from './components/NotFound';
import Forbidden from './components/Forbidden';
import isAdmin from './components/isAdmin';
import RouteIf from './components/RouteIf';
import Logout from './components/logout';

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