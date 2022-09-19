import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';


function donaterecord() {
    return(
        <body>
            <Header/>
            
            기부 내역을 나타내는 페이지입니다.
        </body>
        
    );
}

export default donaterecord;