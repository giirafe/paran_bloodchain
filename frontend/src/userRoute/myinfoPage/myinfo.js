import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import './myinfo.css';
import MaterialTable from '../MaterialTable';
// 잠시
import BloodContract from '../../components/BloodContract';
import { wallet_session } from '../../krcRoute/krcHome';

function myinfo() {
    return(
        <body>
            <Header/>
            <h1 className="Name1">기부 가능 횟수</h1>
            <h1 className="Name2">기부 받은 횟수</h1>
            <h1 className="Name3">기부한 횟수</h1>

            <h2 className="num1">3</h2>
            <h2 className="num2">0</h2>
            <h2 className="num3">2</h2>
            
            <MaterialTable />
            <button name="test" onClick={handleTouch}>test</button>
        </body>
        

    );
}

export const handleTouch = () => {
    const send_address = wallet_session();
    console.log("hi");
    const contract = BloodContract.options
    console.log(contract);
    // const balances = BloodContract.call('balances', '0xA1C889E67f0B762675aD74120c813E4c790F19aC'); //됐다
    const balances = BloodContract.methods.balances('0xA1C889E67f0B762675aD74120c813E4c790F19aC').call();
    console.log("Balance is :  ", balances);

    BloodContract.methods.createCertificate('1234','1234','1234','1234','1234','1234','1234').send({
        from:send_address,
        gas:'2000000000'
    })
    
    // BloodContract.send({from: send_address, gas: '200000000'}, "createCertificate",
    //     '1234',
    //     '1234',
    //     '1234',
    //     '1234',
    //     '1234',
    //     '1234',
    //     '1234',
    // )

    console.log("cycle done");
}
export default myinfo;