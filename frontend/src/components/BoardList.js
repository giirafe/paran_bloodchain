import { Component } from "react";
import React from "react";
import Axios from "axios";
import './BoardStyle.scss';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Table } from "react-bootstrap";

const Board = ({
    address,
    title,
    content,
    registerDate,
    props,
}) => {
    return (
        <tr>
            <td>
                <input type="checkbox" value={address} onChange={props.onCheckboxChange}></input>
            </td>
            <td>{address}</td>
            <td>{title}</td>
            <td>{content}</td>
            <td>{registerDate}</td>
        </tr>
    );
};

/*
interface IProps {
    isComplete: boolean;
    handleModify: any;
    renderComplete: any;
}*/

/**
 * BoardList class
 */
class BoardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardList: [],
            checkList: [],
        }
    }
    
    state = {
        boardList: [],
        checkList: [],
    };

    getList = () => {
        Axios.get("http://localhost:3001/community", {})
            .then((res) => {
                const { data } = res;
                this.setState({
                    boardList: data,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    onCheckboxChange = (checked, address) => {
        const list = this.state.checkList.filter((v) => {
            return v != address;
        })

        if(checked) {
            list.push(address);
        }

        this.setState({
            checkList: list,
        })
    }

    handleDelete = () => {
        if (this.state.checkList.length == 0) {
            alert('삭제할 게시글을 선택하세요.');
            return;
        }

        let boardAddressList = "";

        this.state.checkList.forEach((v) => {
            boardAddressList += `'${v}',`;
        })

        Axios.post("http://localhost:3001/delete", {
            boardAddressList: boardAddressList.substring(0, boardAddressList.length - 1),
        })
        .then(() => {
            this.getList();
        })
        .catch((e) => {
            console.error(e);
        })
    }
    /**
     */
    componentDidMount() {
        this.getList();
    }


    /**
     * @return {Component} Component
     */

    
    render() {
        // eslint-disable-next-line
        const { boardList } = this.state;

        return (
            <BootstrapTable data={boardList} bordered={false} striped hover condensed>
                <TableHeaderColumn width='50' dataField='address' isKey={true} dataAlign='center'>주소</TableHeaderColumn>
                <TableHeaderColumn width='100' dataField='title' dataAlign='center'>제목</TableHeaderColumn>
                <TableHeaderColumn width='100' dataField='content' dataAlign='center'>내용</TableHeaderColumn>
                <TableHeaderColumn width='50' dataField='createdAt' dataAlign='center'>작성일</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default BoardList;