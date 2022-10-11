import '../App.css';
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/header';
import {useNavigate} from 'react-router-dom';
import './userHome.css';
import BloodContract from '../components/BloodContract';
import caver from '../klaytn/caver';

function Home() {
    const navigate = useNavigate();

    const submainHandler = () => {
        navigate('/providekey')
    }

    var [name, setName] = useState("");
    var [id, setId] = useState("");
    var [date, setDate] = useState("");
    var [donateType, setType] = useState("");
    const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]

    const wallet_session = () => {
        console.log("Wallet Session Loading");
        const data = JSON.parse(sessionStorage.getItem("walletInstance"));
        console.log(data.address);
        return data.address // 세션 스토리지 address값반환
    }
      

    const getCertdata = async () => {
        // console.log("Wallet Instance Address : ",walletInstance.address);
        const send_address = wallet_session();
        try{
            const cert = BloodContract.methods.InquiryTo(send_address,1234,0).call()
            const cert_data = await cert;
            console.log("cert data is :",cert_data);
            setName(name = cert_data.get_name);
            setId(id = cert_data.get_id);
            setDate(date = cert_data.get_date);
            setType(donateType = cert_data.get_donateType);
        }catch(err){
            console.log(err);
        }
        console.log("cycle done");
    }
    const check_existence = async()=>{
        const inquiry_pw = await BloodContract.methods.Check_Existence3(10).call();
        console.log("Checking Existence Thorugh Blood Contract : ",inquiry_pw);
    }
    
    console.log("Checking Existence Through Smart Contract");
    check_existence();

    console.log("Getting Certificate Data");
    getCertdata();
    
    console.log("state: ", name);

    return(
        <section>
            <Header/>
            <div className="card">
                <div className="front">
                    홍길동님의 헌혈증명서
                </div>
                <div className="back">
                    발급번호 : 101
                    <br/>
                    헌혈 종류 : 전혈 헌혈
                    <br/>
                    헌혈 일자 : 2022-09-04
                    <br/>
                    혈액원명 : 경기남부혈액원
                    <br/>
                    헌혈 가능일까지 17일 남았습니다.   
                    <button className="submain-btn" onClick={submainHandler}>조회키 제공</button>
                </div>
            </div>
        </section>
    );
}

export default Home;