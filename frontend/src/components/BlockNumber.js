import React, { Component } from 'react'

import { cav } from 'klaytn/caver'

import './BlockNumber.scss'

/**
 * BlockNumber 컴포넌트는 1초(1000ms)마다 현재 블록 번호를 가져옵니다.
 * 현재 블록 번호는 Klaytn 노드와의 연결 및 통신을 담당하는 caver-js 라이브러리를 통해 불러올 수 있습니다.
 * 참고) 특정 Klaytn 노드에 연결하려면 klaytn/caver.js에서 'rpcURL' 설정을 변경하세요
 */
class BlockNumber extends Component {
  /**
   * BlockNumber 컴포넌트는 'currentBlockNumber'를 통해 상태를 나타냅니다.
   */
  state = {
    currentBlockNumber: '...loading',
  }

  /**
   * 'getBlockNumber' 메서드는 다음의 기능을 합니다.
   * 1) 'cav.klay.getBlockNumber()'를 호출하여 Klaytn 노드로부터 현재 블록 번호를 가져옵니다.
   * 2) 과정 1)을 통해 불러온 값을 'currentBlockNumber’에 저장합니다.
   */
  getBlockNumber = async () => {
    const blockNumber = await cav.klay.getBlockNumber()
    this.setState({ currentBlockNumber: blockNumber })
  }

  /**
   * intervalId 값은 `setInterval`에서 반환된 값으로 채워집니다.
   * intervalId 변수는 블록 번호를 불러오는 주기를 초기화하는 데에 사용되어 메모리 누수를 방지합니다.
   */
  intervalId = null

  /**
   * 'componentDidMount'의 생명 주기 동안 'getBlockNumber' 메서드를 주기적으로 호출합니다.
   */
  componentDidMount() {
    this.intervalId = setInterval(this.getBlockNumber, 1000)
  }

  /**
   * 'componentWillUnmount'의 생명 주기 동안 1000ms마다 getBlockNumber를 호출하는 주기를 초기화합니다.
   */
  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId)
  }

  /**
   * 'render' 생명 주기 동안 'currentBlockNumber'의 상태는 아래와 같습니다.
   * <p>Block No. {currentBlockNumber}</p>
   */
  render() {
    const { currentBlockNumber } = this.state
    return (
      <div className="BlockNumber">
        <p className="BlockNumber__current">Block No. {currentBlockNumber}</p>
      </div>
    )
  }
}

export default BlockNumber