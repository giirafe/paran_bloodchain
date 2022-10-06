import '../App.css';
import React, {useState, useEffect} from 'react';
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

    const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
    // address를 통해서 블록체인 내에 매핑에 접근하면 됨
    //const cert = BloodContract.methods.InquiryTo(walletInstance.address,1234,0).call()
    /*
    const get_data = () => cert.then(function(result) {
        const data = result; // promise의 result object값이 data로 들어감
        //console.log(data.get_name); 
        const name = data.get_name;
        const id = data.get_id;
        const donateType = data.get_donateType;
        const date = data.get_date;
        //let obj = {name: name, id: id, donateType: donateType, date: date};
        let arr = {name, id, donateType, date};
        return arr
    });

    const cert_data =  await get_data();
    console.log(cert_data);
    */
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