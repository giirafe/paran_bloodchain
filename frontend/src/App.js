import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import Main from './main';
import User from './userRoute/home';
import Login from './login';
import Providekey from './userRoute/providekey';
import Myinfo from './userRoute/myinfo';
import Community from './userRoute/community';
import Useletter from './userRoute/useletter';

import caver from './klaytn/caver'
import BlockNumber from './components/BlockNumber';
import Auth from './components/Auth';

function App() {
  //모달 관련 함수
  //여기서 안쓰임
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  const getBlockNumber = async() =>{
    const blockNumber = await caver.klay.getBlockNumber()
    this.setState({currentBlockNumber: blockNumber})
  }
  
  return (

  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/providekey' element={<Providekey />} />
        <Route path='/myinfo' element={<Myinfo />} />
        <Route path='/community' element={<Community />} />
        <Route path='/useletter' element={<Useletter />} />
        <Route path='/bapp' element={<Auth />} />
    </Routes>

    <div>
      <BlockNumber />
    </div>
  </BrowserRouter>

  );
}

export default App;