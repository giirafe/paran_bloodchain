import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'
import './authpage.css'
import BloodContract from './BloodContract'
import caver from '../klaytn/caver'
import MainHeader from './layout/mainHeader'
import {useNavigate} from 'react-router-dom';


class AuthPage extends Component {
    state = {
      privatekey: '',
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        const { privatekey } = this.state
        await setDepartment(privatekey);

        //window.location.reload();
    }
    //test
    handleClick = (e) => {
      console.log("Hi");
    }
    render() {
        const { privatekey } = this.state
        return (
          <div>
            <MainHeader />
            <form className="privatekey" onSubmit={this.handleSubmit}>
            
            <input
              className="Privatekey_css"
              name="privatekey"
              label="조회 키"
              value={privatekey}
              onChange={this.handleInputChange}
              placeholder="비밀 키를 입력하시오."
              required
            />
            <br/>
              <button
                className="main-btn"
                type="submit"
                title="회원가입"
              >Sign In</button>
            </form>
          </div>


        )  
      }
}

export const wallet_session = () => {
  const data = JSON.parse(sessionStorage.getItem("walletInstance"));
  console.log(data.address);
  return data // 세션 스토리지 address값반환
}


export const setDepartment = async(
  privateKey
) => {
  const wallet = caver.klay.accounts.privateKeyToAccount(privateKey);
  caver.klay.accounts.wallet.add(wallet)
  

  const check = await BloodContract.methods.checkDepartment(wallet.address).call();
  console.log("User Address To Set Department : ",wallet.address);
  console.log("depart exist : ", check);
  if (check == true){
    alert("이미 계정이 존재합니다.")
    window.location.reload();
  } else{
    await BloodContract.methods.setDepartment(1).send({
      from: wallet.address,// 보내는 사람 주소
      gas: '200000000',
    });  
    alert("회원가입되었습니다. ");
    window.location.assign('./');
  }
  
  /*
  const before_PW = await BloodContract.methods.getDepartment(wallet.address).call();
  console.log("before_PW: ", before_PW);
  
  await BloodContract.methods.setDepartment(wallet.address, privateKey).send({
    from: wallet.address,
    gas: '200000000',
  });

  const after_PW = await BloodContract.methods.getDepartment(wallet.address).call();
  console.log("after_PW: ", after_PW);
  */


  await caver.klay.accounts.wallet.clear()

  console.log("cycle done");

  
}
export default AuthPage