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
          <div className="wrap">
            <div className="space"></div>
            <Header/>
            <div class="Write">
              <label>제목</label>
              <input className="write-title" name="title" type="text" onChange={this.handleInputChange} placeholder="제목을입력하세요" />
              <br/>
              <br/>
              <label>내용</label>
              <input className="write-content" name="content" as="textarea" onChange={this.handleInputChange} placeholder="내용을 입력하세요" />
            </div>

            <Link to="/community">
            <div className="button login">
              <button
                type="submit"
                title="글 업로드"
                onClick={this.write}
              >작성 완료<i className="fa fa-check"></i></button>
            </div>
            </Link>
            
          </div>
        )
      }
}



export default WriteDonate