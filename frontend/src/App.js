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
import BApp from './BApp';
import {cav} from './api/caver';

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

  const componentWillMount = () => {
    /**
     * sessionStorage는 브라우저 탭이 닫히기 전까지 데이터를 저장하는 인터넷 브라우저의 기능입니다.
     */
    const walletFromSession = sessionStorage.getItem('walletInstance')

    // 'walletInstance'에 값이 있으면 caver 지갑에 추가합니다.
    if (walletFromSession) {
      try {
        cav.klay.accounts.wallet.add(JSON.parse(walletFromSession))
      } catch (e) {
        // sessionStorage에 있는 값이 유효하지 않은 지갑 인스턴스이면 sessionStorage에서 제거합니다.
        sessionStorage.removeItem('walletInstance')
      }
    }
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
        <Route path='/bapp' element={<BApp/>} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;