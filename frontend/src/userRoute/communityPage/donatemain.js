import React, { Component, useState } from 'react';
import '../useletterPage/useletter.css';
import Button from '../../components/Button'
import caver from '../../klaytn/caver';
import BloodContract from '../../components/BloodContract';
import { type } from '@testing-library/user-event/dist/type';
import {useLocation} from 'react-router-dom';
import Header from '../../components/layout/header';
import SideMenu from './side';
import './donatemain.css';

function Donatemain () {

      return (
        <>
          <Header/>
          <SideMenu/>
          <div className="space"></div>
          <div className="submit">
            <label>지갑 주소</label>
            <br/>
            <input
              className="Donate_walletaddress"
              name="walletTo"
              placeholder="기부 대상자의 지갑주소를 입력하세요."

              required
            />
            <br/>
            <label>사용 개수</label>
            <br/>
            <input
              className="Donate_count"
              name="count"
              placeholder="비밀번호를 입력하세요."
              required
            />
            <br/>
            <button className="main-btn" onClick='hi'>기부</button>
        </div>
        </>

  )
}

export default Donatemain