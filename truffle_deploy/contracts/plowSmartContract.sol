// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.7.0 <=0.9.0;
// pragma experimental ABIEncoderV2;
// evm version : byzantium

// 기존 구조 변경해서 ( account => 구조체 리스트 매핑 ) ( Certificate Struct )

contract plowSmartContract {

    // string public contract_function = "P:LOW Minting Contract";

    address deployerAddress;

    constructor(){
        deployerAddress = msg.sender;
    }

    //증명서 구조체
    struct Certificate {
        string name;
        string id;
        string bloodType;
        string home_address;
        string certificateNum;
        string donateType;
        uint date; // UNIX Time => 한국 시간대로 백엔드에서 변환하여 프론트엔드 송출
    }
    
    struct DonationCertificate {
        address donate_to;
        uint date;
        uint256 donate_count;
    }

    modifier checkDepartment(address _userAddress){
        if(msg.sender == _userAddress){
            require(userDepartment[_userAddress]>0,"Msg Sender's Department Not Set(from modifier)");
        } else{
            require(userDepartment[_userAddress]>0,"User Department Not Set(from modifier)");
        }
        _;
    }

    modifier checkAdmin(address _userAddress){
        require(_userAddress == deployerAddress,"Msg Sender is Not a Deployer");
        _;
    }

    // certificateNum table
    mapping(uint256 => address) public certificateOwner;
    
    // mapping(address => uint256[]) private _ownedTokens;

    // test용으로 테이블 private => public으로 일시 변경
    mapping(address => Certificate[]) public ownedCerts;
    // 공인 헌혈 기관 전자 헌혈 증명서 발급 기록
    mapping(address => Certificate[]) private departmentMintedRecord;
    // 일반 기업 헌혈 증명서 조회기록
    mapping(address => address[]) private inquiryRecord; 
    // 유저 간 기부 내역
    mapping(address => DonationCertificate[]) private DonationRecord;
    // 헌혈기관 인증 여부 table
    mapping(address => uint) private userDepartment;

    // 일반 유저 code : 1
    // 일반 기업 code : 2
    // 공인된 헌혈기관 code : 3

    function setDepartmentInternal(address _userAddress,uint256 _department) public {
        userDepartment[_userAddress] = _department;
    }

    // event for setDeparment
    event setDepartmentError(string _errMsg, uint256 _department);

    // 백엔드에서는 해당 function setDepartment 통해 사용자의 소속을 설정한다.
        // if true 면 => 성공적인 회원가입
    // Account의 Validation은 lower layer에서 실행되기에 스마트 컨트랙트에서 따로 해줄 필요가 없음.
    // 일반 setDepartment는 자신의 department만 set 하게끔
    function setDepartment(uint256 _department) public returns(bool){
        try this.setDepartmentInternal(msg.sender,_department){ // this를 통해 내부 함수 불러옴
            return(true);
        } catch {
            emit setDepartmentError("Failed To Set Department", _department); // Solidity에서 print의 기능을 담당하는 emit(with event)
            return (false);
        }
    }

    // Admin의 함수로 이후 constructor로 권한 지정하여 타인의 department 설정
    // 실제 배포 전 
    function AdminSetDepartment(address _userAddress, uint256 _department) public returns(bool){
        try this.setDepartmentInternal(_userAddress,_department){ // this를 통해 내부 함수 불러옴
            return(true);
        } catch {
            emit setDepartmentError("Failed To Set Department", _department); 
            return (false);
        }
    }

    // get Department Number
    function getDepartment(address _userAddress) public checkDepartment( _userAddress ) view returns(uint){
        uint departmentNum = userDepartment[_userAddress];
        return departmentNum;
    }

    // certificate struct instance 생성
    Certificate dummyCert_struct;

    // returning Structure is Experimental
    function createCertificate(
        string memory _name, 
        string memory _id, 
        string memory _bloodType, 
        string memory _home_address,
        string memory _certificateNum,
        string memory _donateType) public returns(bool) {
        //require로 발행 권한을 대한적십자사로 지정해줘야함
        // msg.sender == 공인 헌혈기관 리스트에 존재 여부
        uint _date = block.timestamp;
        dummyCert_struct = Certificate(_name,_id,_bloodType,_home_address,_certificateNum,_donateType,_date);
        return true;
    }

    // 사용자가 보유한 헌혈증명서(구조체)의 length return
    // 해당 function 은 헌혈 기관 한정 require
    // 기존 user_CertLength ==> getCertificateCount
    function getCertificateCount(address _userAddress) public view returns(uint256){
        uint256 cert_quantity = ownedCerts[_userAddress].length;
        return cert_quantity;
    }

    // 공인 헌혈 기관 헌혈증명서 발급 기록 Count
    function getMintRecordCount(address _userAddress) public view returns(uint256){
        uint256 cert_quantity = departmentMintedRecord[_userAddress].length;
        return cert_quantity;
    }

    // 공인 헌혈 기관 헌혈증명서 발급 기록 출력 함수
    function getInquiryRecordCount(address _userAddress) public view returns(uint256){
        uint256 cert_quantity = departmentMintedRecord[_userAddress].length;
        return cert_quantity;
    }

    // 사용자의 주소와 해당 사용자의 n번째 헌혈 증명서에 대한 정보를 return

    function getCertData(address _userAddress, uint256 _num, uint256 _InquiryPW) public checkDepartment(_userAddress) view returns(Certificate memory){
        
        // 이를 위해 생성해놓은 Address_Cert table에 사용자의 주소를 key로 valid_Cert 할당
        uint256 valid_Cert = Address_PW[_userAddress];
        
        // 만약 사용자 본인이 getCertData를 요청한 것이 아니라면
        if(msg.sender != _userAddress){
            // 만약 입력된 cert num == valid_Cert면 해당 사용자가 보유한 헌혈증명서 NFT 리스트를 return
            require(_InquiryPW == valid_Cert, "Invalid Certificate Number");
        }

        // 해당 사용자의 cert_len로 해당 범위를 넘어가는 certificate 조회를 했을 때 Error Handling
        uint256 cert_len = getCertificateCount(_userAddress);
        // uint256은 양수에 한해서 256바이트 까지 저장 cert_len - _num은 음수가 나올 수 있고 개인이 평생할 수 있는 헌혈수가 한정되어있기에 int64로 변환
        uint256 result = cert_len - _num;
        require(checkExistence(result),"Certificate Search OverFlow");

        // n번째 헌혈 증명서에 대한 정보 return

        // department code 1 => Normal User
        require(userDepartment[_userAddress] == 1, "Current User is Not a User");

        return ownedCerts[_userAddress][_num];

    }

    // 공인 헌혈기관이 발급한 개별 헌혈 증명서를 return
    function getMintData(uint256 _num) public checkDepartment(msg.sender) view returns(Certificate memory){

        // 공인 헌혈 기관이 자신이 발행한 헌혈증명서 기록을 get
 
        // 해당 사용자의 cert_len로 해당 범위를 넘어가는 certificate 조회를 했을 때 Error Handling
        uint256 cert_len = getMintRecordCount(msg.sender);
        // uint256은 양수에 한해서 256바이트 까지 저장 cert_len - _num은 음수가 나올 수 있고 개인이 평생할 수 있는 헌혈수가 한정되어있기에 int64로 변환
        // int64 result = int64((uint64(cert_len - _num)));
        uint256 result = cert_len - _num;
        require(checkExistence(result),"Mint Record Search OverFlow");

        // n번째 헌혈 증명서에 대한 정보 return

        // department code 2 => 헌혈 공인 기관
        require(userDepartment[msg.sender] == 2, "Current User is Not a Certified Organization");

        return departmentMintedRecord[msg.sender][_num];
    }

    // department == 3 인 일반 기업이 개인의 기록을 조회한 기록을 address[] array로 return [조회한 사용자 주소,조회한 사용자 주소,...,]
    // 일반 기업의 조회 기록 출력
    function getInquiryData() public view returns(address[] memory user_inquiryHistory){
        require(userDepartment[msg.sender] >= 2, "User Not Allowed To Check InquiryRecord"); // 2,3 은 공인 헌혈 기관, 일반 기업의 department code
        // user_inquiryHistory가 0이어도 빈리스트를 return 하여 프론트엔드에서 빈리스트를 보여줘야 한다.
        user_inquiryHistory = inquiryRecord[msg.sender];
        return user_inquiryHistory;
    }

    function checkExistence(uint256 check_num) public pure returns (bool){
        if(check_num > 0){
            return true;
        } else {
            return false;
        }
    }

    // 구조체 배열 Certificate_Arr을 위에서 선언한 후 해당 배열에 정보를 저장
    // Certificate의 certificateNum을 사용자의 주소에 매핑
    function mintCert(address _to, uint256 _certificateNum) public checkDepartment(msg.sender) checkDepartment(_to) returns(bool) {
        // msg : experimental
        // require(Check_Existence2(dummyCert_struct),"Certificate Structure Not Created");
        
        // result = bytes(dummyCert_struct.id).length; // 존재하지 않으면 0
        require(checkExistence(uint256(bytes(dummyCert_struct.id).length)),"Certificate Not Created");
        require(userDepartment[msg.sender] == 3,"User Is Not Authorized Department to Mint");
        
        // certificate의 id에 대해 소유자의 주소를 저장하는 테이블...
        certificateOwner[_certificateNum] = _to;

        // 사용자의 address를 key로 사용자 소유의 struct list에 dummyCert_struct를 push한다.
        ownedCerts[_to].push(dummyCert_struct);
        departmentMintedRecord[msg.sender].push(dummyCert_struct);

        delete dummyCert_struct;  // minting 이후에 dummy 삭제를 통한 초기화

        // 기부 가능한 토큰 수 increment
        tokenIncrement(_to);
        
        return true;
    }

    /////////////////

    // 외부 기관이 개인의 헌혈 기록을 조회하는 Function
        
    // 주소 => 주소 접근 인증번호 (InquiryPW) table
    
    // ------TEST----- Address_PW 임시로 public으로 바꿔놈
    mapping(address => uint256) public Address_PW;

    // 개인의 주소에 접근이 허용된 주소 접근 리스트
    // mapping(address => ) private White_List;

    // 사용자 헌혈 기록 조회 가능하도록 하는 인증번호 = certificate 설정 함수
    function setInquiryPW(address _to, uint256 _Inquiry_PW) public returns(bool){
        require(msg.sender==_to,"Only Address Owner allowed to set Inquiry PW");
        Address_PW[_to] = _Inquiry_PW;
        return true;
    }

    // valid_Cert가 존재하지 않을 경우 => 사용자에 의해 설정이 되지 않은 경우
    // 아예 구조체 리스트를 return하는 것은 현재 experimental 하기에 -> 고려,,,
    // 그러면 해당 InquiryTo 함수를 통해 인증된 기관은 매핑에 저장하여 whitelist 같이 운영?,,

    // department id ==> 2 인 일반적인 기업에서 조회를 시행하는 Function
    function InquiryTo(address _to, uint256 _InquiryPW,uint256 _num ) public returns (Certificate memory){ // returns(Certificate[] memory)
        // 요청의 대상이 되는 사용자의 주소를 통해 valid한 certificate number가 입력됐는지 확인

        // InquiryPW가 설정됐는지 여부를 확인
        uint256 exist = uint256(Address_PW[_to]);
        require(checkExistence(exist),"Inquiry Password for User's Address is not Set");
        // require(Address_Cert[to]>0,"Certificate Number for User's Address is not Set");
        
        // // 이를 위해 생성해놓은 Address_Cert table에 사용자의 주소를 key로 valid_Cert 할당
        uint256 valid_Cert = Address_PW[_to];
        
        // // 만약 입력된 cert num == valid_Cert면 해당 사용자가 보유한 헌혈증명서 NFT 리스트를 return
        require(_InquiryPW == valid_Cert, "Invalid Inquiry Password");
        // 기업의 주소를 key를 기반으로 개인 헌혈 조회 기록 push
        inquiryRecord[msg.sender].push(_to);

        return getCertData(_to,_num,_InquiryPW);
    }


    ////////////////////

    // 헌혈증서 기부하는 function
    // 헌혈증서 count하는 function

    //_from 보낼사람 주소, _to 받는 사람 주소, _tokenCount 헌혈증서 개수
    mapping(address => uint256) public balances; // 기부만 가능
    mapping(address => uint256) public only_use_balances; // 본인 사용만 가능
    
    // 타인에게 기부하는 function
    function transferFrom(address _from, address _to, uint256 _tokenCount) public {
        require(_from > address(0)); //지갑 주소0x00...형태로 조건만족
        require(_to > address(0));
        require(_from == msg.sender, "from != msg.sender"); //보내는 사람이 sender여야함.
        require(userDepartment[_to] == 1,"Current User Can't Accept Donation(Not a normal user)");
        require(balances[_from] >= _tokenCount, "token is not enough"); //보낼 사람의 잔고에 보낼 값보다 많으면 ok
        require(balances[_to] + _tokenCount > balances[_to]); //받을 사람의 잔고 + 보낼 값이 기존 잔고보다 많을때 ok
    
        balances[_from] = balances[_from] - _tokenCount; // 보낼 사람 잔고에서 보낼 값 빼기
        only_use_balances[_to] = only_use_balances[_to] + _tokenCount; // 받을 사람 잔고에서 받을 값 더하기
        
        DonationCertificate memory DC_Instance;
        // Doncation Certificate Instance를 DonationRecord에 push
        DC_Instance = DonationCertificate(_to,block.timestamp,_tokenCount);
        DonationRecord[msg.sender].push(DC_Instance);
    }
    
    // WIP 11.18
    function getDonationRecord(uint256 _num) public view returns(address to,uint DonateTime,uint256 tokenCount){
        DonationCertificate memory Individual_Instance;
        // require DonationRecord 존재 여부 확인
        require(_num < getDonationCount(msg.sender),"Donation Record Search OverFlow");
        
        Individual_Instance = DonationRecord[msg.sender][_num];
        to = Individual_Instance.donate_to;
        DonateTime = Individual_Instance.date;
        tokenCount = Individual_Instance.donate_count;

    }

    function getDonationCount(address _userAddress) public view returns(uint256){
        uint256 cert_quantity = DonationRecord[_userAddress].length;
        return cert_quantity;
    }


    // 헌혈 시 보유한(즉 기부 가능한)토큰 개수 증가
    function tokenIncrement(address _to) private { // 헌혈증명서 발행시 tokenCount값 1 증가
        require(_to > address(0)); // 유효한 지갑 주소 check
        // 추후에는 헌혈 쿨타임 확인을 통해 anomaly
        balances[_to] = balances[_to] + 1;
    }

}