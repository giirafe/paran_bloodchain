import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import './community.css';
import MaterialTable from '../MaterialTable';
import axios from 'axios'
import Table from "react-bootstrap/Table";
import BoardList from '../../components/BoardList';

function Community() {
    const [inputData, setInputData] = useState([{
        address: '',
        title: '',
        content: '',
        createAt: ''
    }])

    /*
    useEffect(async() => {
        try {
            const res = await axios.get('/writecontent')
            const _inputData = await res.data.map((rowData) => ({
                address: rowData.address,
                title: rowData.title,
                content: rowData.content,
                createAt: rowData.createAt
            }))
            setInputData(inputData.concat(_inputData))
        } catch(e) {
            console.error(e.message)
        }
    }, [])
    */

    const getData = () => {
        axios.get('http://localhost:3001/writecontent')
        .then((res) => {
            console.log(res)
        })
        .catch(() => {
            console.log('fail')
        })
    }

    return(
        <body>
            <Header />
            <div className = "tableLocation">
                <BoardList />
            </div>
            <div className ="communityBox">
                <Link to ="/donaterecord">
                    <button className="main-btn" onClick="hi">기부 내역</button>
                </Link>
                <Link to ="/writecontent">
                    <button className="main-btn" onClick="hi">글 작성하기</button>
                </Link>
            </div>
        </body>
        
    );
}

export default Community;