import $ from 'jquery';
import '../App.css';
import Header from '../components/layout/header';
import {useNavigate} from 'react-router-dom';
import './userHome.scss';
import React, {useState, Component, useLayoutEffect, useEffect } from 'react'
import caver from '../klaytn/caver';
import BloodContract from '../components/BloodContract';
import { Link } from 'react-router-dom';
import {ScrollTrigger} from 'gsap/ScrollTrigger.js';
import {gsap} from "gsap";


import HomeCard from './card';
import Sidebar from './Sidebar';
import Story from './story';

import './card.scss';
import {Icon} from '@iconify/react';
import IMG from '../components/layout/방울이.png'
import IMG2 from '../components/layout/방울이2.png'
import IMG3 from '../components/layout/방울이3.png'

/*
const wave = (text) => {
  for(var i in text) { 
    if(text[i] === " ") {
      $(".wavetext").append( $("<span>").html("&nbsp;") ); 
    } else {  
      $(".wavetext").append( $("<span>").text(text[i]) ); 
    }
  }
}*/

const CARDS = 3;
const MAX_VISIBILITY = 3;

const Card = ({img,title, content}) => (
  <div className='card'>
    <div className="front" style={{background: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    </div>
    <div className="back">
        <br/>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><Icon icon="typcn:chevron-left-outline" /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><Icon icon="typcn:chevron-right-outline"/></button>}
    </div>
  );
};


function Home() {
    var [name, setName] = useState("");
    var [id, setId] = useState("");
    var [donateType, setDonateType] = useState("");
    var [date, setDate] = useState("");
    
    var [certificateNum, setDate] = useState("");
    var [home_address, setDate] = useState("");
    var [length, setLength] = useState(0);

    console.log("klaytn wallet is :", caver.klay.accounts.wallet)
    const walletFromSession = sessionStorage.getItem('walletInstance')
    const wallet = JSON.parse(walletFromSession)
    
    const getLength = async() => {
        const acc_balance = await BloodContract.methods.balances(wallet.address).call();
        console.log("Account Balance is : " , acc_balance);
        var cert_length = await BloodContract.methods.getCertificateCount(wallet.address).call()
        cert_length = parseInt(cert_length);
        console.log("length: ",cert_length);
        
        setLength(length = cert_length);
    }
    
    const getCertdata = async () => {

        await getLength();
        if(length <1){
            console.log("User Has No Blood Certificate");
            setName(name = "NULL");
            setId(id = "NULL");
            setDonateType(donateType = "NULL");
            setDate(date = "NULL");
        } else{
            var length_max = length - 1;
            console.log("length_max", length_max);
            // const cert = BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
            // console.log("cert is :",cert);
            // const cert_data = await cert;
            // const cert_data = await BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
            // const sample_address ="0xa89421237143433ab88d15c7d614ddff24c2c191"; // 타인의 주소 테스트
            const cert_data = await BloodContract.methods.getCertData(wallet.address,length_max,0).call({from: wallet.address});
            console.log("Cert is ", cert_data)
            setName(name = cert_data.get_name);
            setId(id = cert_data.get_id);
            setDonateType(donateType = cert_data.get_donateType);
            setDate(date = cert_data.get_date);
        }
        
        console.log("cycle done");

    }

    getCertdata();
    console.log("state: ", name);

    /*
    useEffect(() => {
      wave("방울이와 함께 헌혈 여행을 떠나볼까요?");
    },[])*/

    return(
        <body>
            <Header/>
            <Sidebar width={330}>
              {<Story/>}
            </Sidebar>
            <div className='app'>
                <Carousel>
                    <Card img={IMG} title={`${name}님의 헌혈증명서`} content={
                        `\n
                        발급 번호 : ${certificateNum}\n
                        헌혈 종류 : ${donateType}\n
                        헌혈 일자 : ${date}\n
                        혈액원명 : 경기남부혈액원\n
                        헌혈 가능일까지 17일 남았습니다.`
                    }/>
                    <Card img={IMG2}title={`${name}님의 혈액 검사 결과`} content={
                        `\n
                          B형 간염 : 음성\n
                          C형 간염 : 음성\n
                          매독 항체 : 음성\n
                          말라리아 항체 : 음성\n
                          혈액형 아형 : 음성\n
                          `
                    }/>
                    <Card img={IMG3}title={`${name}님의 개인 정보`} content={
                        `\n
                          주민등록번호 : ${id}\n
                          주소 : ${home_address}\n
                        `
                    }/>
                </Carousel>
                <div className="effectText">
                  <h2>
                    <span>방</span>
                    <span>울</span>
                    <span>이</span>
                    <span>와</span>
                    <span> </span>
                    <span>함</span>
                    <span>께</span>
                    <span> </span>
                    <span>헌</span>
                    <span>혈</span>
                    <span> </span>
                    <span>여</span>
                    <span>행</span>
                    <span>을</span>
                    <span> </span>
                    <span>떠</span>
                    <span>나</span>
                    <span>볼</span>
                    <span>까</span>
                    <span>요</span>
                    <span>?</span>
                  </h2>
                </div>
            </div>
        </body>
        )
}


export default Home;
