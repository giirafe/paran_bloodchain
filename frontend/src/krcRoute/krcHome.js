import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BloodContract from '../components/BloodContract'
import caver from '../klaytn/caver';

//const walletFromSession = sessionStorage.getItem('walletInstance')
//caver.klay.accounts.wallet.add(JSON.parse(walletFromSession))
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
        console.log("type is :", typeof(e.target.value));
        console.log(caver.klay.accounts.wallet[0]);
        console.log(caver.klay.accounts.wallet);
        const walletInstance_1 = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
        console.log(walletInstance_1);
    }
    
    handleSubmit = async (e) => {
        e.preventDefault()
        
        //mintCertificate(name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address)
        const { name, id, bloodType, home_address, certificateNum,donateType,date, wallet_address} = this.state

      const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
      if (!walletInstance){
          console.error("Wallet Instance Fetch Failed");
      } else {
          console.log("Valid Caver Instance")
      }

      const ret1 = await BloodContract.methods.createCertificate(
          name,
          id,
          bloodType,
          home_address,
          certificateNum,
          donateType,
          date
      ).send({
            from: walletInstance.address,// 보내는 사람 주소
            gas: '200000000',
          })
      console.log("ret1 is ", ret1);
    
      const ret2 = await BloodContract.methods.mintCert(wallet_address, certificateNum).send({
        from: walletInstance.address,// 보내는 사람 주소
        gas: '200000000',
      })
      console.log("return is ", ret2);
      
      const CertLength = await BloodContract.methods.user_CertLength(wallet_address).call()
      console.log("CertLength is ", CertLength);
      
      const balances = BloodContract.methods.balances(wallet_address).call()
      console.log("balances is : ",balances);
      const only_use_balances = BloodContract.methods.only_use_balances(wallet_address).call()
      console.log("only_use_balances is : ",only_use_balances);
    
      console.log("cycle done");
    }
    
    handleMinting = async () => {
      const { name, id, bloodType, home_address, certificateNum,donateType,date, wallet_address} = this.state

      if (!walletInstance){
          console.error("Wallet Instance Fetch Failed");
      } else {
          console.log("Valid Caver Instance")
      }

      const ret1 = await BloodContract.methods.createCertificate(
          name,
          id,
          bloodType,
          home_address,
          certificateNum,
          donateType,
          date
      ).send({
            from: walletInstance.address,// 보내는 사람 주소
            gas: '200000000',
          })
      console.log("ret1 is ", ret1);
    
      const ret2 = await BloodContract.methods.mintCert(wallet_address, certificateNum).send({
        from: walletInstance.address,// 보내는 사람 주소
        gas: '200000000',
      })
      console.log("return is ", ret2);
      
      const CertLength = await BloodContract.methods.user_CertLength(wallet_address).call()
      console.log("CertLength is ", CertLength);
      
      const balances = BloodContract.methods.balances(wallet_address).call()
      console.log("balances is : ",balances);
      const only_use_balances = BloodContract.methods.only_use_balances(wallet_address).call()
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
            <button name="헌혈증명서 발급" onClick={this.handleMinting}>헌혈증명서 발급</button>
          </form>
        )
      }
}

export default NFTminting