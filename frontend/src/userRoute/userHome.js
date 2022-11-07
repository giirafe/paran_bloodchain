import '../App.css';
import Header from '../components/layout/header';
import {useNavigate} from 'react-router-dom';
import './userHome.css';
import React, {useState, Component } from 'react'
import caver from '../klaytn/caver';
import BloodContract from '../components/BloodContract';

import { Link } from 'react-router-dom';

function Home() {
    var [name, setName] = useState("");
    var [id, setId] = useState("");
    var [donateType, setDonateType] = useState("");
    var [date, setDate] = useState("");
    var [length, setLength] = useState(0);

    console.log("klaytn wallet is :", caver.klay.accounts.wallet)
    const walletFromSession = sessionStorage.getItem('walletInstance')
    const wallet = JSON.parse(walletFromSession)
    
    const getLength = async() => {
        const acc_balance = await BloodContract.methods.balances(wallet.address).call();
        console.log("Account Balance is : " , acc_balance);
        var cert_length = await BloodContract.methods.user_CertLength(wallet.address).call()
        cert_length = parseInt(cert_length);
        console.log("length: ",cert_length);
        
        setLength(length = cert_length);
    }
    
    const getCertdata = async () => {
        await getLength();
        var length_max = length - 1;
        console.log("length_max", length_max);
        // const cert = BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
        // console.log("cert is :",cert);
        // const cert_data = await cert;
        // const cert_data = await BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
        // const sample_address ="0xa89421237143433ab88d15c7d614ddff24c2c191"; // 타인의 주소 테스트
        const cert_data = await BloodContract.methods.getCertData(wallet.address,length_max,0).call();
        console.log("Cert is ", cert_data)
        setName(name = cert_data.get_name);
        setId(id = cert_data.get_id);
        setDonateType(donateType = cert_data.get_donateType);
        setDate(date = cert_data.get_date);
        console.log("cycle done");

    }

    getCertdata();
    console.log("state: ", name);

    return(
        <body>
            <Header/>
            <div className="card">
                <div className="front">
                    {name}님의 헌혈증명서
                </div>
                <div className="back">
                    발급번호 : {id}
                    <br/>
                    헌혈 종류 : {donateType}
                    <br/>
                    헌혈 일자 : {date}
                    <br/>
                    혈액원명 : 경기남부혈액원
                    <br/>
                    헌혈 가능일까지 17일 남았습니다.

            <Link to ="/providekey">
                <button className="submain-btn" >조회키 제공</button>
            </Link>
                </div>
            </div>
        </body>
        )
}


export default Home;
