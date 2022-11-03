import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

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
    const navigate = useNavigate();
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
        
        handleConfirmDeleteRow: deletePost,
    }

    return (
        <div>
            <BootstrapTable data={boardLList} deleteRow={true} options={options} striped hover condensed selectRow={selectRowProp} pagination search={true} multiColumnSearch={true}>
                <TableHeaderColumn width='350' dataField='address' dataAlign='center'>주소</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='title' dataAlign='center'>제목</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='content' dataAlign='center' isKey={true}>내용</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='createdAt' dataAlign='center'>작성일</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default MyWrite;