# ❣️ PLOW : 블록체인 기반 전자 헌혈 플랫폼

<p align='center'>
<br>
 <img src='https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo'>
 <a href='https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/blob/main/LICENSE'><img src='https://img.shields.io/badge/License-GNU GPL v3.0-blue?style=for-the-badge&logo'></a>
<div align="center">
  <a href="https://www.youtube.com/watch?v=hz3nOc_vhxk"><img src="https://img.youtube.com/vi/hz3nOc_vhxk/0.jpg" alt="유투브 영상"></a>
</div>

</p>

## 위 사진을 클릭하시면 유튜브를 통해 시연영상(현재는 중간 교류회 발표 영상)을 확인하실 수 있습니다.  👆
PLOW는 Klaytn Network 기반 전자 헌혈 플랫폼(웹 서비스)으로 
* 기존 실물 헌혈증의 전자화, 
* 헌혈증 기부 간편화,
* 헌혈 공가제도의 활성화를 이루고자 합니다.

## 🗂️프로젝트 소개
본 프로젝트는 실물 헌혈증의 전자화를 블록체인을 통해 실행함으로서,  
* 오프라인 헌혈증 기부의 **불편함을 해소**하고,
* 온라인 커뮤니티를 통해 사용자간의 헌혈증 기부를 **활성화**하고.
* 공공기관의 **헌혈 공가제도**를 활성화하여
* 종래에는 민간기업에도 헌혈 공가제도를 정착하여 궁극적으로 **헌혈의 활성화**에 목표를 둡니다.


## 📠관련 문서
<details>
 <summary>📃주제 정의 문서</summary>
 
 ### 문제 발견하기
   - 연도별 헌혈 자료를 보면 대한민국의 헌혈량은 지속적으로 감소하고 있습니다. 
   - 헌혈 인구 구조가 특정 연령대에 편중되어 있는 상황입니다.
   - 헌혈 복지제도 중 하나인 헌혈 공가제도가 활성화되어 있지 않은 상황입니다.
   - 헌혈증서 사용률이 매우 적은 상황입니다. 
   
 
 ### 문제 정의
 - 헌혈증서를 기부하고 싶어도 대면 기부, 우편 기부밖에 방법이 없기 때문에 헌혈증서가 적재적소에 사용되고 있지 않습니다.
 - 헌혈 공가제도를 사용하고 싶어도 사용 절차가 불편하기 때문에 활성화되고 있지 않습니다.
 - 따라서 헌혈을 활성화시키기 위해서 헌혈 관련 인프라를 구축해야 합니다.
 
 ### 아이디어 내기
 
 - "자신의 헌혈 기록을 관리할 수 있는 헌혈 마이데이터 서비스를 만들자."
 - "헌혈증서 기부가 원활히 이루어질 수 있도록 커뮤니티와 온라인 기부 인프라를 만들자."
 - "헌혈 공가제도를 활성화하기 위해서 헌혈 공가 사용 인프라를 만들자.."
 
</details>

<details>
 <summary>🗒사용자 정의 문서</summary>
 
 ### 페르소나
 ![P_LOW 페르소나-001](https://user-images.githubusercontent.com/87919319/225295722-e8ef7b51-4cee-414b-8276-a617d9a27f48.png)

 ### 시나리오
 
 #### #1
 *대한적십자사 직원인 나대한은 헌혈의 집에서 헌혈자의 헌혈을 도운다.*
 
 0. 나대한은 웹 페이지를 실행한다.
  0-1. 본인의 개인키로 로그인하여 대한적십자사 전용 페이지에 접근한다.
 1. 나대한은 헌혈자가 헌혈을 마치고 나오면 헌혈자의 정보를 양식에 입력한다.
 2. 입력을 한 후, 발행 버튼을 눌러 해당 헌혈자에게 NFT 헌혈증명서를 발행한다.
 3. 발행 기록을 통해 지금까지 자신이 발행한 NFT 헌혈증명서를 확인한다. 
 
 #### #2
 *헌혈을 처음 하는 대학생 홍길동은 헌혈을 마치고 나온다.*

 0. 홍길동은 처음으로 웹 페이지를 실행한다. 
  0-1. 본인의 개인키로 로그인하여 헌혈자 전용 페이지에 접근한다.
 1. 방금 헌혈한 기록을 NFT 헌혈증명서를 통해 확인한다.
 2. 헌혈증서 커뮤니티에 들어가 헌혈증서 기부가 필요한 사람들을 본다.
 3. 사연을 보고 자신의 헌혈증서 1개를 기부하기로 결심한다.
 4. 피기부자의 지갑 주소와 기부할 헌혈증서 개수를 입력하고 기부 버튼을 눌러 기부한다.
 5. 생애 첫 헌혈을 하고 기부까지 한 홍길동은 자신을 뿌듯해한다.
 
 #### #3
 *헌혈을 한 달에 한번 하는 직장인 나헌혈은 헌혈 공가를 신청하고자 한다.*
 
 0. 나헌혈은 웹 페이즈를 실행한다.
   0-1. 본인의 개인키로 로그인하여 기관 전용 페이지에 접근한다.
 1. 나헌혈은 e-mail로 회사에게 본인의 개인키를 전달한다.
 2. 나헌혈의 개인키를 받은 회사는 회사 페이지에서 나헌혈의 개인키를 입력하고 나헌혈의 헌혈 기록을 확인한다.
 3. 회사는 나헌혈의 헌혈 기록을 확인하고 헌혈 공가를 부여한다.
 4. 나헌혈은 헌혈 공가를 받고, 앞으로 헌혈을 열심히 해야겠다는 다짐을 한다. 
 
</details>

<details>
 <summary>📈시스템 흐름도</summary>
 
 ### User-case Diagram
 <p align='center'><img src="https://user-images.githubusercontent.com/40621030/134690667-abe8f797-01a8-44db-ae89-ef7809c22d64.png"/></p>
 
 ### Sequence Diagram
  <p align='center'><img src="https://user-images.githubusercontent.com/40621030/136720501-bbe98072-abbc-4797-a0c2-c66771f7e04a.png"/></p>
 
 ### Architecture
  <p align='center'><img src="https://user-images.githubusercontent.com/40621030/136720255-0456ffd4-4d7d-4d2e-b5c5-09387c5861fa.png"/></p>
</details>


## 📔기능 설명
### 🩸**P:LOW Web** ###
웹을 처음 실행 시, 사용자는 우측 상단에 회원가입 버튼을 클릭합니다. 이후 Klaytn Wallet의 개인키를 통해 회원가입을 진행합니다. 

<table>
  <tr>
   <td><img src="https://user-images.githubusercontent.com/96776691/225880429-e796c8a0-f47d-4246-9585-09bbd67f2473.png" height="150" width="300"/></td>
   <td><img src="https://user-images.githubusercontent.com/96776691/225880685-3a21c5e0-8ffc-4865-895e-56fd3d84324b.png" height="150" width="300"/></td>
   <td><img src="https://user-images.githubusercontent.com/96776691/225881263-951e6f3c-78ea-4672-9c52-2f6c17175763.png" height="150" width="300"/></td>
  </tr>
 </table>

 P:LOW서비스의 유저는 "일반유저, 조회기관, 헌혈기관" 총 3가지로 나눌 수 있습니다.


 ### 일반유저
- 최근 헌혈정보 확인
개인키로 로그인 시, 최근 헌혈정보를 확인할 수 있습니다.
<table>
  <tr>
   <td><img src="https://user-images.githubusercontent.com/96776691/225883972-73ee3082-307c-4227-96ae-157fdcf631d0.png" width="400"/></td>
   <td><img src="https://user-images.githubusercontent.com/96776691/225884383-1c2fe716-6260-4135-85fd-8c6bb3d1d657.png" width="400"/></td>
  </tr>
  <tr>
   <td><img src="https://user-images.githubusercontent.com/96776691/225884454-d55a62a9-74d9-4fc0-bd0e-6f744c5c5c2d.png" width="400"/></td>
   <td><img src="https://user-images.githubusercontent.com/96776691/225884540-942fe5a5-dc69-4799-b3e8-f38a8e23bcaa.png" width="400"/></td>
  </tr>
 </table>

- 헌혈 기록 확인
‘내 정보’ 페이지에서 지금까지의 헌혈정보를 확인할 수 있습니다.
 <p align='center'><img src="https://user-images.githubusercontent.com/96776691/225885193-79f03000-1438-4086-802c-9254ff3c925b.png" width="700"/></p>

- 헌혈커뮤니티
P:LOW Web유저들과 헌혈커뮤니티를 이용할 수 있습니다. 헌혈증서가 필요하다는 글을 올릴 수 있고, 타 유저들이 쓴 글을 확인하고 게시글에서 바로 헌혈증서를 기부할 수도 있습니다.
<p align='center'><img src="https://user-images.githubusercontent.com/96776691/225885322-349a28f8-3460-43ca-8e50-40840f2a7328.png" width="700"/></p>

- 헌혈증서 기부
헌혈증서 기부 대상자의 지갑주소, 헌혈증서 기부 개수를 입력하고 ‘기부’버튼을 누르면 헌혈증서를 기부할 수 있습니다.
<p align='center'><img src="https://user-images.githubusercontent.com/96776691/225885500-320c1e6a-f244-483e-b534-f537db56b35c.png" width="700"/></p>

- 기부 내역도 확인할 수 있습니다.
<p align='center'><img src="https://user-images.githubusercontent.com/96776691/225885632-c319a61e-a66c-4450-99f3-c460bfaa31a3.png" width="700"/></p>


### 조회기관
- 조회 기능
조회대상자의 지갑주소와 조회비밀번호를 입력하여 헌혈기록을 조회할 수 있습니다.
<p align='center'><img src="https://user-images.githubusercontent.com/96776691/225885989-62a5bc63-3d21-4c01-b6b3-b6259399f9f0.png" width="700"/></p>

- 조회내역 확인
조회 기능을 사용했을 때 조회대상의 지갑주소 정보, 조회일 정보를 확인할 수 있습니다.
<p align='center'><img src="https://user-images.githubusercontent.com/96776691/225886180-4b870258-23ca-4562-b3f2-f894457769f0.png" width="700"/></p>


### 헌혈기관
- 헌혈증명서 발행
헌혈자의 개인 정보를 입력하고 지갑주소를 입력 후 , ‘발행’버튼을 클릭하면 헌혈증명서가 발행됩니다.

- 헌혈증명서 발급기록 확인
헌혈기관이 발급한 헌혈정보(주민등록번호, 이름, 헌혈분류, 발행일)을 확인할 수 있습니다.
<p align='center'><img src="https://user-images.githubusercontent.com/96776691/225886329-c65639f5-dfd7-4529-b1fa-8f7d844abf74.png" width="700"/></p>


<!--
### 🖥화면 정의
<table>
 <tr>
  <td><img src="https://user-images.githubusercontent.com/40621030/134689804-f72fc601-00cb-462b-a332-a1bcb62ad8a1.png" width="230"/></td>
  <td><img src="https://user-images.githubusercontent.com/40621030/134689811-03fca8d5-26fd-4678-a398-df31655ebae5.png" width="230"/></td>
  <td><img src="https://user-images.githubusercontent.com/40621030/134689813-b89f9162-4e74-48c7-9ac6-57e22f355827.png" width="230"/></td>
 </tr>
 <tr>
  <td><img src="https://user-images.githubusercontent.com/40621030/134689816-4aeb35f6-ca24-4bc4-a4b5-902318b8d895.png" width="230"/></td>
  <td><img src="https://user-images.githubusercontent.com/40621030/134766861-33bf44f8-1330-43d2-91af-4a68f2432507.png" width="230"/></td>
 </tr>
</table>
-->

---

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상
* python >= 3.6 
* pytorch >= 1.7

---

## 🔨기술 스택 (Technique Used) 
### Server(back-end)
<table>
 <tr>
  <td><a href='https://nodejs.org/ko/'><img src='https://user-images.githubusercontent.com/40621030/136699173-a5a2e626-9161-4e30-85fd-93898671896e.png' height=80/></a></td>
  <td><a href='https://www.mongodb.com/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png' height=80/></a></td>
  <td><a href='https://ko.docs.klaytn.foundation/content/dapp/sdk/caver-js/getting-started'><img src='https://raw.githubusercontent.com/klaytn/caver-js/HEAD/assets/logo/caver-js.png' width = 200 height=120/></a></td>
 </tr>
 <tr>
  <td align='center'>Node Js</td>
  <td align='center'>MongoDB</td>
  <td align='center'>Caver Js</td>
 </tr>
</table>

<details>
 <summary>MongoDB DDL 설명</summary>
 
 ### MongoDB 데이터베이스 구성
 - Database 명 : Node_db
 - DB 관리자 명 : node_admin

 - User Table
   - id : 유저 id
   - name : 유저 이름
   - d_num : 유저 군번
   - password : 유저 비밀번호
   - time : 유저 생성 TimeStamp
 ```
 mysql> desc user_t;
 +----------+-------------+------+-----+-------------------+----------------+
 | Field    | Type        | Null | Key | Default           | Extra          |
 +----------+-------------+------+-----+-------------------+----------------+
 | id       | int(10)     | NO   | PRI | NULL              | auto_increment |
 | name     | varchar(20) | NO   |     | NULL              |                |
 | d_num    | varchar(10) | NO   | UNI | NULL              |                |
 | password | varchar(70) | NO   |     | NULL              |                |
 | time     | datetime    | YES  |     | CURRENT_TIMESTAMP |                |
 +----------+-------------+------+-----+-------------------+----------------+

 mysql> select * from user_t;
 +----+-------------+------------+--------------------------------------------------------------+---------------------+
 | id | name        | d_num      | password                                                     | time                |
 +----+-------------+------------+--------------------------------------------------------------+---------------------+
 | 23 | test user   | 2000001111 | 1234                                                         | 2021-10-15 14:19:17 |
 | 24 | 211015User2 | 2001112234 | $2b$08$lXHyNYavVlyr71UyREC54eppxSfTZGq41by4o9VeeqFfmE8oETJbO | 2021-10-15 14:47:18 |
 | 25 | 오삼핵      | 2176032332 | $2b$08$B85JF1HCTvsYcGvZlFuG2OXlBNvascx6sD/La/k1x.VxO35whIa1i | 2021-10-15 14:50:49 |
 | 26 | 211012User  | 2012341234 | $2b$08$8OBxs8J3Qu9VKyno4KltXuVykBIOYUgX0Apf9NXdECF4cWt4XzVuC | 2021-10-16 07:53:41 |
 +----+-------------+------------+--------------------------------------------------------------+---------------------+
 ```

 - Upload Table
   - uploader_d_num : 업로드 유저의 군번
   - img_id : 유저 업로드 img id
   - upload_time : img 업로드 TimeStamp
 ```
 mysql> desc upload_t;
 +----------------+-------------+------+-----+-------------------+-------+
 | Field          | Type        | Null | Key | Default           | Extra |
 +----------------+-------------+------+-----+-------------------+-------+
 | uploader_d_num | varchar(10) | NO   | MUL | NULL              |       |
 | img_id         | varchar(30) | NO   | PRI | NULL              |       |
 | upload_time    | datetime    | YES  |     | CURRENT_TIMESTAMP |       |
 +----------------+-------------+------+-----+-------------------+-------+

 mysql> select * from upload_t;
 +----------------+-----------------------+---------------------+
 | uploader_d_num | img_id                | upload_time         |
 +----------------+-----------------------+---------------------+
 | 2176000528     | decoded_1634309470576 | 2021-10-15 14:51:10 |
 | 2176000528     | decoded_1634309639604 | 2021-10-15 14:53:59 |
 | 2176000528     | decoded_1634309884641 | 2021-10-15 14:58:04 |
 | 2176000528     | decoded_1634310044242 | 2021-10-15 15:00:44 |
 | 2001112234     | decoded_1634370069825 | 2021-10-16 07:41:09 |
 | 2001112234     | decoded_1634370191443 | 2021-10-16 07:43:11 |
 +----------------+-----------------------+---------------------+
 ```

 ***

  *img - Images Handling*

  **POST /img/upload**
  > parameters: {"img_binary":"base64 encoded string","d_num":"string"}   
  > status: 200 -> 204 or 205로 변경 고려   
  > respose: {"status":200,"imd_id":img_id,"user_d_num":d_num}

  **GET /img/output-params/:img_id/:d_num**
  > parameters: {"name": "string", "d_num":"string", "password": "string"}   
  > status: 200   
  > respose: {"status":201,"user_name":name,"msg":'User Created Successful'}
 </details>
 
### Front-end
<table>
 <tr>
  <td align='center'><img src='https://velog.velcdn.com/images/c_10/post/eb16ac48-e413-4fd5-aa9b-ba06f553c4db/image.png' height=80></td>
  <td align='center'><img src='https://blog.kakaocdn.net/dn/bxKpyX/btrhh6XUeBq/sLUMc9vyF6semdllCQJvlK/img.jpg' height=80></td>
 </tr>
 <tr>
  <td align='center'>React JS</td>
  <td align='center'>Bootstrap</td>
 </tr>
</table>
<details>
 <summary>Front-end Description</summary>
 내용채우는중
- [`url_launcher: ^6.0.12`](https://pub.dev/packages/url_launcher)
</details>



### Blockchain
 <table>
 <tr>
  <td><a href="https://solidity-kr.readthedocs.io/ko/latest/"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/1200px-Solidity_logo.svg.png' height=80></a></td>
  <td><a href="https://ko.docs.klaytn.foundation/"><img src='https://cdn-images-1.medium.com/max/1200/1*3tSS6q_D-lyttNdlRwqoQw.png' height=80></a></td>
  <td><a href="https://trufflesuite.com/"><img src='https://trufflesuite.com/assets/logo.png' height=80></a></td>
  <td><a href="https://remix.ethereum.org/"><img src='https://repository-images.githubusercontent.com/59065830/b62be480-45d2-11ea-9989-803db0f9c44d' height=80></a></td>
  
 </tr>
 <tr>
  <td align='center'>Solidity</td>
  <td align='center'>Klaytn Network</td>
  <td align='center'>Truffle for(Deploy) 할 예정</td>
  <td align='center'>Remix IDE</td>
 </tr>
 </table>
 <details>
 <summary>📝Blockchain Description</summary>
 
### Why Klaytn?

- 풍부한 한국어 Documentations
   국내 기업 GroundX가 개발한 블록체인 네트워크로,
   한국어로 잘 정리된 Documentations과 Tutorials
   그리고 활성화되어 있는 포럼 및 커뮤니티를 통해 수월한 개발이 가능했습니다.
  
- Remix 및 Metamask와의 연동성
  Smart Contract의 작성, 테스트 및 배포에
  용이한 Remix IDE와 Metamask에서
  Klaytn Network와의 연동 환경 제공
  
- 빠른 속도
 이전 세대 EVM 계열의 네트워크 보다 
 빠른 TX 속도와 저렴한 TX 수수료
 
# Smart Contract Docs
 ## Structures
  ### Certificate
 - 헌혈증명서 structure로 사용자의 헌혈을 증명할 기본적인 상세정보를 담는다.
 ```bash
     struct Certificate {
        string name;
        string id;
        string bloodType;
        string home_address;
        string certificateNum;
        string donateType;
        uint date; // UNIX Time
    }
 ```
 
 ### Donation Certificate
 - 사용자가 기부로 받은 즉 거래를 할 수 없는 헌혈증서로 간단한 정보만을 담는다.
 ```bash
     struct DonationCertificate {
        address donate_to;
        uint date;
        uint256 donate_count;
    }
 ```
 
 ## Modifiers
 ### checkDepartment
  - 사용자의 소속을 구분하여 alert
 
 ### checkAdmin
  - 사용자 Admin Check
 
---
</details>
## 💽설치 안내 (Installation Process)
  
  #### 🩸**Canary Web Deployment**
  ```bash
  git clone https://github.com/giirafe/paran_bloodchain.git
  sudo apt-get update
  sudo apt-get install npm 
  cd paran_blockchain
  npm install
  cd frontend
  npm run start
  ```
  
  #### **Remix IDE사용 스마트 컨트랙트 Deployment 시**
  ```bash
  pragma solidity >= 0.7.0 <=0.9.0 사이 버젼 Compiler 사용
  ```
  

---

## 📱프로젝트 사용법 (Getting Started)
<!--
**마크다운 문법을 이용하여 자유롭게 기재**

잘 모를 경우
구글 검색 - 마크다운 문법
[https://post.naver.com/viewer/postView.nhn?volumeNo=24627214&memberNo=42458017](https://post.naver.com/viewer/postView.nhn?volumeNo=24627214&memberNo=42458017)

 편한 마크다운 에디터를 찾아서 사용
 샘플 에디터 [https://stackedit.io/app#](https://stackedit.io/app#)
-->

---

## 📈프로젝트 전망

- 헌혈 마이데이터 관리

헌혈자는 본 서비스를 활용함으로써 자신의 헌혈 기록을 마이데이터로 관리할 수 있습니다. 또한, 헌혈자는 본인의 헌혈 데이터를 헌혈증서 기부나 헌혈 공가 사용에 이용할 수 있으며, 자신의 헌혈 기록이 시각적으로 보이기 때문에 헌혈 동기 부여에도 도움을 줄 것이라고 생각합니다. 

- 간편한 헌혈증서 기부 절차

기존의 헌혈증서 기부 절차는 대면 기부와 우편 기부로 이루어지고 있었습니다. 이에 헌혈자는 헌혈증서를 기부하는데 있어서 불편함을 느끼고 있습니다. 따라서 헌혈자는 본 서비스를 활용함으로써 헌혈 커뮤니티를 통해 본인의 헌혈증서를 간편하게 온라인으로 기부할 수 있어 헌혈증서 기부 활성화에 도움을 줄 것이라고 생각합니다. 

- 헌혈 공가제도 활성화

현재 대한민국의 헌혈 인구 구조는 20대~30대에 편중되어 있습니다. 40대~50대의 헌혈률을 높이기 위한 방법 중 헌혈 공가제도를 활성화할 수 있는 인프라를 제공하여 편중된 헌혈 인구 구조를 개선하고 회사원들의 헌혈 활성화에 도움을 줄 것이라고 생각합니다. 

### 🍎개선할 점

- 로그인 절차 간소화

본 서비스에서는 헌혈자, 대한적십자사, 기관(회사)로 사용자가 나누어져 있습니다. 각 사용자들은 본인의 개인키를 이용해 로그인을 하는데 개인키의 길이가 너무 길기 때문에 로그인할 때 불편함이 존재합니다. 따라서 메타마스크와 같은 암호화폐 지갑을 사용하여 로그인 절차를 간소화할 예정입니다. 

- 웹 페이지 UI

현재 웹 페이지 UI는 사용자 친화적이지 않습니다. 특히 헌혈증서 커뮤니티의 UI를 기부자와 피기부자가 이용하기 편리하도록 개선할 필요가 있습니다. 

- 어플리케이션 개발

P:LOW 서비스는 웹 페이지로 개발되었습니다. 헌혈자는 헌혈을 하고 나와 보통 핸드폰의 어플리케이션을 이용하기 때문에 P:LOW 서비스 어플리케이션을 개발하여 헌혈자가 보다 이용하기 편하도록 할 예정입니다. 


---

## 🕋팀 정보 (Team Information)

과학 기술이 발전해도 사람의 혈액을 대체할 수 있는 것은 발명되지 않았습니다.  
피를 나누는 것은 생명을 살리는 고귀한 행동이며 가치 있는 일입니다.  
저희는 **헌혈 활성화**라는 공공의 이익을 위해 뭉쳤습니다.  

안녕하십니까, 헌혈로 세상의 가치를 잇다.  
저희는 블러드 체인팀입니다. 

<table>
 <tr>
  <td></td>
  <td>Name</td>
  <td>Role</td>
  <td>github</td>
  <td>e-mail</td>
 </tr>
   
 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/76638529?v=4" width="50" height="50"></td>
  <td align='center'>June Seo</td>
  <td align='center'>Back-End / Smart Contract</td>
  <td align='center'><a href="https://github.com/giirafe"><img src="http://img.shields.io/badge/giirafe-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:seojune408@gmail.com"><img src="https://img.shields.io/badge/seojune408@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>
 
 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/96776691?v=4" width="50" height="50"></td>
  <td align='center'>CheonHa Kim</td>
  <td align='center'>Back-End</td>
  <td align='center'><a href="https://github.com/KimUnderTheSky"><img src="http://img.shields.io/badge/KimUnderTheSky-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:fbgmlwo123@naver.com"><img src="https://img.shields.io/badge/fbgmlwo123@naver.com-green?logo=gmail&style=social"/></a></td>
 </tr>

 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/87919319?v=4" width="50" height="50"></td>
  <td align='center'>SeongWoo Park</td>
  <td align='center'>Front-End / Design</td>
  <td align='center'><a href="https://github.com/ssongssong00"><img src="http://img.shields.io/badge/ssongssong00-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:seongwoo1205@gmail.com"><img src="https://img.shields.io/badge/seongwoo1205@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>

 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/35412648?v=4" width="50" height="50"></td>
  <td align='center'>Juyeon Lee</td>
  <td align='center'>Front-End</td>
  <td align='center'><a href="https://github.com/zheedong"><img src="http://img.shields.io/badge/zheedong-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:zheedong@gmail.com"><img src="https://img.shields.io/badge/zheedong@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>
</table>

---

## 개발 및 협업 플랫폼

<table>
 <tr>
  <td align='center'><a href="https://github.com/"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height=80/></a></td>
  <td align='center'><a href="https://meet.google.com/"><img src="https://user-images.githubusercontent.com/86545225/137439170-9500c5b2-c47a-4ecc-b588-8c0b14e0eb3b.png" height=80/></a></td>
   <td align='center'><a href="https://www.notion.so/ko-kr"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" height=80/></a></td>
 </tr>
 
 <tr>
  <td align='center'>Github</td>
  <td align='center'>Google meet</td>
  <td align='center'>Notion</td>
 </tr>
 
 <tr>
  <td align='center'><a href="https://aws.amazon.com/ko/free/?trk=fa2d6ba3-df80-4d24-a453-bf30ad163af9&sc_channel=ps&s_kwcid=AL!4422!3!563761819834!e!!g!!aws&ef_id=CjwKCAjw5dqgBhBNEiwA7PryaHEPioZu9x8OMoL3DTT7vpN6G6sPP5QORNgE_ajU3-1qu1C3FSKctxoCMqwQAvD_BwE:G:s&s_kwcid=AL!4422!3!563761819834!e!!g!!aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"><img src="https://images.velog.io/images/nari120/post/b14b4105-a561-4cc3-bc9f-87a5ee4eb1b6/aws.png" height=80/></a></td>
  <td align='center'><a href="https://slack.com/"><img src="https://user-images.githubusercontent.com/86545225/137576768-7b07ae82-ea9c-4768-ac5b-5d1f854a2815.jpg" height=80/></a></td>
  <td align='center'><a href="https://zoom.us/"><img src="https://user-images.githubusercontent.com/86545225/137440645-636a8078-208b-4542-bbfd-2823f0572e1c.png" height=80/></a></td>
 </tr>
 
 <tr>
  <td align='center'>AWS</td>
  <td align='center'>Slack</td>
  <td align='center'>Zoom</td>
 </tr>

   
</table>
 


## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [GNU GPL v3](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/blob/main/LICENSE)

This project is licensed under the terms of the GNU GPLv3 license.
  
  ### GPL 선택이유
