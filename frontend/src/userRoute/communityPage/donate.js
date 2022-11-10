import React, { Component } from 'react';
import '../useletterPage/useletter.css';
import Button from '../../components/Button'
import caver from '../../klaytn/caver';
import BloodContract from '../../components/BloodContract';
import { type } from '@testing-library/user-event/dist/type';

console.log("klaytn wallet is :", caver.klay.accounts.wallet)
class Useletter extends Component {
  state = {
    walletTo: '',
    count : '',
  }

  handleInputChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
      const { walletTo, count } = this.state
      //parseInt(count);
      //console.log("count is : ", typeof(count));
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
  
  const jsonWallet = wallet_session();
  const wallet = caver.klay.accounts.privateKeyToAccount(jsonWallet.privateKey);
  caver.klay.accounts.wallet.add(wallet)
  
  /*
  const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0]
  const wallet = walletInstance;
  */
  
  const before_balance = await BloodContract.methods.balances(wallet.address).call();
  console.log("before_balance: ", before_balance);
  
  const count1 = await parseInt(count);
  console.log("count is : ", typeof(count1));

  await BloodContract.methods.transferFrom(wallet.address, walletTo, count1).send({
    from: wallet.address,
    gas: '200000000',
  });

  const after_balance = await BloodContract.methods.balances(wallet.address).call()
  console.log("after_balance: ", after_balance);
  
  await caver.klay.accounts.wallet.clear()

  console.log("cycle done");

  
}
export default Useletter