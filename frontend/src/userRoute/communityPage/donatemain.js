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
  const [walletTo, setWalletTo] = useState('')
  const [count, setCount] = useState('')
  
  const handleWalletTo = (e) => {
    setWalletTo(e.target.value)
  }

  const handleCount = (e) => {
    setCount(e.target.value)
  }

  const handleSubmit = async (e) => {
    await donateBalance(walletTo, count);
    await window.location.reload();
    //this.props.WriteDonate(walletaddress, count)
  }
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
              onChange={handleWalletTo}
              placeholder="기부 대상자의 지갑주소를 입력하세요."

              required
            />
            <br/>
            <label>사용 개수</label>
            <br/>
            <input
              className="Donate_count"
              name="count"
              onChange={handleCount}
              placeholder="비밀번호를 입력하세요."
              required
            />
            <br/>
            <button className="main-btn" onClick={handleSubmit}>기부</button>
        </div>
        </>

  )
}

export const wallet_session = () => {
  const data = JSON.parse(sessionStorage.getItem("walletInstance"));
  console.log(data.address);
  return data // 세션 스토리지 address값반환
}

export const donateBalance = async(
  walletTo,
  count
) => {
  await caver.klay.accounts.wallet.clear()
  const jsonWallet = wallet_session();
  const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
  caver.klay.accounts.wallet.add(wallet)
  
  /*
  const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
  const wallet = walletInstance;
  */
  
  const before_balance = await BloodContract.methods.balances(wallet.address).call();
  console.log("before_balance: ", before_balance);
  
  const count1 = await parseInt(count);
  console.log("count is : ", typeof(count1));

  await BloodContract.methods.transferFrom(wallet.address, walletTo, count1).send({
    from: wallet.address,
    gas: '200000000',
  });

  const after_balance = await BloodContract.methods.balances(wallet.address).call()
  console.log("after_balance: ", after_balance);
  
  await caver.klay.accounts.wallet.clear()

  console.log("cycle done");

  
}
export default Donatemain