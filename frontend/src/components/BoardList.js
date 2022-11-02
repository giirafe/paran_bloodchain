import React, { Component, useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
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

const selectRowProp = {
    mode: 'checkbox',
    bgColor: 'deeppink'
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

function BoardList() {
    const [boardLList, setBoardList] = useState([])
    const [checkList, setCheckList] = useState([])


    const getList = () => {
        Axios.get("http://localhost:3001/community", {})
            .then((res) => {
                const { data } = res;
                setBoardList(data)
            })
            .catch((e) => {
                console.error(e);
            });
        console.log(boardLList)
    };

    const onCheckboxChange = (checked, address) => {
        const list = checkList.filter((v) => {
            return v != address;
        })

        if(checked) {
            list.push(address);
        }

        setCheckList(list);
    }

    const handleDelete = () => {
        if (checkList.length == 0) {
            alert('삭제할 게시글을 선택하세요.');
            return;
        }

        let boardAddressList = "";

        checkList.forEach((v) => {
            boardAddressList += `'${v}',`;
        })

        Axios.post("http://localhost:3001/delete", {
            boardAddressList: boardAddressList.substring(0, boardAddressList.length - 1),
        })
        .then(() => {
            getList();
        })
        .catch((e) => {
            console.error(e);
        })
    }
    /**
     */
    useEffect(() => {
        getList();
    },[])


    /**
     * @return {Component} Component
     */

    // eslint-disable-next-line
    const navigate = useNavigate();

    const options = {
        searchPosition: 'left',
        onRowClick: function(row) {
            navigate(`${row.address}/${row.title}`, {state:{address:row.address, title:row.title, content:row.content, createdAt:row.createdAt}})
        }
    }


    return (
        <BootstrapTable data={boardLList} options={options} striped hover condensed selectRow={selectRowProp} pagination search={true} multiColumnSearch={true}>
            <TableHeaderColumn width='350' dataField='address' isKey={true} dataAlign='center'>주소</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='title' dataAlign='center'>제목</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='content' dataAlign='center'>내용</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='createdAt' dataAlign='center'>작성일</TableHeaderColumn>
        </BootstrapTable>
    );
}

export default BoardList;