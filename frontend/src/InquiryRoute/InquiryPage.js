import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

class Inquiry extends Component {
    state = {
      walletaddress: '',
      password: '',
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { walletaddress, password } = this.state
        this.props.WriteDonate(walletaddress, password)
    }

    render() {
        const { walletaddress, password } = this.state
        return (
          <form className="Inquiry" onSubmit={this.handleSubmit}>
            <Input
              className="Inquiry_walletaddress"
              name="walletaddress"
              label="지갑 주소"
              value={walletaddress}
              onChange={this.handleInputChange}
              placeholder="조회 대상의 지갑 주소를 입력하세요."
              required
            />
            
            <Input
              className="Inquiry_password"
              name="password"
              label="비밀번호"
              value={password}
              onChange={this.handleInputChange}
              placeholder="비밀번호를 입력하세요."
              required
            />

            <Button
              className="UploadPhoto__upload"
              type="submit"
              title="조회"
            />
          </form>
        )
        
      }
}

export default Inquiry