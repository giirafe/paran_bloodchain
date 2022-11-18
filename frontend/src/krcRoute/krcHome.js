import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BloodContract from '../components/BloodContract'
import caver from '../klaytn/caver';
import './krcHome.scss'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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
class NFTminting extends Component {
    state = {
      name: '',
      id: '',
      bloodType: '',
      home_address: '',
      certificateNum: '',
      donateType: '',
      date: '',
      wallet_address:'',
    }
    
    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address } = this.state
        await mintCertificate(name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address)
        await window.location.reload();
    }
    //test
    handleClick = (e) => {
      console.log("Hi");
    }

    
    render() {
        const { name, id, bloodType, home_address, certificateNum,donateType,date,wallet_address } = this.state
        return (
          <div>
            <div className="Board_css">
              <BootstrapTable>
                  <TableHeaderColumn width='350' dataField='mint_transaction' dataAlign='center'>발행 기록</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='time_stamp' dataAlign='center'>발행일</TableHeaderColumn>
                  <TableHeaderColumn width='200' dataField='mint_address' dataAlign='center' isKey={true}>발행 주소</TableHeaderColumn>
              </BootstrapTable>
            </div>

            <form className="NFTminting" onSubmit={this.handleSubmit}>
            <label>헌혈증명서 발행</label>
            <br/>
            <input
              className="NFTminting_css"
              name="name"
              label="헌혈자 이름"
              value={name}
              onChange={this.handleInputChange}
              placeholder="헌혈자 이름을 입력하시오."
              required
            />
            
            <input
              className="NFTminting_css"
              name="id"
              label="주민등록번호"
              value={id}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 주민등록번호를 입력하시오."
              required
            />
            
            <input
              className="NFTminting_css"
              name="bloodType"
              label="혈액형"
              value={bloodType}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 혈액형을 입력하시오."
              required
            />

            <input
              className="NFTminting_css"
              name="home_address"
              label="주소"
              value={home_address}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 주소를 입력하시오."
              required
            />

            <input
              className="NFTminting_css"
              name="certificateNum"
              label="증명서 번호"
              value={certificateNum}
              onChange={this.handleInputChange}
              placeholder="증명서 번호를 입력하시오."
              required
            />

            <input
              className="NFTminting_css"
              name="donateType"
              label="헌혈 종류"
              value={donateType}
              onChange={this.handleInputChange}
              placeholder="헌혈 종류를 입력하시오."
              required
            />

            <input
              className="NFTminting_css"
              name="date"
              label="날짜"
              value={date}
              onChange={this.handleInputChange}
              placeholder="오늘 날짜를 입력하시오."
              required
            />
            <br/>
            <input
              className="NFTminting_css"
              name="wallet_address"
              label="지갑 주소"
              value={wallet_address}
              onChange={this.handleInputChange}
              placeholder="지갑 주소를 입력하시오."
              required
            />
            <br/>
            <Button
              className="Certificate__upload"
              type="submit"
              title="헌혈증명서 업로드"
            />
          </form>
          </div>
          
        )
      }
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
  
  const jsonWallet = wallet_session();
  const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
  caver.klay.accounts.wallet.add(wallet)
  
  /*
  const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
  const wallet = walletInstance;
  */
  
    const before_cert_length = await BloodContract.methods.getCertificateCount(wallet_address).call()
    console.log("before cert length: ", before_cert_length);

    try {
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
  
      console.log("Certificate Minted");
    } catch(e){
      console.error("Error From Creating Certificate : ",e);
      alert("Mint Failed");
    }

    
    const after_cert_length = await BloodContract.methods.getCertificateCount(wallet_address).call()
    console.log("After Cert length: ", after_cert_length);

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

/// Getting MintData 11.18 Start

// getCertData 참고하여 getMintData

// const getCertdata = async (i) => {
//   //await getLength();
//   var length_max = length - 1;
//   // const cert = BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
//   // console.log("cert is :",cert);
//   // const cert_data = await cert;
//   // const cert_data = await BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
//   // const sample_address ="0xa89421237143433ab88d15c7d614ddff24c2c191"; // 타인의 주소 테스트
//   const cert_data = await BloodContract.methods.getCertData(wallet.address,i,0).call();
//   //console.log("Cert is ", cert_data)
//   setName(name = cert_data.get_name);
//   setId(id = cert_data.get_id);
//   setDonateType(donateType = cert_data.get_donateType);
//   setDate(date = cert_data.get_date);
//   //console.log("cycle done");
// }

// const GetCertRecord = async() => {
//   await getLength();
//   const bloodRecord = [length];
//   for (let i = 0; i < length; i++) {
//       await getCertdata(i)
//       bloodRecord.push({
//           id: id,
//           name: name,
//           donateType: donateType,
//           date: date,    
//       });
//   }
//   setRecord(bloodRecord)
//   console.log(bloodRecord)
// }

///// WIP 11/18

// const getLength = async() => {
//   const acc_balance = await BloodContract.methods.balances(wallet.address).call();
//   //console.log("Account Balance is : " , acc_balance);
//   var MintDataLength = await BloodContract.methods.user_CertLength(wallet.address).call()
//   MintDataLength = parseInt(MintDataLength);
//   //console.log("length: ",cert_length);
//   return MintDataLength;
// }


// const TotalMintData = async(i) => {

//   var [record, setRecord] = useState([])
//   //배열 state를 이용해볼 것.
//   var [name, setName] = useState("");
//   var [id, setId] = useState("");
//   var [donateType, setDonateType] = useState("");
//   var [date, setDate] = useState("");
//   const [length, setLength] = useState(0);
//   var [cnt, setCNT] = useState(0);

//   const jsonWallet = wallet_session();
//   const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
//   caver.klay.accounts.wallet.add(wallet);
  
//   const MintDataLength = getLength();
//   const MintRecord = [MintDataLength];
//   for ( let i =0 ;i < MintDataLength;i++){
//     await getMintData(i);
//     MintRecord.push({

//     })
//     setRecord(MintRecord);
//     console.log(MintRecord);
//   }
  
//   await caver.klay.accounts.wallet.clear()
// }

export default NFTminting