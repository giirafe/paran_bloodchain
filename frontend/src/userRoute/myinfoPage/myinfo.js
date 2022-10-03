import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import './myinfo.css';
import MaterialTable from '../MaterialTable';
// 잠시
import BloodContract from '../../components/BloodContract';
import { wallet_session } from '../../krcRoute/krcHome';
import caver from '../../klaytn/caver';

function myinfo() {
    return(
        <body>
            <Header/>
            <h1 className="Name1">기부 가능 횟수</h1>
            <h1 className="Name2">기부 받은 횟수</h1>
            <h1 className="Name3">기부한 횟수</h1>

            <h2 className="num1">3</h2>
            <h2 className="num2">0</h2>
            <h2 className="num3">2</h2>
            
            <MaterialTable />

            <Link to ="/createkey">
            <button className="main-btn" onClick="hi">조회 키 비밀번호 생성하기</button>
        </Link>
        </body>

    );
}

export const handleTouch = async () => {
    
    console.log("Caver Wallet Length : ",caver.klay.accounts.wallet.length);
    const walletInstance = await caver.klay.accounts.wallet && await caver.klay.accounts.wallet[0]

    // 어거지 try
    // console.log("Data From Session",sessionStorage.getItem("walletInstance"));
    // const wallet_json = JSON.parse(sessionStorage.getItem("walletInstance"))
    // const privateKey = wallet_json.privateKey;
    // console.log("Private Key From Session",privateKey);

    // const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey)
    // console.log("Address of WalletInstance : ",walletInstance.address);

    if (!walletInstance){
        console.error("Wallet Instance Fetch Failed");
    } else {
        console.log("Valid Caver Instance")
    }

    // 개인 조회 키 암호 설정 test
    BloodContract.methods.set_InquiryPW('0x54ea798eed97f16c35d2265e94cc2d275ca67055',999).send({
        from:walletInstance.address,
        gas:'2000000'
    })
    
    // Account 없이 balance를 Smart Contract 값 조회
    const balances = await BloodContract.methods.balances('0xA1C889E67f0B762675aD74120c813E4c790F19aC').call()
    console.log("Token Balance is :  ", balances);

    console.log("cycle done");
}
export default myinfo;