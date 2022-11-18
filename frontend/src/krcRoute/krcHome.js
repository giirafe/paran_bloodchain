import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BloodContract from '../components/BloodContract'
import caver from '../klaytn/caver';
import './krcHome.scss'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import MainHeader from '../components/layout/mainHeader';

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
          <body>
            <MainHeader/>
            <div className="space"></div>
            <div className="Board_css">
              <BootstrapTable>
                  <TableHeaderColumn width='350' dataField='mint_transaction' dataAlign='center'>발행 기록</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='time_stamp' dataAlign='center'>발행일</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='mint_address' dataAlign='center' isKey={true}>발행 주소</TableHeaderColumn>
              </BootstrapTable>
            </div>
            <div className="mint">
              <form className="NFTminting" onSubmit={this.handleSubmit}>
              <label>헌혈증명서 발행</label>
              <br/>
              <input
                className="NFTminting_css"
                name="name"
                label="헌혈자 이름"
                value={name}
                onChange={this.handleInputChange}
                placeholder="헌혈자 이름을 입력하시오."
                required
              />
              
              <input
                className="NFTminting_css"
                name="id"
                label="주민등록번호"
                value={id}
                onChange={this.handleInputChange}
                placeholder="헌혈자의 주민등록번호를 입력하시오."
                required
              />
              
              <input
                className="NFTminting_css"
                name="bloodType"
                label="혈액형"
                value={bloodType}
                onChange={this.handleInputChange}
                placeholder="헌혈자의 혈액형을 입력하시오."
                required
              />

              <input
                className="NFTminting_css"
                name="home_address"
                label="주소"
                value={home_address}
                onChange={this.handleInputChange}
                placeholder="헌혈자의 주소를 입력하시오."
                required
              />

              <input
                className="NFTminting_css"
                name="certificateNum"
                label="증명서 번호"
                value={certificateNum}
                onChange={this.handleInputChange}
                placeholder="증명서 번호를 입력하시오."
                required
              />

              <input
                className="NFTminting_css"
                name="donateType"
                label="헌혈 종류"
                value={donateType}
                onChange={this.handleInputChange}
                placeholder="헌혈 종류를 입력하시오."
                required
              />

              <input
                className="NFTminting_css"
                name="date"
                label="날짜"
                value={date}
                onChange={this.handleInputChange}
                placeholder="오늘 날짜를 입력하시오."
                required
              />
              <br/>
              <input
                className="NFTminting_css"
                name="wallet_address"
                label="지갑 주소"
                value={wallet_address}
                onChange={this.handleInputChange}
                placeholder="지갑 주소를 입력하시오."
                required
              />
              <br/>
              <Button
                className="Certificate__upload"
                type="submit"
                title="헌혈증명서 업로드"
              />
            </form>
            </div>
          </body>
          
        )
      }
}

export const wallet_session = () => {
  const data = JSON.parse(sessionStorage.getItem("walletInstance"));
  console.log(data.address);
  return data // 세션 스토리지 address값반환
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
  
  const jsonWallet = wallet_session();
  const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
  caver.klay.accounts.wallet.add(wallet)
  
  /*
  const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
  const wallet = walletInstance;
  */
  
    const before_cert_length = await BloodContract.methods.getCertificateCount(wallet_address).call()
    console.log("before cert length: ", before_cert_length);

    try {
      await BloodContract.methods.createCertificate(
        name,
        id,
        bloodType,
        home_address,
        certificateNum,
        donateType).send({
          from: wallet.address,// 보내는 사람 주소
          gas: '200000000',
        })
      console.log("dummy");
      console.log("Certficate Created. Now Minting Through Smart Contract");
  
      await BloodContract.methods.mintCert(wallet_address, certificateNum).send({
        from: wallet.address,// 보내는 사람 주소
        gas: '200000000',
      })
  
      console.log("Certificate Minted");
    } catch(e){
      console.error("Error From Creating Certificate : ",e);
      alert("Mint Failed");
    }

    
    const after_cert_length = await BloodContract.methods.getCertificateCount(wallet_address).call()
    console.log("After Cert length: ", after_cert_length);

    await caver.klay.accounts.wallet.clear()

    
    // const keyringInstance = caver.wallet[0]

  //   const setResult = await BloodContract.send({
  //     from: deployerKeyring.address,
  //     feeDelegation: true,
  //     feePayer: feePayerKeyring.address,
  //     feeRatio: 50, // Without feeRatio, `send` will use FeeDelegatedSmartContractExecution
  //     gas: 1000000,
  //  }, 'set', keyString, 'anotherValue')

    console.log("cycle done");
}

// export const getMintData = async() => {
//   const jsonWallet = wallet_session();
//   const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
//   caver.klay.accounts.wallet.add(wallet)
 
  
//   await caver.klay.accounts.wallet.clear()
// }

export default NFTminting