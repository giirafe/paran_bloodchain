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
            <button name="test" onClick={handleTouch}>test</button>
        </body>
        

    );
}

export const handleTouch = async () => {
    
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

    // const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey)
    // console.log("Address of WalletInstance : ",walletInstance.address);

    if (!walletInstance){
        console.error("Wallet Instance Fetch Failed");
    } else {
        console.log("Valid Caver Instance")
    }

    // 개인 조회 키 암호 설정 test
    BloodContract.methods.set_InquiryPW('0xd735e6b264277503066f8afb1785d6661049b831',2021).send({
        from:walletInstance.address,
        gas:'2000000'
    })
    
    // Account 없이 balance를 Smart Contract 값 조회
    const balances = await BloodContract.methods.balances('0xA1C889E67f0B762675aD74120c813E4c790F19aC').call()
    console.log("Token Balance is :  ", balances);

    console.log("cycle done");
}
export default myinfo_comp;