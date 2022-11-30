import React, { Component, useState, useEffect } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BloodContract from '../components/BloodContract'
import caver from '../klaytn/caver';
import './krcHome.scss'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import InstituteHeader from '../components/layout/instituteHeader';
import Logout from '../components/logout';

//const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]

//여기서 리셋이됨
/*
if (walletFromSession) {
  try {
    caver.klay.accounts.wallet.add(JSON.parse(walletFromSession))
  } catch (e) { // error 발생시
    // If value in sessionStorage is invalid wallet instance,
    // remove it from sessionStorage.
    sessionStorage.removeItem('walletInstance')
  }
}
*/

console.log("klaytn wallet is :", caver.klay.accounts.wallet)
function NFTminting (){
  // 발급 state
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [homeAddress, setHomeAddress] = useState('')
  const [certificateNum, setCertificateNum] = useState('')
  const [donateType, setDonateType] = useState('전혈')
  const [date, setDate] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  // 발급 기록 조회 state
  var [record, setRecord] = useState([])

  var [Mintname, setMintName] = useState('')
  var [Mintid, setMintId] = useState('')
  var [MintbloodType, setMintBloodType] = useState('')
  var [MinthomeAddress, setMintHomeAddress] = useState('')
  var [MintcertificateNum, setMintCertificateNum] = useState('')
  var [MintdonateType, setMintDonateType] = useState('전혈')
  var [Mintdate, setMintDate] = useState('')

  const [length, setLength] = useState(0);
  
  const walletFromSession = sessionStorage.getItem('walletInstance')
  const wallet = JSON.parse(walletFromSession)

  // 발급기록
  const getLength = async() => {
      const MintCount = await BloodContract.methods.getMintRecordCount(wallet.address).call({from: wallet.address});
      setLength(MintCount);
  }
  const getMintdata = async (i) => {
    var length_max = length - 1;
    const cert_data = await BloodContract.methods.getMintData(i).call({from: wallet.address});
    //console.log("Cert is ", cert_data)
    setMintName(Mintname = cert_data.get_name);
    setMintId(Mintid = cert_data.get_id);
    setMintBloodType(MintbloodType = cert_data.get_bloodType);
    setMintHomeAddress(MinthomeAddress = cert_data.get_home_address);
    setMintCertificateNum(MintcertificateNum = cert_data.get_certificateNum);
    setMintDonateType(MintdonateType = cert_data.get_donateType);
    setMintDate(Mintdate = cert_data.get_date);
    //console.log("cycle done");

  }

  const GetMintCertRecord = async() => {
    await getLength();
    const bloodRecord = [length];
    for (let i = 0; i < length; i++) {    
        await getMintdata(i)
        bloodRecord.push({
            id: Mintid,
            name: Mintname,
            donateType: MintdonateType,
            date: Mintdate,    
        });
    }
    setRecord(bloodRecord)
    console.log(bloodRecord)

    const depart = await BloodContract.methods.getDepartment(wallet.address).call() //private이라 안됨
    console.log("depart is : ", depart);
}

  useEffect(() => {
    GetMintCertRecord()
  },[record.length])

  const handleName = (e) => {
      setName(e.target.value)
  }

  const handleId = (e) => {
    setId(e.target.value)
  }

  const handleBloodType = (e) => {
    setBloodType(e.target.value)
  }

  const handleHomeAddress = (e) => {
    setHomeAddress(e.target.value)
  }

  const handleCertificateNum = (e) => {
    setCertificateNum(e.target.value)
  }

  const handleDonateType = (e) => {
    setDonateType(e.target.value)
  }

  const handleWalletAddress = (e) => {
    setWalletAddress(e.target.value)
  }

  const handleSubmit = (e) => {
      mintCertificate(name, id, bloodType, homeAddress, certificateNum,donateType,date,walletAddress)
      console.log('성공')
      //await window.location.reload();
  }

  const options = {
    defaultSortName: 'date',
    defaultSortOrder: 'desc',
}

      return (
        <body>
          <InstituteHeader/>
          <div className="space"></div>
          <div className="Board_css">
            <BootstrapTable data={record} pagination options={options}>
                <TableHeaderColumn width='350' dataField='id' dataAlign='center'>주민등록번호</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='name' dataAlign='center'>이름</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='donateType' dataAlign='center'>헌혈 분류</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='date' dataAlign='center' isKey={true}>발행일</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <div className="mint">
            <h2>헌혈증명서 발행</h2>
            <br/>
            <p>이름</p>
            <input
              className="NFTminting_css"
              name="name"
              label="헌혈자 이름"
              value={name}
              onChange={handleName}
              required
            />
            <p>주민등록번호</p>
            <input
              className="NFTminting_css"
              name="id"
              label="주민등록번호"
              value={id}
              onChange={handleId}
              required
            />
            <br/>
            <div className="typeCheck">
              <p>혈액형</p>
              <label>
              <input 
              name="bloodType"
              value="A"
              type="radio"
              checked={bloodType === "A"}
              onChange={handleBloodType}/>
              <br/>
              A
              </label>

              <label>
              <input 
              name="bloodType"
              value="B"
              type="radio"
              checked={bloodType === "B"}
              onChange={handleBloodType}/>
              <br/>
              B
              </label>

              <label>
              <input 
              name="bloodType"
              value="AB"
              type="radio"
              checked={bloodType === "AB"}
              onChange={handleBloodType}/>
              <br/>
              AB
              </label>

              <label>
              <input 
              name="bloodType"
              value="O"
              type="radio"
              checked={bloodType === "O"}
              onChange={handleBloodType}/>
              <br/>
              O
              </label>
            </div>
            <p>주소</p>
            <input
              className="NFTminting_css"
              name="home_address"
              label="주소"
              value={homeAddress}
              onChange={handleHomeAddress}
              required
            />
            <p>증명서 번호</p>
            <input
              className="NFTminting_css"
              name="certificateNum"
              label="증명서 번호"
              value={certificateNum}
              onChange={handleCertificateNum}
              required
            />
            <br/>
            <div className="typeCheck">
              <p>헌혈 종류</p>
              <label>
              <input 
              name="donateType"
              value="전혈"
              type="radio"
              checked={donateType === "전혈"}
              onChange={handleDonateType}/>
              <br/>
              전혈
              </label>

              <label>
              <input 
              name="donateType"
              value="혈장"
              type="radio"
              checked={donateType === "혈장"}
              onChange={handleDonateType}/>
              <br/>
              혈장
              </label>

              <label>
              <input 
              name="donateType"
              value="혈소판"
              type="radio"
              checked={donateType === "혈소판"}
              onChange={handleDonateType}/>
              <br/>
              혈소판
              </label>

              <label>
              <input 
              name="donateType"
              value="혈장+혈소판"
              type="radio"
              checked={donateType === "혈장+혈소판"}
              onChange={handleDonateType}/>
              <br/>
              혈장 + 혈소판
              </label>
            </div>

            <br/>
            <p>지갑 주소</p>
            <input
              className="NFTminting_css"
              name="wallet_address"
              label="지갑 주소"
              value={walletAddress}
              onChange={handleWalletAddress}
              required
            />
            <br/>
            <button className="main-btn" onClick={handleSubmit}>발행</button>
          </div>
        </body>
      )
}

export const wallet_session = () => {
  const data = JSON.parse(sessionStorage.getItem("walletInstance"));
  console.log(data.address);
  return data // 세션 스토리지 address값반환
}


export const mintCertificate = async (
  name,
  id,
  bloodType,
  home_address,
  certificateNum,
  donateType,
  date,
  //추가 mintCert시 필요
  wallet_address,
) => {
  await caver.klay.accounts.wallet.clear()
  
  const jsonWallet = wallet_session();
  const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
  caver.klay.accounts.wallet.add(wallet)
  
  /*
  const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
  const wallet = walletInstance;
  */
  try{
    const before_cert_length = await BloodContract.methods.getCertificateCount(wallet_address).call()
    console.log("before cert length: ", before_cert_length);
    await BloodContract.methods.createCertificate(
      name,
      id,
      bloodType,
      home_address,
      certificateNum,
      donateType).send({
        from: wallet.address,// 보내는 사람 주소
        gas: '200000000',
      })
    console.log("dummy");
    console.log("Certficate Created. Now Minting Through Smart Contract");
    
    await BloodContract.methods.mintCert(wallet_address, certificateNum).send({
      from: wallet.address,// 보내는 사람 주소
      gas: '200000000',
    })
    console.log("mint");
    alert("헌혈 증명서 발급 성공");
  } catch(err){
    console.error(err);
    alert("Minting Failed");
  }
    
    const after_cert_length = await BloodContract.methods.getCertificateCount(wallet_address).call()
    console.log("after cert length: ", after_cert_length);

    await caver.klay.accounts.wallet.clear()

    
    // const keyringInstance = caver.wallet[0]

  //   const setResult = await BloodContract.send({
  //     from: deployerKeyring.address,
  //     feeDelegation: true,
  //     feePayer: feePayerKeyring.address,
  //     feeRatio: 50, // Without feeRatio, `send` will use FeeDelegatedSmartContractExecution
  //     gas: 1000000,
  //  }, 'set', keyString, 'anotherValue')

    console.log("cycle done");
}


export default NFTminting