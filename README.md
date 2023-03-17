# ❣️ PLOW : 블록체인 기반 전자 헌혈 플랫폼

<p align='center'>
<br>
 <img src='https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo'>
 <a href='https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/blob/main/LICENSE'><img src='https://img.shields.io/badge/License-GNU GPL v3.0-blue?style=for-the-badge&logo'></a>
<div align="center">
  <a href="https://www.youtube.com/watch?v=hz3nOc_vhxk"><img src="https://img.youtube.com/vi/hz3nOc_vhxk/0.jpg" alt="유투브 영상"></a>
</div>

</p>

## 위 사진을 클릭하시면 유투브를 통해 시연영상(현재는 중간 교류회 발표 영상)을 확인하실 수 있습니다.  👆
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

<details>
 <summary>🖊개발 문서</summary>

- [Github wiki home](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki)
- [DesignThinking](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/DesignThinking)
- [UX UI](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/UX-UI)
- [개발 일지-AI](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/AI)
- [개발 일지-BackEnd](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/%EB%B0%B1%EC%97%94%EB%93%9C)
- [개발 일지-FrontEnd](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C)
- [개발 일지-Instagra chatbot](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/SNS-Bot)
- [개발 타임라인](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/%EA%B0%9C%EB%B0%9C-%ED%83%80%EC%9E%84%EB%9D%BC%EC%9D%B8)
- [멘토링 일지](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/%EB%A9%98%ED%86%A0%EB%A7%81-%EC%9D%BC%EC%A7%80)
- [회의록](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/wiki/%ED%86%B5%ED%95%A9-%ED%9A%8C%EC%9D%98%EB%A1%9D)


</details>


## 📔기능 설명

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

 ### 🐤**Canary app**

 앱을 처음 실행 시, 사용자는 자신의 성명과 군번을 통해 회원가입을 진행합니다. 이 정보는 암호화되어 저장됩니다.  

 <table>
  <tr>
   <td><img src="https://user-images.githubusercontent.com/86545225/137917096-372ec2f3-60ab-4e49-ab98-cb87ca96aa88.PNG" width="200"/></td>
   <td><img src="https://user-images.githubusercontent.com/86545225/137917134-a9d63375-3663-467a-8ea3-2d5a92950085.PNG" width="200"/></td>
   <td><img src="https://user-images.githubusercontent.com/86545225/137917151-8ddf28a4-6ab6-4ea9-ad38-fcdaf1df0d5c.PNG" width="200"/></td>
  </tr>
 </table>

 - 카메라 모드: 군 내부에서도 사용 가능한 카메라입니다. 촬영한 사진 안의 보안 위반 요소를 식별 후 모자이크 처리하여 반환합니다.

   사용자가 찍은 사진은 스마트폰에 바로 저장되지 않고 서버에 전송되어, 보안 위반 요소를 식별 후 적절한 강도로 모자이크 처리하여 반환됩니다.

 - 갤러리 모드: 갤러리에 이미 저장된 사진을 모자이크 할 필요가 있을 시, 해당 사진을 업로드하여 카메라로 촬영할 때와 동일하게 모자이크 처리를 할 수 있습니다.  
 
 <table>
  <tr>
   <td><img src="https://user-images.githubusercontent.com/86545225/137917734-1f88e1c0-5f2f-4f2e-a7f5-d3ddb3019b81.png" width="200"/></td>
   <td><img src="https://user-images.githubusercontent.com/86545225/137917171-afe0567c-4cc5-4bf7-84dd-862c1cec4819.PNG" width="200"/></td>
  </tr>
 <table>
 

 보안 위반 요소는 사용자의 소속 부대 및 위치 식별 가능 여부, 기밀 유출 가능 여부 등을 고려하여 다음과 같이 선정하였습니다.
 >총(소총, 리볼버), 방탄조끼, 부대마크, 모니터, 노트북, 서류, 표지판, 포, 차량, 탱크, 군용 비행기, 미사일, 항공모함  

 군복의 경우 촬영 당시 맥락에 따라 보안 여부가 달라지므로 모자이크 처리는 하지 않되 사용자가 검출 여부를 인지할 수 있게 합니다.  
 
 처리된 사진이 반환될 때, 검출된 객체에 따라 발생할 수 있는 상황에 대한 경고문을 전송합니다. 반환된 사진을 터치하면 확인할 수 있습니다.  
 또한, 회원가입 시 입력한 군번을 암호화한 값을 이용해 만든 QR코드가 사진에 추가됩니다. 이를 이용하여 사진 처리자의 신원을 파악하거나 이미지 처리 여부를 눈으로 식별할 수 있습니다.  
 <table>
  <tr>
   <td><img src="https://user-images.githubusercontent.com/86545225/137919288-c90a06c7-c843-407f-ba5e-aed914cf3fd5.PNG" width="200"/></td>
   <td><img src="https://user-images.githubusercontent.com/86545225/137919350-567523d8-255e-466a-a834-12014eeb4679.PNG" width="200"/></td>
  </tr>
 
  <tr>
   <td><img src="https://user-images.githubusercontent.com/86545225/137919337-f2109767-9daa-427d-85f7-2dad831202db.png" width="200"/></td>
   <td><img src="https://user-images.githubusercontent.com/86545225/137919583-8a2fd884-c0c3-4bfb-8099-aeb03b7ce081.png" width="200"/></td>
   <td><img src="https://user-images.githubusercontent.com/86545225/137919328-6390d7ea-207c-49c9-a0b8-97c4eab44d47.PNG" width="200"/></td>
  </tr>
 <table>

 ### 🐤**Admin Server**

 Canary app의 사용 log를 보고와 model, dataset version관리를 할 수 있는 API Server입니다.  
 node js에서도 해당 기능을 쓰는 만큼 여러 플랫폼에서 접근 가능하도록 REST API Server로 구성했습니다.
 
 <p align='center'><img src="https://user-images.githubusercontent.com/40621030/137884075-bed5c980-72db-472e-820d-6754080d704c.PNG" height="250"/></p>
 Canary app 사용 날짜와 사용자 id, 이미지에서 검출된 객체에 대한 기록이 남습니다.
 
 <p align='center'><img src="https://user-images.githubusercontent.com/40621030/137884362-a8e7f87f-167c-4294-ba99-07ebadb3d6e2.PNG" height="250"/></p>
 성능이 가장 좋은 모델의 weight 주소를 조회하여 canary server의 모델을 최신모델로 업데이트 할 수 있습니다.
 
 Django를 사용했기 때문에 Django admin 또한 사용할 수 있습니다.
 <p align='center'><img src="https://user-images.githubusercontent.com/86545225/137576790-1e7b5459-fdbd-4cc8-9e3b-d27a3bd3b1b4.jpg" height="250"/></p>


 ### 🐤**Canary in instagram**

 <p align='center'><img src="https://user-images.githubusercontent.com/35412648/137631605-571bf913-a365-408c-9469-8e16ce806443.PNG"/></p>

 주요 sns 중 하나인 인스타그램 사용자의 보안 위반 여부를 탐지하고, 사용자에게 direct message로 경고해줍니다.  

 Canary app에서 사용되는 동일한 model로 위협 요소를 탐지하고, 처리된 사진과 경고문을 DM으로 보냅니다.  

 비동기적 처리를 통해 동시에 여러 Request가 들어와도 대응할 수 있게 개발되었습니다.

 현재 지원되는 검사 기능은 게시물 검사와 스토리 검사입니다.
 
 ### 지원하는 기능
 * 도움 (또는 Help)
 > 1. 사용자에게 사용법을 DM으로 안내합니다.
 * 게시물 검사하기
 > 1. Canary가 사용자가 올린 Post 중, 검사 되지 않은 가장 최근 3개를 검사합니다.
 > 2. 검사가 완료되면 적절히 모자이크 된 이미지와 경고 문구를 DM으로 보내줍니다. + Canary가 해당 Post를 Like 합니다.
 * 스토리 검사하기
 > 1. Canary가 사용자의 Story 중, osam_canary가 태그 된 story를 검사합니다.
 > 2. 검사가 완료되면 적절히 모자이크 된 이미지와 경고 문구를 DM으로 보내줍니다.


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
 
### 사용 데이터셋
 
### Version 1: [ImageNet Object Localization Challenge](https://www.kaggle.com/c/imagenet-object-localization-challenge)  
 <p align='center'><img src='https://user-images.githubusercontent.com/40621030/137607638-124c1622-6bfe-4a45-a16b-519314916436.jpg' width="500"/></p>  
 
 **문제점**  
 
 1. 데이터 수 부족
 2. 대다수 물체가 정중앙 위치
 3. 대다수 물체가 사진 전체를 차지
 
 **해결방안 1 - 데이터 추가**
 
 <table>
  <tr>
   <td align='center'>Orignal Dataset</td>
   <td align='center'>Add more data</td>
  </tr>
  <tr>
   <td align='center'><img src='https://user-images.githubusercontent.com/40621030/137607638-124c1622-6bfe-4a45-a16b-519314916436.jpg' width="500"/></td>
   <td align='center'><img src='https://user-images.githubusercontent.com/40621030/137607640-9552448f-a39c-4a46-9d50-a523002be0e4.jpg' width="500"/></td>
  </tr>
 </table>
 
 **해결방안 2, 3 - augmentation 방법 변경**  
 
 <table>
  <tr>
   <td align='center'>기존</td>
   <td align='center'>변경</td>
  </tr>
  <tr>
   <td align='center'><img src='https://user-images.githubusercontent.com/40621030/137607771-6509a1f3-872a-4bfd-ac0f-389e7dcd8fdc.jpeg' width="500"/></td>
   <td align='center'><img src='https://user-images.githubusercontent.com/40621030/137607774-68692b66-5324-4184-ba9a-e41151a6a561.jpeg' width="500"/></td>
  </tr>
 </table>
 
 ### 사용 모델
YOLOv5, Efficientnet, SSGlite 등의 모델들을 고려.  
성능과 학습에 들어가는 시간 등을 종합적으로 판단 --> YOLOv5 결정.
(Efficientnet: 학습 시간이 지나치게 많이 소요, SSGlite: YOLOv5보다 낮은 성능)

 - YOLOv5 ([original github](https://github.com/ultralytics/yolov5))  
<p align='center'><img src='https://user-images.githubusercontent.com/40621030/136682963-80100da0-c31c-4df4-8bff-583e1c1c62f1.png' width="500"/></p>

 **문제점**  
 
 <p align='center'><img src='https://user-images.githubusercontent.com/26833433/136901921-abcfcd9d-f978-4942-9b97-0e3f202907df.png' width="500"/></p>  
 

 1. 낮은 성능
 2. 무거운 모델 (ex. yolov5l6)
 
 **해결방안**  
 
 - knowledge distillation ([paper link](https://arxiv.org/abs/1906.03609)) 
   <p align='center'><img src='https://user-images.githubusercontent.com/40621030/136683028-fb1ca2f0-97c0-4581-9b7a-64e26536d7af.png' width="500"/></p>  
 
 ### 성능 향상 
 |          enhance       |   model  | precision | recall | mAP_0.5 | mAP_0.5:0.95 |
 |:----------------------:|:--------:|:---------:|:------:|:-------:|:------------:|
 |   Before add dataset   | yolov5m6 |   0.602   |  0.651 |  0.671  |     0.535    |  
 |   None (Add dataset)   | yolov5m6 |   0.736   |  0.779 |  0.815  |     0.599    |  
 |      mosaic_9 50%      | yolov5m6 |   0.756   |  0.775 |  0.809  |     0.602    |
 |      mosaic_9 100%     | yolov5m6 |   0.739   |  0.813 |  0.806  |     0.594    |
 | knowledge distillation | yolov5m6 |   0.722   |  0.822 |  0.807  |     0.592    |
 
 <table>
  <tr>
   <td align='center'>Original Image</td>
   <td align='center'>Result Image</td>
  </tr>
  <tr>
   <td align='center'><img src='https://user-images.githubusercontent.com/40621030/136698553-a00eb618-7783-41d9-bd2c-203dbbd60946.jpg' width="500"/></td>
   <td align='center'><img src='https://user-images.githubusercontent.com/40621030/136698552-42c71108-9efc-4c88-a68a-3f5aec8452c6.jpg' width="500"/></td>
  </tr>
 </table>
 
 ### 실행 및 예시 ([link](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/tree/main/AI(BE)/deeplearning/kwoledge_distillation_yolov5))
</details>

---

## 💽설치 안내 (Installation Process)
### Flutter

#### 웹앱으로 설치하기
```bash 
 git clone https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary.git
 cd AI_APP_WEB_Canary_Canary/APP/myApp
 flutter run -d web-server --web-hostname=0.0.0.0
 ```
#### 안드로이드 apk 설치하기

[apk 파일 링크](https://drive.google.com/file/d/1HYsxGjHF1yBPuWPqCFXf7m7QLAFRb6hg/view?usp=sharing)  
위의 링크에 들어가셔서 다운로드 후 설치하시면 됩니다.
 
### Node js
#### AI를 이용하여 이미지를 처리하기 위해, AI(BE)의 requirements가 충족된 상태에서 Node 서버를 구동해야 합니다.
```bash
cd node_server
npm install # 통해 필요한 패키지들 다운로드
node app.js # (일회성 시행)
```


### Deep learning
 
 ```bash
 git clone https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/
 cd AI_APP_WEB_Canary_Canary/'AI(BE)'/deeplearning/kwoledge_distillation_yolov5/
 pip install -r requirements.txt
 ```

### MLOps
  ```bash
  git clone https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/
  cd AI_APP_WEB_Canary_Canary/'AI(BE)'/
  pip install -r requirements.txt
  python manage.py createsuperuser
  python manage.py migrate
  python manage.py runserver 0.0.0.0:8080
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
  #### 🐤**Canary app**
  1. 웹앱 혹은 APK를 설치하여 앱에 접속한다
  2. 3초 간의 Splash 화면 이후 홈화면에 접속한다.
  3. go버튼을 누르면 사진 처리를 위한 로그인 화면으로, help버튼을 누르면 해당 github repository로 접속한다.
  4. 로그인 창에서 올바른 정보를 입력하고 go버튼을 누르면 option page로, '회원가입 하러가기'버튼을 누르면 회원가입 창으로 넘어간다
  5. 회원가입 창에서 올바른 정보를 입력하고 가입완료 버튼을 누르면 다시 로그인 창으로 돌아온다
  6. option창에서는 갤러리에서 사진을 가져와 처리할 수 있는 Gallery버튼과 카메라로 바로 찍은 사진을 처리하는 Camera 버튼 중에 하나를 선택하면 된다.
  7. 이미지를 고르거나 찍은 후, post server 버튼을 누르면 loading 화면으로 넘어간다.
  8. loading 화면에서 이미지 처리가 완료되면 '결과 보러가기' 버튼이 등장하고, 그 버튼을 누르면 처리된 이미지를 확인 가능한 창으로 넘어간다.
  9. 보안위반 가능성이 모자이크 처리된 이미지를 클릭하면 그에 관련된 경고문을 확인할 수 있다.
  10. 처리된 이미지를 저장하기 위해선 'save' 버튼을 누르면 된다.
  11. save 버튼을 누르면 사용자의 암호화된 군번 값을 이용해 처리된 QRcode가 이미지에 삽입되고, 그 사진을 꾹 누르면 저장여부를 묻는 알림창이 뜬다.
  12. 다시 기능을 사용하기 위해선 'Try Again' 버튼을 누르면 된다.
  
  [시연 영상](https://youtu.be/MTlwTyfn_xI)
  
  #### 🐤**Admin logweb**
  ```bash
  git clone https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/
  cd AI_APP_WEB_Canary_Canary/'AI(BE)'/
  pip install -r requirements.txt
  python manage.py migrate
  python manage.py createsuperuser
  python manage.py runserver 0.0.0.0:8080
  ```
  [API문서](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/tree/main/AI(BE)##API) 참고
  
  #### 🐤**Canary in instagram**
  ##### 시작하기 전에
  instagram에서 'osam_canary'를 follow 한 후, 명령어를 Direct Message로 보낸다
  ##### 지원 명령어
  1. 게시물 검사 명령어(최대 3개씩) : 게시물 검사하기
  2. 스토리 검사 명령어 : 스토리 검사하기  
  > 2.1 스토리 검사 시 주의 사항 : @osam_canary 계정을 스토리에 태그해주세요!  
  > 2.2 스토리는 한 번에 최대 10개 검사 가능  
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


### 💡발전 가능 방향

---

## 🕋팀 정보 (Team Information)

**왜** 군인들은 카메라를 자유롭게 쓰지 못 할까?  
언제부턴가 들었던 이 의문이 해커톤 경험조차 없는 육군 및 국직부대 병사 6명을 모이게 했습니다.  
군인들의 자유로운 카메라 사용과, 흔들리지 않는 국가 보안을 위해.

안녕하십니까, Team Canary입니다.  

<table>
 <tr>
  <td></td>
  <td>Name</td>
  <td>Role</td>
  <td>github</td>
  <td>e-mail</td>
 </tr>
   
 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/86545225?v=4" width="50" height="50"></td>
  <td align='center'>Jaeyo Shin</td>
  <td align='center'>Leader / Deep Learning (Pytorch)</td>
  <td align='center'><a href="https://github.com/j-mayo"><img src="http://img.shields.io/badge/j_mayo-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:tlswody5110@naver.com"><img src="https://img.shields.io/badge/tlswody5110@naver.com-green?logo=gmail&style=social"/></a></td>
 </tr>

 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/76638529?v=4" width="50" height="50"></td>
  <td align='center'>June Seo</td>
  <td align='center'>Back-End (node.js)</td>
  <td align='center'><a href="https://github.com/giirafe"><img src="http://img.shields.io/badge/giirafe-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:seojune408@gmail.com"><img src="https://img.shields.io/badge/seojune408@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>
 
 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/54922625?v=4" width="50" height="50"></td>
  <td align='center'>Huijae Ryu</td>
  <td align='center'>Front-End (Flutter)</td>
  <td align='center'><a href="https://github.com/hellohidi"><img src="http://img.shields.io/badge/hellohidi-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:fbgmlwo123@naver.com"><img src="https://img.shields.io/badge/fbgmlwo123@naver.com-green?logo=gmail&style=social"/></a></td>
 </tr>

 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/62923434?v=4" width="50" height="50"></td>
  <td align='center'>Chanho Jung</td>
  <td align='center'>Deep Learning (Pytorch)</td>
  <td align='center'><a href="https://github.com/chjung99"><img src="http://img.shields.io/badge/chjung99-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:cksgh1168@gmail.com"><img src="https://img.shields.io/badge/cksgh1168@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>

 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/35412648?v=4" width="50" height="50"></td>
  <td align='center'>Donghwan Chi</td>
  <td align='center'>Deep Learning (Pytorch)</td>
  <td align='center'><a href="https://github.com/zheedong"><img src="http://img.shields.io/badge/zheedong-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:zheedong@gmail.com"><img src="https://img.shields.io/badge/zheedong@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>
   
 <tr>
  <td align='center'><img src="https://avatars.githubusercontent.com/u/40621030?v=4" width="50" height="50"></td>
  <td align='center'>Wonbeom Jang</td>
  <td align='center'>Deep Learning (Pytorch)<br>MLOps (Django)</td>
  <td align='center'><a href="https://github.com/wonbeomjang"><img src="http://img.shields.io/badge/wonbeomjang-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:jtiger958@gmail.com"><img src="https://img.shields.io/badge/jtiger958@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>
</table>

---

## 개발 및 협업 플랫폼

<table>
 <tr>
  <td align='center'><a href="https://azure.microsoft.com/ko-kr/services/machine-learning/"><img src="https://raw.githubusercontent.com/github/explore/eaef8552d8b082ffafe2bfc8a5023d47da904aac/topics/azure/azure.png" height=80/></a></td>
  <td align='center'><a href="https://github.com/"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height=80/></a></td>
  <td align='center'><a href="https://meet.google.com/"><img src="https://user-images.githubusercontent.com/86545225/137439170-9500c5b2-c47a-4ecc-b588-8c0b14e0eb3b.png" height=80/></a></td>
 </tr>
 
 <tr>
  <td align='center'>Azure ML Studio</td>
  <td align='center'>Github</td>
  <td align='center'>Google meet</td>
 </tr>
 
 <tr>
  <td align='center'><a href="https://ide.goorm.io/"><img src="https://user-images.githubusercontent.com/86545225/137440873-5d17c954-2db2-44bd-8c7c-a0795b7ff49b.jpg" height=80/></a></td>
  <td align='center'><a href="https://slack.com/"><img src="https://user-images.githubusercontent.com/86545225/137576768-7b07ae82-ea9c-4768-ac5b-5d1f854a2815.jpg" height=80/></a></td>
  <td align='center'><a href="https://zoom.us/"><img src="https://user-images.githubusercontent.com/86545225/137440645-636a8078-208b-4542-bbfd-2823f0572e1c.png" height=80/></a></td>
  <td align='center'><a href="https://flutlab.io/"><img src="https://img2.apkgit.com/79/com.codegemz.flutlab.installer/1.0.3/icon.png" height=80/></a></td>
 </tr>
 
 <tr>
  <td align='center'>GoormIDE</td>
  <td align='center'>Slack</td>
  <td align='center'>Zoom></td>
  <td align='center'>FlutLab</td>
 </tr>

   
</table>
 


## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [GNU GPL v3](https://github.com/osamhack2021/AI_APP_WEB_Canary_Canary/blob/main/LICENSE)

This project is licensed under the terms of the GNU GPLv3 license.
  
  ### GPL 선택이유
  카나리아가 쓴 오픈소스 중 [yolov5](https://github.com/ultralytics/yolov5/)와 [Distilling-Object-Detectors](https://github.com/twangnh/Distilling-Object-Detectors/)가 있습니다.
  이들은 각각 GNU GPL, MIT 라이센스를 쓰고 있습니다.
  MIT 라이센스는 상업적이용, 소스코드 공개의무에서 자유로우나, GNU GPL 라이센스는 코드의 상업적으로 이용 가능하나 변경된 프로그램 역시 소스코드를 공개해야합니다.
  따라서 '카나리아'는 GNU GPL이 더 강력한 라이센스이기 때문에 GNU GPL 라이센스를 따르기로 했습니다.
