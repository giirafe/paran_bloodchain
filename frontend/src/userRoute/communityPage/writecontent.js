import React, { Component } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as axios from 'axios'
import { Form } from 'react-bootstrap'
import Header from '../../components/layout/header';
import './writecontent.css';
import {Link} from 'react-router-dom';

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
        address : JSON.parse(sessionStorage.getItem('walletInstance')).address,
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
        return (
          <body>
            <Header/>
            <div className="wrap">
              <div className="space"></div>
              <div className="Write">
              <h2>글을 작성하세요</h2>
                <p>제목</p>
                <input className="write-title" name="title" type="text" onChange={this.handleInputChange} />
                <br/>
                <br/>
                <p>내용</p>
                <input className="write-content" name="content" as="textarea" onChange={this.handleInputChange} />
              </div>

              
                <button
                  className="main-btn"
                  type="submit"
                  title="글 업로드"
                  onClick={this.write}
                >업로드</button>
              
            </div>
          </body>
        )
      }
}



export default WriteDonate