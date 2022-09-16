import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './login.module.css';
import Modal from './components/modal';
import SignIn from './signIn';


function Login() {
    const [signup, setSignup] = useState(false);

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    //인풋값 받기
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    //로그인 버튼 클릭 이벤트 다루기
    //임시로 콘솔에 찍기
    const onClickLogin = () => {
        console.log('click login')
        console.log('ID', inputId)
        console.log('PW', inputPw)
    }

    const onClickSignIn = () => {
        console.log('회원 가입')
    }

    //아직 안씀
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
            <button type="button" onClick={() => setSignup(!signup)}>회원 가입</button>
            {signup && (
            <Modal closeModal={() => setSignup(!signup)}>
                <SignIn/>
            </Modal>
            )}
        </div>
    )
}

export default Login;