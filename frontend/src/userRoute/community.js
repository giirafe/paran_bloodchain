import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';
import './community.css';

function community() {
    return(
        <body>
            <Header/>
        커뮤니티를 제공하는 페이지입니다.
        </body>
        

    );
}

export default community;