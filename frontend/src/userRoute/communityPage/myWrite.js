import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {useNavigate} from 'react-router-dom'

const selectRowProp = {
    mode: 'checkbox',
    bgColor: 'deeppink'
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
        onRowClick: function(row) {
            navigate(`${row.address}/${row.title}`, {state:{address:row.address, title:row.title, content:row.content, createdAt:row.createdAt}})
        }
    }

    return (
        <div>
            <BootstrapTable data={boardLList} options={options} striped hover condensed selectRow={selectRowProp} pagination search={true} multiColumnSearch={true}>
                <TableHeaderColumn width='350' dataField='address' isKey={true} dataAlign='center'>주소</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='title' dataAlign='center'>제목</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='content' dataAlign='center'>내용</TableHeaderColumn>
                <TableHeaderColumn width='200' dataField='createdAt' dataAlign='center'>작성일</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default MyWrite;