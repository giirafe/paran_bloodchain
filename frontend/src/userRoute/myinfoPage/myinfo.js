import React, {useState, Component} from 'react';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import MaterialTable from '../MaterialTable';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const bloodPaper = ({
    num,
    type,
    date,
    institute,
    props,
}) => {
    return (
        <tr>
            <td>
                <input type="checkbox" value={num} onChange={props.onCheckboxChange}></input>
            </td>
            <td>{num}</td>
            <td>{type}</td>
            <td>{date}</td>
            <td>{institute}</td>
        </tr>
    );
};

class myinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paperList: [],
            checkList: [],
        }
    }

    state = {
        paperList: [],
        checkList: [],
    };

    render() {
        const { paperList } = this.state;

        return(
            <body>
                <Header/>
                <div className="list">
                    <h3 className="Name1">기부 가능 횟수</h3>
                    <h3 className="Name2">기부 받은 횟수</h3>
                    <h3 className="Name3">기부한 횟수</h3>
                </div>
    
                <div className="listNum">
                    <h3 className="num1">3</h3>
                    <h3 className="num2">0</h3>
                    <h3 className="num3">2</h3>
                </div>
                
                <BootstrapTable data={paperList} pagination>
                    <TableHeaderColumn isKey={true} dataField='num'>증서 번호</TableHeaderColumn>
                    <TableHeaderColumn dataField='type'>헌혈 종류</TableHeaderColumn>
                    <TableHeaderColumn dataField='date'>헌혈 일자</TableHeaderColumn>
                    <TableHeaderColumn dataField='institute'>혈액원 명</TableHeaderColumn>
                </BootstrapTable>
    
                <Link to ="/createkey">
                <button className="main-btn" onClick="hi">조회 키 비밀번호 생성하기</button>
            </Link>
            </body>
    
        );
    }
}

export default myinfo;