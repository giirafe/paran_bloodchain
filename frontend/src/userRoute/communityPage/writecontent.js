import React, { Component } from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import './write.css';
import Submit from './submit';


class write extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>        
            <div className ='Write'>
                <div>
                    <input type='text' id='title_txt' naem='title' placeholder = '제목'/>
                </div>

                <div>
                
                    <textarea id = 'content_txt' name = 'content' placeholder='내용을 입력하세요.'></textarea>
                </div>
                <Submit />

            </div>

        </div>
    );
  }
}

export default write;

