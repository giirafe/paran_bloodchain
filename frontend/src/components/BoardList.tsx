import { Component } from "react";
import React from 'react';
import Axios from "axios";



const Board = ({
    address,
    title,
    content,
    registerDate,
}: {
    address: string;
    title: string;
    content: string;
    registerDate: string;
}) => {
    return (
        <tr>
            <td>
                <input type="checkbox"></input>
            </td>
            <td>{address}</td>
            <td>{title}</td>
            <td>{content}</td>
            <td>{registerDate}</td>
        </tr>
    );
};

/**
 * BoardList class
 */
class BoardList extends Component {
    state = {
        boardList: [],
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
        const { boardList }: { boardList: any } = this.state;

        return (
            <div>
                <table style={{width:'400px'}}>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>주소</th>
                            <th>제목</th>
                            <th>내용</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // eslint-disable-next-line
                            boardList.map((v: any) => {
                                return (
                                    <Board
                                        address={v.address}
                                        title={v.title}
                                        content={v.content}
                                        registerDate={v.createdAt}
                                    />
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BoardList;