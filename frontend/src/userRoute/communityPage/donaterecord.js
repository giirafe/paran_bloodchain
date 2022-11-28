import React, { Component, useState, useEffect } from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import caver from '../../klaytn/caver';
import BloodContract from '../../components/BloodContract';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SideMenu from './side';

function Donaterecord() {
    const [length, setLength] = useState(0);
    var [record, setRecord] = useState([])

    var [to, setTo] = useState("");
    var [donateTime, setDonateTime] = useState("");
    var [tokenCount, setTokenCount] = useState(0);

    const walletFromSession = sessionStorage.getItem('walletInstance')
    const wallet = JSON.parse(walletFromSession)

    const getLength = async() => {
        const MintCount = await BloodContract.methods.getDonationCount(wallet.address).call({from: wallet.address});
        //console.log("donationCount is : ", donationCount);
        setLength(MintCount);
    }

    getLength();
    //console.log("length is : ",length);
    
    const getDonationRecord = async(i) => {
        const donation = await BloodContract.methods.getDonationRecord(i).call({from: wallet.address});
        var date = new Date(parseInt(donation[1]));

        setTo(to = donation[0]);
        setDonateTime(donateTime = date.getTime());
        //var returnDate = year + "." + month + "." + day + ". " + hour + ":" + minute + ":" + second;
        setTokenCount(tokenCount = donation[2]);

    }
    const GetDonationRecord = async() => {
        await getLength();
        const donationRecord = [length];
        for (let i = 0; i < length; i++) {    
            await getDonationRecord(i)
            donationRecord.push({
                to: to,
                donateTime: donateTime,
                tokenCount: tokenCount
            });
        }
        setRecord(donationRecord)
        
        console.log(donationRecord)
    }

    useEffect(() => {
        GetDonationRecord()
    },[record.length])

    const options = {
        defaultSortName: 'donateTime',
        defaultSortOrder: 'desc',
    }

    return(
        <body>
            <Header/>
            <SideMenu/>
            <div className="tableSpace">
                    <BootstrapTable data={record} pagination options={options}>
                    <TableHeaderColumn width='150' dataField='to' isKey={true} dataAlign='center'>수신자</TableHeaderColumn>
                    <TableHeaderColumn width='200' dataField='donateTime' dataAlign='center'>기부 날짜</TableHeaderColumn>
                    <TableHeaderColumn width='100' dataField='tokenCount' dataAlign='center'>갯수</TableHeaderColumn>
                    </BootstrapTable>
            </div>
        </body>
        
    );
}
/*

export const donateBalance = async() => {
    
    const jsonWallet = wallet_session();
    const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
    caver.klay.accounts.wallet.add(wallet)
    

    const donationCount = await BloodContract.methods.getDonationCount(wallet.address).call();
    console.log("donationCount is : ", donationCount);
    
    //const count1 = await parseInt(count);
    await BloodContract.methods.transferFrom(wallet.address, walletTo, count1).send({
      from: wallet.address,
      gas: '200000000',
    });
  
    const after_balance = await BloodContract.methods.balances(wallet.address).call()
    console.log("after_balance: ", after_balance);
    
    await caver.klay.accounts.wallet.clear()
  
    console.log("cycle done");
  
    
  }
  */
  export const wallet_session = () => {
    const data = JSON.parse(sessionStorage.getItem("walletInstance"));
    console.log(data.address);
    return data // 세션 스토리지 address값반환
  }

export default Donaterecord;