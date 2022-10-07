import React, { Component } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as axios from 'axios'
import { Form } from 'react-bootstrap'
import Header from '../../components/layout/header';
import './writecontent.css';

class WriteDonate extends Component {
    state = {
      address: '',
      title: '',
      content: '',
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { title, content } = this.state
        this.props.WriteDonate(title, content)
    }

    write = () => {
      axios.post("http://localhost:3001/writecontent", {
        address : sessionStorage.getItem('walletInstance')["address"],
        title : this.state.title,
        content: this.state.content,
      })
      .then((res) => {
        console.log(res);
        alert('업로드 성공')
      })
      .catch((e) => {
        console.error(e);
      })
    }

    render() {
        const { title, content } = this.state
        return (
          <div>
            <Form.Group>
              <Form.Label>제목</Form.Label>
              <Form.Control className="Write" name="title" type="text" onChange={this.handleInputChange} placeholder="제목을입력하세요" />
            </Form.Group>
            <Form.Group>
              <Form.Label>내용</Form.Label>
              <Form.Control className="Write" name="content" as="textarea" onChange={this.handleInputChange} placeholder="내용을 입력하세요" />
            </Form.Group>

            <Button
              className="uploadBTN"
              type="submit"
              title="글 업로드"
              onClick={this.write}
            />
          </div>
        )
      }
}

export default WriteDonate