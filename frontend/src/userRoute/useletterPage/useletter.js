import React, { Component } from 'react';
import './useletter.css';
import Button from '../../components/Button'
import caver from '../../klaytn/caver';
import BloodContract from '../../components/BloodContract';
import { type } from '@testing-library/user-event/dist/type';

console.log("klaytn wallet is :", caver.klay.accounts.wallet)
class Donate extends Component {
  state = {
    walletTo: '',
    count : 0,
  }

  handleInputChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
  }

  handleSubmit = async (e) => {
      e.preventDefault()
      const { walletTo, count } = this.state
      await donateBalance(walletTo, count);
      await window.location.reload();
      //this.props.WriteDonate(walletaddress, count)
  }


  render() {
      const { walletTo, count } = this.state
      return (
        
        <form className="Donate" onSubmit={this.handleSubmit}>
          <label>지갑 주소</label>
          <br/>
          <input
            className="Donate_walletaddress"
            name="walletTo"
            value={walletTo}
            onChange={this.handleInputChange}
            placeholder="상대방의 지갑 주소를 입력하세요."
            required
          />
          <br/>
          <label>사용 개수</label>
          <br/>
          <input
            className="Donate_count"
            name="count"
            value={count}
            onChange={this.handleInputChange}
            placeholder="비밀번호를 입력하세요."
            required
          />
          <br/>
          <Button
            className="UploadPhoto__upload"
            type="submit"
            title="사용"
          />
        </form>
        

      )
      
    }
}
export const wallet_session = () => {
  const data = JSON.parse(sessionStorage.getItem("walletInstance"));
  console.log(data.address);
  return data // 세션 스토리지 address값반환
}

export const donateBalance = async(
  walletTo,
  count
) => {
  /*
  const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
  const wallet = walletInstance;
  const wallet_From = wallet_session();

  console.log("wallet_From : ",wallet_From);
  console.log("walletTo : ",walletTo);
  console.log("wallet.address is  : ",wallet.address);
  
  */
  const jsonWallet = wallet_session();
  const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
  caver.klay.accounts.wallet.add(wallet)
  /*
  const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
  const wallet = walletInstance;
  */
  /*
  console.log("klaytn wallet is :", caver.klay.accounts.wallet)
  const walletFromSession = sessionStorage.getItem('walletInstance')
  const wallet = JSON.parse(walletFromSession)
  */

  await BloodContract.methods.transferFrom(wallet.address, walletTo, count).send({
    from: wallet.address,
    gas: '200000000',
  });

  console.log("cycle done");
}
export default Donate