import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import './community.css';
import MaterialTable from '../MaterialTable';


function community() {
    return(
        <body>
            <Header />
        <div className = "tableLocation">
            <MaterialTable />
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

export default community;