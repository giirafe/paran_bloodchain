import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'
import './authpage.css'
import BloodContract from './BloodContract'
import caver from '../klaytn/caver'


class Privatekey extends Component {
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
        await setPW(privatekey);
        alert("비밀번호가 변경되었습니다. ");
        window.location.reload();
    }
    //test
    handleClick = (e) => {
      console.log("Hi");
    }
    render() {
        const { privatekey } = this.state
        return (
            
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
            <Button
              className="Certificate__upload"
              type="submit"
              title="회원가입"
            />
          </form>


        )  
      }
}

export const wallet_session = () => {
  const data = JSON.parse(sessionStorage.getItem("walletInstance"));
  console.log(data.address);
  return data // 세션 스토리지 address값반환
}


export const setPW = async(
  privateKey
) => {
  
  const jsonWallet = wallet_session();
  const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
  caver.klay.accounts.wallet.add(wallet)
  
  /*
  const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
  const wallet = walletInstance;
  */
  
  const before_PW = await BloodContract.methods.Address_PW(wallet.address).call();
  console.log("before_PW: ", before_PW);
  
  await BloodContract.methods.set_InquiryPW(wallet.address, privateKey).send({
    from: wallet.address,
    gas: '200000000',
  });

  const after_PW = await BloodContract.methods.Address_PW(wallet.address).call();
  console.log("after_PW: ", after_PW);
  await caver.klay.accounts.wallet.clear()

  console.log("cycle done");

  
}
export default Privatekey