import React, { Component } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'


class Privatekey extends Component {
    state = {
      privatekey: '',
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { privatekey } = this.state
    }
    //test
    handleClick = (e) => {
      console.log("Hi");
    }
    render() {
        const { privatekey } = this.state
        return (
            
          <form className="privatekey" onSubmit={this.handleSubmit}>

            <Input
              className="Privatekey"
              name="privatekey"
              label="조회 키"
              value={privatekey}
              onChange={this.handleInputChange}
              placeholder="생성할 조회 키 비밀번호를 입력하시오."
              required
            />

            <Button
              className="Certificate__upload"
              type="submit"
              title="비밀번호 생성"
            />
          </form>


        )  
      }
}
export default Privatekey