import React, {useState, Component} from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import MaterialTable from '../MaterialTable';
import caver from '../../klaytn/caver';
import BloodContract from '../../components/BloodContract';

function Myinfo() {
    var [name, setName] = useState("");
    var [id, setId] = useState("");
    var [donateType, setDonateType] = useState("");
    var [date, setDate] = useState("");
    var [length, setLength] = useState(0);
    
    console.log("klaytn wallet is :", caver.klay.accounts.wallet)
    const walletFromSession = sessionStorage.getItem('walletInstance')
    const wallet = JSON.parse(walletFromSession)
    
    const getLength = async() => {
        var cert_length = await BloodContract.methods.user_CertLength(wallet.address).call()
        cert_length = parseInt(cert_length);
        console.log("length: ",cert_length);
        
        setLength(length = cert_length);
        
    }

    return(
        <body>
            <Header/>
            <div className="list">
                <h3 className="Name1">기부 가능 횟수</h3>
                <h3 className="Name2">기부 받은 횟수</h3>
                <h3 className="Name3">기부한 횟수</h3>
            </div>

            <div className="listNum">
                <h3 className="num1">3</h3>
                <h3 className="num2">0</h3>
                <h3 className="num3">2</h3>
            </div>
                <MaterialTable />

            <Link to ="/createkey">
            <button className="main-btn" onClick="hi">조회 키 비밀번호 생성하기</button>
            </Link>
        </body>
    );
}

export default Myinfo;