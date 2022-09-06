import axios from 'axios';
import Caver from 'caver-js';
// import CounterABI from '../abi/CounterABI.json';
import KIP17ABI from '../abi/KIP17TokenABI.json';
import MarketABI from '../abi/MarketABI.json';

import { ACCESS_KEY_ID, SECRET_ACCESS_KEY,COUNT_CONTRACT_ADDRESS,NFT_CONTRACT_ADDRESS,MARKET_CONTRACT_ADDRESS,CHAIN_ID } from '../constants';

// KAS 접근용 parameter 설정
// 강의와 다른 형식으로 업데이트 된듯 -> Klaytn docs 참고
const option = {
    headers:[{
      name:"Authorization",
      value:"Basic " + Buffer.from(ACCESS_KEY_ID + ':' + SECRET_ACCESS_KEY).toString('base64')
    },
    {name:"x-chain-id",value : CHAIN_ID}
    ]
}
  
  const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn",option))
  
  // caver에 abi와 SC의 주소를 params로 넣는다.
  console.log("Caver Access Success");

  // caver를 통해 NFTcontract에 접근할 때 ABI와 Smart Contract의 주소를 인자로 설정
  const NFTContract = new caver.contract(KIP17ABI, NFT_CONTRACT_ADDRESS)

  // 사용자의 주소를 기반으로 소유 Token에 대한 정보들을 가져옴
  // App.js에서 사용됨
  export const fetchCardsOf = async (address) =>{

    // Fetch balance
    const balance = await NFTContract.methods.balanceOf(address).call();
    console.log(`NFT balance : ${balance}`);

    // Fetch Token IDs
    const tokenIds = [];
    for( let i=0;i<balance;i++){
      const id = await NFTContract.methods.tokenOfOwnerByIndex(address,i).call();
      tokenIds.push(id);
    }

    // Fetch Token URIs -> NFT data
    const tokenUris = [];
    for( let i=0;i<balance;i++){
      const metadataUrl = await NFTContract.methods.tokenURI(tokenIds[i]).call(); // -> metadata kas 주소
      const response = await axios.get(metadataUrl);
      const uriJSON = response.data;
      // 변경된 NFT에는 direct로 img가 존재하지 않기에 axios를 통해 불러온 response에서 image부분을 추출해 준 후  list에 push해준다.
      tokenUri.push(uriJSON.image);
    }

    console.log(`${tokenIds}`);
    console.log(`${tokenUris}`);

    // 최종적으로 return할 nft 배열 생성
    // 위의 tokenId, tokenUri 배열을 통합하여 => nfts 배열에 저장
    const nfts = [];
    for(let i = 0;i<balance;i++){
      nfts.push({uri:tokenUris[i],id:tokenIds[i]}) // {tokenId:'101', tokenUri:''} 형식
    }
    console.log(nfts);

    return nfts;
    
  }
  
 export const getBalance = (address) => {
    // 지갑 주소에 대한 klay 잔고 return
    return caver.rpc.klay.getBalance(address).then((res)=>{
      const balance = caver.utils.convertFromPeb(caver.utils.hexToNumberString(res));
      console.log(`BALANCE : ${balance}`);
      return balance;
    })
  }


  // const CountContract = new caver.contract(CounterABI,COUNT_CONTRACT_ADDRESS);
  
    // export const readCount = async() =>{
  //   const _count = await CountContract.methods.count().call();
  //   console.log(_count);
  // }
  
  // export const setCount = async (newCount)=>{
  //   // 사용할 account 설정
  //   try{
  //     const privatekey = '0xfac71af0f6120f24a75c6818661d1c7be89295033d25a56f7a1e7bcf1575fa11';
  //     const deployer = caver.wallet.keyring.createFromPrivateKey(privatekey);
  //     caver.wallet.add(deployer);
  //     // SC 실행 TX 날리기
  //     // 결과 확인
  //     const receipt = await CountContract.methods.setCount(newCount).send({
  //       from : deployer.address, //address
  //       gas:"0x4bfd200"
  //     })
  //     console.log(receipt);
  //   } catch(e){
  //     console.log(`[ERROR_SET_COUNT]${e}`);
  //   }
  // }