import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

class NFTminting extends Component {
    state = {
      name: '',
      id: '',
      bloodType: '',
      home_address: '',
      certificateNum: '',
      donateType: '',
      date: '',
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, id, bloodType, home_address, certificateNum,donateType,date } = this.state
        this.props.NFTminting(name, id, bloodType, home_address, certificateNum,donateType,date)
    }

    render() {
        const { name, id, bloodType, home_address, certificateNum,donateType,date } = this.state
        return (
            
          <form className="NFTminting" onSubmit={this.handleSubmit}>
            <Input
              className="NFTminting_name"
              name="name"
              label="헌혈자 이름"
              value={name}
              onChange={this.handleInputChange}
              placeholder="헌혈자 이름을 입력하시오."
              required
            />
            
            <Input
              className="NFTminting_id"
              name="id"
              label="주민등록번호"
              value={id}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 주민등록번호를 입력하시오."
              required
            />
            
            <Input
              className="NFTminting_bloodType"
              name="bloodType"
              label="혈액형"
              value={bloodType}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 혈액형을 입력하시오."
              required
            />

            <Input
              className="NFTminting_home_address"
              name="home_address"
              label="주소"
              value={home_address}
              onChange={this.handleInputChange}
              placeholder="헌혈자의 주소를 입력하시오."
              required
            />

            <Input
              className="NFTminting_certificateNum"
              name="certificateNum"
              label="증명서 번호"
              value={certificateNum}
              onChange={this.handleInputChange}
              placeholder="증명서 번호를 입력하시오."
              required
            />

            <Input
              className="NFTminting_donateType"
              name="donateType"
              label="헌혈 종류"
              value={donateType}
              onChange={this.handleInputChange}
              placeholder="헌혈 종류를 입력하시오."
              required
            />

            <Input
              className="NFTminting_date"
              name="date"
              label="날짜"
              value={date}
              onChange={this.handleInputChange}
              placeholder="오늘 날짜를 입력하시오."
              required
            />

            <Button
              className="UploadPhoto__upload"
              type="submit"
              title="헌혈증명서 업로드"
            />
          </form>
        )
      }
}

export default NFTminting