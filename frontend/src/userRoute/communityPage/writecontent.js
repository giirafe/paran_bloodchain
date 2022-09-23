import React, { Component } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

class WriteDonate extends Component {
    state = {
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

    render() {
        const { title, content } = this.state
        return (
            
          <form className="WriteDonate" onSubmit={this.handleSubmit}>
            <Input
              className="WriteDodate_title"
              name="title"
              label="제목"
              value={title}
              onChange={this.handleInputChange}
              placeholder="제목을 입력하세요."
              required
            />
            
            <Input
              className="WriteDodate_content"
              name="content"
              label="내용"
              value={content}
              onChange={this.handleInputChange}
              placeholder="내용을 입력하세요."
              required
            />

            <Button
              className="UploadPhoto__upload"
              type="submit"
              title="글 업로드"
            />
          </form>
        )
      }
}

export default WriteDonate