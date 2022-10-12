import '../App.css';
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/header';
import BloodContract from '../components/BloodContract';
import {useNavigate} from 'react-router-dom';
import './userHome.css';
import caver from '../klaytn/caver';

function Home() {
    const navigate = useNavigate();

    const submainHandler = () => {
        navigate('/providekey')
    }
    const send_address = wallet_session();
    
    var [name, setName] = useState("");
    var [length, setLength] = useState(0);

    console.log("klaytn wallet is :", caver.klay.accounts.wallet)
    
    const getLength = async() => {
        var cert_length = await BloodContract.methods.user_CertLength(send_address).call()
        cert_length = parseInt(cert_length);
        console.log("length: ",cert_length);
        
        setLength(length = cert_length);
        
    }
    
    const getCertdata = async () => {
        await getLength();
        var length_max = length - 1;
        const cert = BloodContract.methods.InquiryTo(send_address,1234,length_max).call()
        console.log("cert is :",cert);
        const cert_data = await cert;
        console.log("cert data is :",cert_data);
        setName(name = cert_data.get_name);
        console.log("cycle done");

    }
    getCertdata();
    console.log("state: ", name);




    return(
        <section>
            <Header/>
            <div className="card">
                <div className="front">
                    {name}님의 헌혈증명서
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

export const wallet_session = () => {
    const data = JSON.parse(sessionStorage.getItem("walletInstance"));
    console.log(data.address);
    return data.address // 세션 스토리지 address값반환
}

export default Home;