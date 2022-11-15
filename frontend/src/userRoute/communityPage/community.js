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
import SideMenu from './side';

function Community() {
    
    return(
        <body>
            <Header />
            <SideMenu/>
            <div className = "tableLocation">
                <BoardList />
            </div>
        </body>
        
    );
}

export default Community;