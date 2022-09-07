import React from 'react';
import {Link} from 'react-router-dom';


function header() {
    return (
        <div className="header">
            <Link to ="/">
                <div className="logo">LOGO</div> 
                <button className="main">P:LOW</button>
            </Link>
                <div className="navBar">
                    <a class="nav" href="/">Home</a>
                    <a class="nav" href="more">More</a>
                    <a class="nav" href="about">About Us</a>
                </div>
        </div>
    )
}

export default header;