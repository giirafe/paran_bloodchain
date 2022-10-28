import React, { Component } from 'react';
import './donate.css';
import Button from '../../components/Button'

class Donate extends Component {
  state = {
    walletaddress: '',
    count : '',
  }

  handleInputChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      const { walletaddress, count } = this.state
      this.props.WriteDonate(walletaddress, count)
  }

  render() {
      const { walletaddress, count } = this.state
      return (
        
        <form className="Donate" onSubmit={this.handleSubmit}>
          <label>지갑 주소</label>
          <br/>
          <input
            className="Donate_walletaddress"
            name="walletaddress"
            value={walletaddress}
            onChange={this.handleInputChange}
            placeholder="상대방의 지갑 주소를 입력하세요."
            required
          />
          <br/>
          <label>기부 개수</label>
          <br/>
          <input
            className="Donate_count"
            name="count"
            value={count}
            onChange={this.handleInputChange}
            placeholder="비밀번호를 입력하세요."
            required
          />
          <br/>
          <Button
            className="UploadPhoto__upload"
            type="submit"
            title="기부"
          />
        </form>
                    

      )
      
    }
}

export default Donate