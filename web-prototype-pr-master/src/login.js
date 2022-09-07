import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './login.module.css';


function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        console.log('click login')
        console.log('ID', inputId)
        console.log('PW', inputPw)
    }

    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    [])

    return(
        <div className="loginBox">
            <h2>Login</h2>
            <label htmlFor='input_id'>ID : </label>
            <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            <br />
            <label htmlFor='input_pw'>PW : </label>
            <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            <br />
            <button type="button" onClick={onClickLogin}>Login</button>
        </div>
    )
}

export default Login;