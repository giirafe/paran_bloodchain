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
    const balacnes = BloodContract.call('balances', '0x028642a33362e44cd89bda306794dbee56d179bc'); //됐다
    console.log(balacnes);
    BloodContract.send({from: '0xd735e6b264277503066f8afb1785d6661049b831', gas: '200000000'}, "createCertificate",
        '1234',
        '1234',
        '1234',
        '1234',
        '1234',
        '1234',
        '1234',
    )
    console.log("good");
}
export default myinfo;