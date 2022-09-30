import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BloodContract from '../components/BloodContract'
import caver from '../klaytn/caver';
/*
const walletFromSession = sessionStorage.getItem('walletInstance')
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
const walletFromSession = sessionStorage.getItem('walletInstance')
if (walletFromSession) {
    try {
      caver.klay.accounts.wallet.add(JSON.parse(walletFromSession))
    } catch (e) { // error 발생시
      // If value in sessionStorage is invalid wallet instance,
      // remove it from sessionStorage.
      sessionStorage.removeItem('walletInstance')
    }
}
    
const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]

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

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address } = this.state
        //mintCertificate(name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address)
    }

    handleMinting = async () => {
      const { _name, _id, _bloodType, _home_address, _certificateNum,_donateType,_date, _wallet_address } = this.state

      if (!walletInstance){
          console.error("Wallet Instance Fetch Failed");
      } else {
          console.log("Valid Caver Instance")
      }

      const ret1 = await BloodContract.methods.createCertificate(
          _name,
          _id,
          _bloodType,
          _home_address,
          _certificateNum,
          _donateType,
          _date
      ).send({
            from: walletInstance.address,// 보내는 사람 주소
            gas: '200000000',
          })
      console.log("ret1 is ", ret1);
    
      const ret2 = await BloodContract.methods.mintCert(_wallet_address, _certificateNum).send({
        from: walletInstance.address,// 보내는 사람 주소
        gas: '200000000',
      })
      console.log("return is ", ret2);
      
      const CertLength = await BloodContract.methods.user_CertLength(_wallet_address).call()
      console.log("CertLength is ", CertLength);
      
      const balances = BloodContract.methods.balances(_wallet_address).call()
      console.log("balances is : ",balances);
      const only_use_balances = BloodContract.methods.only_use_balances(_wallet_address).call()
      console.log("only_use_balances is : ",only_use_balances);
    
      console.log("cycle done");
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
            <button name="버튼" onClick={this.handleMinting}>헌혈증명서 발급</button>
          </form>
        )
      }
}

export default NFTminting