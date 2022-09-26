import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Main from './main';
import User from './userRoute/userHome';
import Login from './login';
import Providekey from './userRoute/nftPage/providekey';
import Myinfo from './userRoute/myinfoPage/myinfo';
import Community from './userRoute/communityPage/community';
import Useletter from './userRoute/useletterPage/useletter';
import NFTmoreInfo from './userRoute/nftPage/NFTmoreInfo';
import Donaterecord from './userRoute/communityPage/donaterecord';
import Writecontent from './userRoute/communityPage/writecontent';


import Krc from './krcRoute/krcHome';
import Inquiry from './InquiryRoute/InquiryPage';

import caver from './klaytn/caver'
import BlockNumber from './components/BlockNumber';
import Auth from './components/Auth';
import NotFound from './components/NotFound';
import Forbidden from './components/Forbidden';
import isAdmin from './components/isAdmin';
import RouteIf from './components/RouteIf';

function App() {

  return (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      {
        isAdmin() === true
        ? <Route path='/user' element={<User />} />
        : <Route path='/' element={<Forbidden />} />
      }
      {
        isAdmin() === true
        ? <Route path='/providekey' element={<Providekey />} />
        : <Route path='/' element={<Forbidden />} />
      }
      {
        isAdmin() === true
        ? <Route path='/myinfo' element={<Myinfo />} />
        : <Route path='/' element={<Forbidden />} />
      }
      {
        isAdmin() === true
        ? <Route path='/community' element={<Community />} /> 
        : <Route path='/' element={<Forbidden />} />
      }
      {
        isAdmin() === true
        ? <Route path='/useletter' element={<Useletter />} />
        : <Route path='/' element={<Forbidden />} />
      }
      {
        isAdmin() === true
        ? <Route path='/useletter' element={<Useletter />} /> 
        : <Route path='/' element={<Forbidden />} />
      }
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <div>
      <BlockNumber />
    </div>


  </BrowserRouter>

  );
}

export default App;