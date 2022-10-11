import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import './community.css';
import MaterialTable from '../MaterialTable';
import axios from 'axios'
import Table from "react-bootstrap/Table";
import BoardList from '../../components/BoardList';
import '../../components/BoardStyle.scss';

function Community() {
    
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