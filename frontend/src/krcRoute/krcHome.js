import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BloodContract from '../components/BloodContract'
import caver from '../klaytn/caver';

//const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]

//여기서 리셋이됨
/*
if (walletFromSession) {
  try {
    caver.klay.accounts.wallet.add(JSON.parse(walletFromSession))
  } catch (e) { // error 발생시
    // If value in sessionStorage is invalid wallet instance,
    // remove it from sessionStorage.
    sessionStorage.removeItem('walletInstance')
  }
}
*/
console.log("klaytn wallet is :", caver.klay.accounts.wallet)
class NFTminting extends Component {
    state = {
      name: '',
      id: '',
      bloodType: '',
      home_address: '',
      certificateNum: '',
      donateType: '',
      date: '',
      wallet_address:'',
    }
    
    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address } = this.state
        await mintCertificate(name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address)
        await window.location.reload();
    }
    //test
    handleClick = (e) => {
      console.log("Hi");
    }
    render() {
        const { name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address } = this.state
        return (
            
          <form className="NFTminting" onSubmit={this.handleSubmit}>
            <Input
              className="NFTminting_name"
              name="name"
              label="헌혈자 이름"
              value={name}
              onChange={this.handleInputChange}
              placeholder="헌혈자 이름을 입력하시오."
              required
            />
            
            <Input
              className="NFTminting_id"
              name="id"
              label="주민등록번호"
              value={id}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 주민등록번호를 입력하시오."
              required
            />
            
            <Input
              className="NFTminting_bloodType"
              name="bloodType"
              label="혈액형"
              value={bloodType}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 혈액형을 입력하시오."
              required
            />

            <Input
              className="NFTminting_home_address"
              name="home_address"
              label="주소"
              value={home_address}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 주소를 입력하시오."
              required
            />

            <Input
              className="NFTminting_certificateNum"
              name="certificateNum"
              label="증명서 번호"
              value={certificateNum}
              onChange={this.handleInputChange}
              placeholder="증명서 번호를 입력하시오."
              required
            />

            <Input
              className="NFTminting_donateType"
              name="donateType"
              label="헌혈 종류"
              value={donateType}
              onChange={this.handleInputChange}
              placeholder="헌혈 종류를 입력하시오."
              required
            />

            <Input
              className="NFTminting_date"
              name="date"
              label="날짜"
              value={date}
              onChange={this.handleInputChange}
              placeholder="오늘 날짜를 입력하시오."
              required
            />

            <Input
              className="NFTminting_wallet_address"
              name="wallet_address"
              label="지갑 주소"
              value={wallet_address}
              onChange={this.handleInputChange}
              placeholder="지갑 주소를 입력하시오."
              required
            />

            <Button
              className="Certificate__upload"
              type="submit"
              title="헌혈증명서 업로드"
            />
            <button name="버튼" onClick={this.handleClick}>버튼버튼버튼</button>
          </form>
        )
      }
}

export const wallet_session = () => {
  const data = JSON.parse(sessionStorage.getItem("walletInstance"));
  console.log(data.address);
  return data.address // 세션 스토리지 address값반환
}


export const mintCertificate = async (
  name,
  id,
  bloodType,
  home_address,
  certificateNum,
  donateType,
  date,
  //추가 mintCert시 필요
  wallet_address,
) => {
  //const walletFromSession = sessionStorage.getItem('walletInstance')
  //const wallet = JSON.parse(walletFromSession)
  //처음 로그인하면 되는데 페이지 F5누르면 wallet account가 사라짐
  
    const walletFromSession = sessionStorage.getItem('walletInstance')
    const wallet = JSON.parse(walletFromSession)
    console.log("pk is",wallet);
    const walletInstance = caver.klay.accounts.privateKeyToAccount(wallet.privateKey);
    caver.klay.accounts.wallet.add(walletInstance)
    console.log("Caver Wallet Access :", caver.klay.accounts.wallet[0])
  
  //wallet instance 없음
    const before_cert_length = await BloodContract.methods.user_CertLength(wallet_address).call()
    console.log("before cert length: ", before_cert_length);
    await BloodContract.methods.createCertificate(
      name,
      id,
      bloodType,
      home_address,
      certificateNum,
      donateType,
      date).send({
        from: wallet.address,// 보내는 사람 주소
        gas: '200000000',
      })
    console.log("dummy");
    
    await BloodContract.methods.mintCert(wallet_address, certificateNum).send({
      from: wallet.address,// 보내는 사람 주소
      gas: '200000000',
    })
    console.log("mint");
    
    const after_cert_length = await BloodContract.methods.user_CertLength(wallet_address).call()
    console.log("after cert length: ", after_cert_length);
    
}

export default NFTminting