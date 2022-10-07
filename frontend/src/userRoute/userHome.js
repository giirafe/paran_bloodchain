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
    const cert = BloodContract.methods.InquiryTo(walletInstance.address,1234,0).call()
    //console.log("Cert is ", cert);
    
    function data() {
        const cert = BloodContract.methods.InquiryTo(walletInstance.address,1234,0).call()
        //cert.then((response) => {console.log(response)});
        return {
            get_name: cert.then((response) => {
                console.log(response);
                console.log("test");
                
            }),
        }
    }
    const name = data();
    console.log("name is ", name);
    /*
    const get_cert = async () => {
        await BloodContract.methods.user_CertLength(walletInstance.address).call().then((totalCertLength) => {
            if(!totalCertLength) return []
            const feed = []
            for (let i = 0; i < totalCertLength - 1; i++) {
                const cert = BloodContract.methods.InquiryTo(walletInstance.address, 1234, i).call()
                feed.push(cert)
            }
            console.log("되나?", feed);
            return Promise.all(feed)
        })
    }
    
    const data = get_cert();
    console.log("제발돼라: ", data);
    */

    //cert.then((response) => console.log("response:",response.get_name))

    /*
    console.log("type of cert is:", cert);
    cert.then(function(response){
        console.log('response', response);
    }).catch(function(reason){
        console.log('reason', reason);
    })
    */
    /*
    const get_data = () => cert.then(function(result) {
        const data = result; // promise의 result object값이 data로 들어감
        //console.log(data.get_name); 
        const name = data.get_name;
        const id = data.get_id;
        const donateType = data.get_donateType;
        const date = data.get_date;
        let obj = {name: name, id: id, donateType: donateType, date: date};
        console.log(obj);
        return obj
    });
    async function a(){
        const cert_data = await get_data();
        return cert_data
    }
    const b = a();
    console.log("b is :", b);
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
export const get_cert_data = async () => {
    const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
    // address를 통해서 블록체인 내에 매핑에 접근하면 됨
    
    const cert = BloodContract.methods.InquiryTo(walletInstance.address,1234,0).call()
    
    const get_data = () => cert.then(function(result) {
        const data = result; // promise의 result object값이 data로 들어감
        //console.log(data.get_name); 
        const name = data.get_name;
        const id = data.get_id;
        const donateType = data.get_donateType;
        const date = data.get_date;
        let obj = {name: name, id: id, donateType: donateType, date: date};
        return obj
    });

    const cert_data = await get_data();
    console.log("cert_data in function: ",cert_data);
    return cert_data;
}
export default Home;