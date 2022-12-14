import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from './layout/header';
import {Link} from 'react-router-dom';
import './myinfo_comp.css';
import MaterialTable from '../userRoute/MaterialTable';
// 잠시
import BloodContract from './BloodContract';
// import { wallet_session } from '../../krcRoute/krcHome';
import caver from '../klaytn/caver';

/*
const walletFromSession = sessionStorage.getItem('walletInstance')
if (walletFromSession) {
    try {
      caver.klay.accounts.wallet.add(JSON.parse(walletFromSession))
    } catch (e) { // error 발생시
      // If value in sessionStorage is invalid wallet instance,
      // remove it from sessionStorage.
      sessionStorage.removeItem('walletInstance')
    }
}*/
    
const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]

function myinfo_comp() {
    return(
        <body>
            <Header/>
            <div>
              <h1 className="Name1">기부 가능 횟수</h1>
              <h1 className="Name2">기부 받은 횟수</h1>
              <h1 className="Name3">기부한 횟수</h1>
            </div>

            <h2 className="num1">3</h2>
            <h2 className="num2">0</h2>
            <h2 className="num3">2</h2>
            
            <MaterialTable />
            <button name="tedest" onClick={handleTouch}>test</button>
        </body>
        

    );
}

export const handleTouch = async () => {
    /*
    const walletFromSession = sessionStorage.getItem('walletInstance')
    if (walletFromSession) {
        try {
          caver.klay.accounts.wallet.add(JSON.parse(walletFromSession))
        } catch (e) { // error 발생시
          // If value in sessionStorage is invalid wallet instance,
          // remove it from sessionStorage.
          sessionStorage.removeItem('walletInstance')
        }
    }
    
    const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
    */
    // const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey)
    // console.log("Address of WalletInstance : ",walletInstance.address);

    if (!walletInstance){
        console.error("Wallet Instance Fetch Failed");
    } else {
        console.log("Valid Caver Instance")
    }

    // 개인 조회 키 암호 설정 test
    /*
    BloodContract.methods.set_InquiryPW('0xd735e6b264277503066f8afb1785d6661049b831',2021).send({
        from:walletInstance.address,
        gas:'2000000'
    })
    */
    // Account 없이 balance를 Smart Contract 값 조회
    //const balances = await BloodContract.methods.balances('0xA1C889E67f0B762675aD74120c813E4c790F19aC').call()
    //console.log("Token Balance is :  ", balances);
    
    const _name = "1234"
    const _id = "1234"
    const _bloodType = "1234"
    const _home_address = "1234"
    const _certificateNum = "1234"
    const _donateType = "1234"
    const _date = "1234"

    const ret1 = await BloodContract.methods.createCertificate(
        _name,
        _id,
        _bloodType,
        _home_address,
        _certificateNum,
        _donateType,
        _date
    ).send({
          from: walletInstance.address,// 보내는 사람 주소
          gas: '200000000',
    })
    console.log("ret1 is ", ret1);

    // myContract.send({
    //     from: '0x{address in hex}',
    //     gas: 1000000,
    //     feeDelegation: true,
    //     feePayer: '0x{address in hex}',
    //   }, 'methodName', 123).then(console.log)

    ////////////

    // fee delegation testing
    console.log("Fee Delegation testing");
    
    const deployer_pk = '0x2afd0177c21926bf5cb5edcdf85b29ac3a5c0bcab6d65a7902b627ca6104c0af'
    const deployerInstance = caver.klay.accounts.privateKeyToAccount(deployer_pk);
    caver.klay.accounts.wallet.add(deployer_pk);

    const feePayer_pk = '0x5e50bba1df0bd94b4b42d6ea6e541023e4d12e0e7d614121c5d55f15ddda6227'
    const feePayerInstance = caver.klay.accounts.privateKeyToAccount(feePayer_pk);
    caver.klay.accounts.wallet.add(feePayerInstance);

    ///////

    // const deployerAddress = '0x54ea798eed97f16c35d2265e94cc2d275ca67055'
    // const deployerPrivateKey = '0x2afd0177c21926bf5cb5edcdf85b29ac3a5c0bcab6d65a7902b627ca6104c0af'
    // const feePayerAddress = '0x953ee5aae2afc7d21121c52b17e3e6c1b9f8cb1d'
    // const feePayerPrivateKey = '0x5e50bba1df0bd94b4b42d6ea6e541023e4d12e0e7d614121c5d55f15ddda6227'

    // const deployerInstance = caver.wallet.keyring.create(deployerAddress, deployerPrivateKey)
    // caver.wallet.add(deployerInstance)
    // const feePayerInstance = caver.wallet.keyring.create(feePayerAddress, feePayerPrivateKey)
    // caver.wallet.add(feePayerInstance)

    // // The deployer and fee payer each sign the transaction to execute a smart contract.
    // const executionTx = await BloodContract.sign({
    //     from: deployerInstance.address,
    //     feeDelegation: true,
    //     gas: 1000000,
    // }, 'createCertificate', 
    //     _name,
    //     _id,
    //     _bloodType,
    //     _home_address,
    //     _certificateNum,
    //     _donateType,
    //     _date)
    // console.log(`Deployer signed transaction: `)
    // console.log(executionTx)

    // await caver.wallet.signAsFeePayer(feePayerInstance.address, executionTx) // Signs the transaction as a fee payer
    // const setResult = await caver.rpc.klay.sendRawTransaction(executionTx)

    ////////
    // caver.klay.wallet 으로 try.,,,

    // const feeDelegatedTest = await BloodContract.send({
    //     from: walletInstance.address,
    //     gas: '20000000',
    //     feeDelegation : true,
    //     feePayer:feePayerInstance.address
    // },'createCertificate',
    //     _name,
    //     _id,
    //     _bloodType,
    //     _home_address,
    //     _certificateNum,
    //     _donateType,
    //     _date)
    // .then(console.log);

    console.log("fee deleagtion with singAsFeePayer testing");
    
    await BloodContract.signAsFeePayer({
        from: walletInstance.address,
        gas: 1000000,
        feeDelegation: true,
        feePayer:feePayerInstance.address ,
    }, 'createCertificate',
        _name,
        _id,
        _bloodType,
        _home_address,
        _certificateNum,
        _donateType,
        _date)
    .then(console.log)
  
    const ret2 = await BloodContract.methods.mintCert("0xd735e6b264277503066f8afb1785d6661049b831", _certificateNum).send({
      from: walletInstance.address,// 보내는 사람 주소
      gas: '200000000',
    })

    console.log("return is ", ret2);
    
    const CertLength = await BloodContract.methods.user_CertLength('0xd735e6b264277503066f8afb1785d6661049b831').call()
    console.log("CertLength is ", CertLength);
    console.log("cycle done");
}
export default myinfo_comp;