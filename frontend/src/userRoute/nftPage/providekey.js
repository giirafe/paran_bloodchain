import React, { Component } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'


class Providekey extends Component {
    state = {
      password: '',
      wallet_address: '',
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { password, wallet_address } = this.state
    }
    //test
    handleClick = (e) => {
      console.log("Hi");
    }
    render() {
        const { password, wallet_address } = this.state
        return (
            
          <form className="provideKey" onSubmit={this.handleSubmit}>

            <Input
              className="ProvideKey_wallet_address"
              name="wallet_address"
              label="지갑 주소"
              value={wallet_address}
              onChange={this.handleInputChange}
              placeholder="조회 기관의 지갑 주소를 입력하시오."
              required
            />

            <Input
              className="ProvideKey_password"
              name="password"
              label="비밀번호"
              value={password}
              onChange={this.handleInputChange}
              placeholder="생성한 조회 키를 입력하세요."
              required
            />
            
            <Button
              className="Certificate__upload"
              type="submit"
              title="헌혈증명서 조회 키 제공"
            />
            <button name="버튼" onClick={this.handleClick}>버튼</button>
          </form>
        )
      }
}
export default Providekey