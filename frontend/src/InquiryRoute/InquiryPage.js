import React, { Component, useState, useEffect } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import './InquiryPage.css'
import {useNavigate} from 'react-router-dom';
import BloodContract from '../components/BloodContract';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import InstituteHeader from '../components/layout/instituteHeader';

function Inquiry() {
    const [walletAddress, setWalletAddress] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    var [record, setRecord] = useState([])
    //배열 state를 이용해볼 것.
    var [to_address, setTo] = useState("");
    var [date, setDate] = useState("");

    const [length, setLength] = useState(0);
    var [cnt, setCNT] = useState(0);
    //console.log("klaytn wallet is :", caver.klay.accounts.wallet)
    const walletFromSession = sessionStorage.getItem('walletInstance')
    const wallet = JSON.parse(walletFromSession)

    const getLength = async() => {
        var cert_length = await BloodContract.methods.getInquiryRecordCount(wallet.address).call()
        cert_length = parseInt(cert_length);
        console.log("length: ",cert_length);
        setLength(cert_length);
    }
    const getCertdata = async (i) => {
      //await getLength();
      var length_max = length - 1;
      // const cert = BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
      // console.log("cert is :",cert);
      // const cert_data = await cert;
      // const cert_data = await BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
      // const sample_address ="0xa89421237143433ab88d15c7d614ddff24c2c191"; // 타인의 주소 테스트
      const cert_data = await BloodContract.methods.getInquiryData(i).call({from: wallet.address});
      //console.log("Cert is ", cert_data)
      setTo(to_address = cert_data.inquiry_to_address);
      setDate(date = cert_data.inquiry_date);
      //console.log("cycle done");

  }

  const GetCertRecord = async() => {
      await getLength();
      const bloodRecord = [length];
      for (let i = 0; i < length; i++) {    
          await getCertdata(i)
          bloodRecord.push({
              to_address: to_address,
              date: date,    
          });
      }
      setRecord(bloodRecord)
      console.log(bloodRecord)
  }
  
  useEffect(() => {
      GetCertRecord()
  },[record.length])


    const handleAddress = (e) => {
      setWalletAddress(e.target.value)
    }

    const resetAddress = (e) => {
      setWalletAddress('')
    }

    const handlePassword = (e) => {
      setPassword(e.target.value)
    }

    const handleSubmit = async(e) => {
      console.log("address : " + walletAddress + "\npassword : " + password)
      const real_password = await BloodContract.methods.Address_PW(walletAddress).call();
      console.log("real_password is : ", real_password);
      console.log("input_password is : ", password);

      
      if (password === real_password){
        navigate('/Inquiry', {state:{walletAddress, password}})
        alert("조회 성공!");
      }
      else{
        alert("비밀번호가 틀립니다!");
        window.location.reload();
      }
      
      
      //임시 조건문
      //함수 짜서 주소랑 그 비밀번호 불러오면 그형식에 맞춰서 비교하면 됨
      
      /*
      if (walletAddress === '좆같은 주소 넣으면'){
        alert("주소가 잘못되었습니다.")
        window.location.reload(); //그냥 임시로 달아놓은겨
      }

      if (password === "0000") {
        navigate('/라우팅해야함') //나중에 페이지 파놓고 거기로 이동시키면 됨
      }
      else {
        alert("비밀번호가 틀립니다!")
        window.location.reload(); //이것도 임시로
      }
      */
    }

    return (
      <body>
        <InstituteHeader />
        <div className="space"></div>
      <div className="Board_css">
        <BootstrapTable data={record}>
            <TableHeaderColumn width='350' dataField='to_address' dataAlign='center' isKey={true}>조회 대상</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='date' dataAlign='center'>조회일</TableHeaderColumn>
        </BootstrapTable>
      </div>

      <div className="Inquiry">
        <h2>조회 대상 정보를 입력해주세요.</h2>
        <br/>
        <p>지갑 주소</p>
        <input
          className="Inquiry_walletaddress"
          name="walletaddress"
          value={walletAddress}
          onChange={handleAddress}
          required
        />
        <br/>
        <br/>
        <p>비밀번호</p>
        <input
          className="Inquiry_password"
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <br/><br/>
        <button
          className="main-btn"
          type="submit"
          title="조회"
          onClick={handleSubmit}
        >조회</button>
      </div>
      </body> 

    )
}

export default Inquiry