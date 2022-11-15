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
import $ from 'jquery';

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
            const cert_data = await BloodContract.methods.getCertData(wallet.address,length_max,0).call();
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

    useEffect(() => {
        $(".option").click(function(){
            $(".option").removeClass("active");
            $(this).addClass("active");
            
         })
    })

    return(
        <body>
            <Header/>
            <div className="space"></div>
            <div className="space"></div>
            <div className="cards">
                <div class="options">
                    <div class="option active">
                        <div class="shadow"></div>
                        <div class="label">
                            <div class="icon">
                                <i class="fas fa-walking"></i>
                            </div>
                            <div class="info">
                                <div class="main">헌혈 증서</div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="shadow"></div>
                        <div class="label">
                            <div class="icon">
                                <i class="fas fa-snowflake"></i>
                            </div>
                            <div class="info">
                                <div class="main">검사 결과</div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="shadow"></div>
                        <div class="label">
                            <div class="icon">
                                <i class="fas fa-tree"></i>
                            </div>
                            <div class="info">
                                <div class="main">건강 정보</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        )
}


export default Home;
