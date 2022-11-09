import React, { Component, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import './InquiryPage.css'
import {useNavigate} from 'react-router-dom';
import BloodContract from '../components/BloodContract';
function Inquiry() {
    const [walletAddress, setWalletAddress] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleAddress = (e) => {
      setWalletAddress(e.target.value)
    }

    const resetAddress = (e) => {
      setWalletAddress('')
    }

    const handlePassword = (e) => {
      setPassword(e.target.value)
    }

    const handleSubmit = async(e) => {
      console.log("address : " + walletAddress + "\npassword : " + password)
      const real_password = await BloodContract.methods.Address_PW(walletAddress).call();
      console.log("real_password is : ", real_password);
      console.log("input_password is : ", password);

      if (password === real_password){
        navigate('/라우팅해야함')
        alert("들어갑니다");
      }
      else{
        alert("비밀번호가 틀립니다!");
        window.location.reload();
      }
      //임시 조건문
      //함수 짜서 주소랑 그 비밀번호 불러오면 그형식에 맞춰서 비교하면 됨
      
      /*
      if (walletAddress === '좆같은 주소 넣으면'){
        alert("주소가 잘못되었습니다.")
        window.location.reload(); //그냥 임시로 달아놓은겨
      }

      if (password === "0000") {
        navigate('/라우팅해야함') //나중에 페이지 파놓고 거기로 이동시키면 됨
      }
      else {
        alert("비밀번호가 틀립니다!")
        window.location.reload(); //이것도 임시로
      }
      */
    }

    return (
      
      <div className="Inquiry">
        <label>지갑 주소</label>
        <br/>
        <input
          className="Inquiry_walletaddress"
          name="walletaddress"
          value={walletAddress}
          onChange={handleAddress}
          placeholder="조회 대상의 지갑 주소를 입력하세요."
          required
        />
        <br/>
        <label>비밀번호</label>
        <br/>
        <input
          className="Inquiry_password"
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="비밀번호를 입력하세요."
          required
        />
        <br/>
        <Button
          className="UploadPhoto__upload"
          type="submit"
          title="조회"
          onClick={handleSubmit}
        />
      </div>
                  

    )
}

export default Inquiry