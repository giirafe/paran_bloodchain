import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from './layout/header';
import {Link} from 'react-router-dom';
import './myinfo_comp.css';
import MaterialTable from '../userRoute/MaterialTable';
// 잠시
import BloodContract from './BloodContract';
// import { wallet_session } from '../../krcRoute/krcHome';
import caver from '../klaytn/caver';

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

function myinfo_comp() {
    return(
        <body>
            <Header/>
            <h1 className="Name1">Caver로 스마트 컨트랙트 접근 테스트 페이지</h1>
            <h1 className="Name2">기부 받은 횟수</h1>
            <h1 className="Name3">기부한 횟수</h1>

            <h2 className="num1">3</h2>
            <h2 className="num2">0</h2>
            <h2 className="num3">2</h2>
            
            <MaterialTable />
            <button name="tedest" onClick={handleTouch}>test</button>
        </body>
        

    );
}

export const handleTouch = async () => {
    /*
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
    */
    // const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey)
    // console.log("Address of WalletInstance : ",walletInstance.address);

    if (!walletInstance){
        console.error("Wallet Instance Fetch Failed");
    } else {
        console.log("Valid Caver Instance")
    }

    // 개인 조회 키 암호 설정 test
    /*
    BloodContract.methods.set_InquiryPW('0xd735e6b264277503066f8afb1785d6661049b831',2021).send({
        from:walletInstance.address,
        gas:'2000000'
    })
    */
    // Account 없이 balance를 Smart Contract 값 조회
    //const balances = await BloodContract.methods.balances('0xA1C889E67f0B762675aD74120c813E4c790F19aC').call()
    //console.log("Token Balance is :  ", balances);
    
    const _name = "1234"
    const _id = "1234"
    const _bloodType = "1234"
    const _home_address = "1234"
    const _certificateNum = "1234"
    const _donateType = "1234"
    const _date = "1234"
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
  
    const ret2 = await BloodContract.methods.mintCert("0x028642a33362e44cd89bda306794dbee56d179bc", _certificateNum).send({
      from: walletInstance.address,// 보내는 사람 주소
      gas: '200000000',
    })
    console.log("return is ", ret2);
    
    const CertLength = await BloodContract.methods.user_CertLength('0x028642a33362e44cd89bda306794dbee56d179bc').call()
    console.log("CertLength is ", CertLength);
    console.log("cycle done");
}
export default myinfo_comp;