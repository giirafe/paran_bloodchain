import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {

  // react hook에서 state 사용
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  // handler 함수들
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onClickSignIn = () => {
    console.log(Email)
    console.log(Password)
    console.log(Name)
    console.log(ConfirmPassword)
  }



  return (
    <div className="signBox">
      <label>Email</label>
      <input type="email" value={Email} onChange={onEmailHandler} />
      <br/>
      <label>name</label>
      <input type="text" value={Name} onChange={onNameHandler} />
      <br/>
      <label>Password</label>
      <input type="password" value={Password} onChange={onPasswordHandler} />
      <br/>
      <label>Confirm Password</label>
      <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
      <br />
      <button type="submit" onClick={onClickSignIn}>회원 가입</button>
    </div>
  );
}

export default SignIn;