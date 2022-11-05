import React, {useState, Component} from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import MaterialTable from '../MaterialTable';
import caver from '../../klaytn/caver';
import BloodContract from '../../components/BloodContract';
function Myinfo() {
    var [record, setRecord] = useState([])
    //배열 state를 이용해볼 것.
    var [name, setName] = useState("");
    var [id, setId] = useState("");
    var [donateType, setDonateType] = useState("");
    var [date, setDate] = useState("");
    const [length, setLength] = useState(0);
    var [cnt, setCNT] = useState(0);

    //console.log("klaytn wallet is :", caver.klay.accounts.wallet)
    const walletFromSession = sessionStorage.getItem('walletInstance')
    const wallet = JSON.parse(walletFromSession)

    const getLength = async() => {
        const acc_balance = await BloodContract.methods.balances(wallet.address).call();
        //console.log("Account Balance is : " , acc_balance);
        var cert_length = await BloodContract.methods.user_CertLength(wallet.address).call()
        cert_length = parseInt(cert_length);
        //console.log("length: ",cert_length);
        setLength(cert_length);
    }
    /*
    const getCertdata = async (i) => {
        //await getLength();
        var length_max = length - 1;
        // const cert = BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
        // console.log("cert is :",cert);
        // const cert_data = await cert;
        // const cert_data = await BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
        // const sample_address ="0xa89421237143433ab88d15c7d614ddff24c2c191"; // 타인의 주소 테스트
        const cert_data = await BloodContract.methods.getCertData(wallet.address,i,0).call();
        //console.log("Cert is ", cert_data)
        setName(name = cert_data.get_name);
        setId(id = cert_data.get_id);
        setDonateType(donateType = cert_data.get_donateType);
        setDate(date = cert_data.get_date);
        //console.log("cycle done");
    }*/
    
    const getCertdata = async (i) => {
        //await getLength();
        var length_max = length - 1;
        // const cert = BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
        // console.log("cert is :",cert);
        // const cert_data = await cert;
        // const cert_data = await BloodContract.methods.InquiryTo(wallet.address,1234,length_max).call()
        // const sample_address ="0xa89421237143433ab88d15c7d614ddff24c2c191"; // 타인의 주소 테스트
        const cert_data = await BloodContract.methods.getCertData(wallet.address,i,0).call();
        //console.log("Cert is ", cert_data)
        setName(name = cert_data.get_name);
        setId(id = cert_data.get_id);
        setDonateType(donateType = cert_data.get_donateType);
        setDate(date = cert_data.get_date);
        //console.log("cycle done");

    }

    const GetCertRecord = async() => {
        await getLength();
        const bloodRecord = [length];
        for (let i = 0; i < length; i++) {    
            await getCertdata(i)
            bloodRecord.push({
                id: id,
                name: name,
                donateType: donateType,
                date: date,    
            });
        }
        setRecord(bloodRecord)
        console.log(bloodRecord)
    }
    
    useEffect(() => {
        GetCertRecord()
    },[record.length])
    
    
   //console.log(record[length-1].id)

    //console.log("bloodRecord real is ", record);
    //const bloodRecords = getCertRecord();
    //console.log("bloodRecords is ", bloodRecords.length);
    /*
    getLength();
    const bloodRecord = [length];
    for (let i = 0; i < length; i++) {    
        getCertdata(i);
        bloodRecord.push({
        id: id,
        name: name,
        donateType: donateType,
        date: date,    
        });
    }
    */
    //console.log("bloodRecord length:",bloodRecord);
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

            
            <BootstrapTable data={record} striped hover condensed pagination>
            <TableHeaderColumn width='350' dataField='id' isKey={true} dataAlign='center'>주민번호</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='name' dataAlign='center'>헌혈자</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='donateType' dataAlign='center'>헌혈 분류</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='date' dataAlign='center'>헌혈 일자</TableHeaderColumn>
            </BootstrapTable>
            
            

            <Link to ="/createkey">
            <button className="main-btn" onClick="hi">조회 키 비밀번호 생성하기</button>
            </Link>
        </body>
    );
}
export default Myinfo;