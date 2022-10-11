import '../App.css';
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/header';
import {useNavigate} from 'react-router-dom';
import './userHome.css';
import BloodContract from '../components/BloodContract';
import caver from '../klaytn/caver';
//작업
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
    //const cert = BloodContract.methods.InquiryTo(walletInstance.address,1234,0).call()
    //console.log("Cert is ", cert);
    const getCertdata = async () => {
        const cert = BloodContract.methods.InquiryTo(walletInstance.address,1234,0).call()
        console.log("cert is :",cert);
        const cert_data = await cert;
        console.log("cert data is :",cert_data);
        setName(name = cert_data.get_name);
        setId(id = cert_data.get_id);
        setDate(date = cert_data.get_date);
        setType(donateType = cert_data.get_donateType);
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
                    발급번호 : {id}
                    <br/>
                    헌혈 종류 : {donateType}
                    <br/>
                    헌혈 일자 : {date}
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