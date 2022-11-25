import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios';
import Header from '../../components/layout/header'
import SideMenu from './side';

var idArray = [];

function onRowSelect(row) {
    var id = null;
    for (const prop in row) {
        id = row[prop]
        break;
    }
    idArray.push(id)
    /*
    axios.delete(`http://localhost:3001/delete?id=${id}`)
    .then(alert('삭제 성공'))
    .then(window.location.reload())*/
}

function deletePost() {
    for (let i=0; i < idArray.length; i++){
        axios.delete(`http://localhost:3001/delete?id=${idArray[i]}`)
        .then(alert('삭제 성공'))
        .then(window.location.reload())
    }
    
}

const selectRowProp = {
    mode: 'checkbox',
    onSelect: onRowSelect,
};

function MyWrite () {
    const myAddress = JSON.parse(sessionStorage.getItem('walletInstance')).address
    
    const [boardLList, setBoardList] = useState([])

    const getList = () => {
        Axios.get("http://localhost:3001/search", {params: {address: myAddress}})
            .then((res) => {
                const { data } = res;
                setBoardList(data)
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(() => {
        getList();
    },[])

    const options = {
        searchPosition: 'left',
        defaultSortName: 'createdAt',
        defaultSortOrder: 'desc',
        handleConfirmDeleteRow: deletePost,
    }

    return (
        <div>
            <Header />
            <SideMenu/>
            
            <div className="tableLocation">
                <BootstrapTable data={boardLList} deleteRow={true} options={options} selectRow={selectRowProp} pagination search={true} multiColumnSearch={true}>
                    <TableHeaderColumn width='350' dataField='address' dataAlign='center'>주소</TableHeaderColumn>
                    <TableHeaderColumn width='200' dataField='title' dataAlign='center'>제목</TableHeaderColumn>
                    <TableHeaderColumn width='200' dataField='createdAt' dataAlign='center' isKey={true}>작성일</TableHeaderColumn>
                </BootstrapTable>
            </div>
        </div>
    )
}

export default MyWrite;