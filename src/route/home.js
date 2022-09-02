import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import {Link} from 'react-router-dom';

function home() {
    return(
    <FullPage controls>
        <Slide>
            <div className="App">
                <div className="mainIMG"></div>
                <div className="login">
                    <div className="id">개인키 QR코드?</div>
                </div>
            </div>
        </Slide>
        <Slide>
            <div>2page</div>
        </Slide>
        <Slide>
            <div>3page</div>
        </Slide>
        <Slide>
            <div>4page</div>
            <div className="ask">문의</div>
            <footer>
            <div class="foot_div">
                footer
            </div>
            </footer>
        </Slide>
      </FullPage>
    )
}

export default home;