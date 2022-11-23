import caver from '../klaytn/caver'

/**
 * 1. Create contract instance
 * ex:) new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
 * You can call contract method through this instance.
 * Now you can access the instance by `this.countContract` variable.
 */
const DEPLOYED_ABI =[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_err",
				"type": "string"
			}
		],
		"name": "catchOnly",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Address_PW",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int64",
				"name": "check_num",
				"type": "int64"
			}
		],
		"name": "Check_Existence3",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_InquiryPW",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "InquiryTo",
		"outputs": [
			{
				"internalType": "string",
				"name": "get_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_bloodType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_home_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_certificateNum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_donateType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "get_date",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "department",
				"type": "uint256"
			}
		],
		"name": "admin_setDepartment",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certificateOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "checkDepartment",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bloodType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_home_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_certificateNum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_donateType",
				"type": "string"
			}
		],
		"name": "createCertificate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_InquiryPW",
				"type": "uint256"
			}
		],
		"name": "getCertData",
		"outputs": [
			{
				"internalType": "string",
				"name": "get_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_bloodType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_home_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_certificateNum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_donateType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "get_date",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "getCertificateCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "getDepartment",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "getDonationCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "getDonationRecord",
		"outputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "DonateTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getInquiryData",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "user_inquiryHistory",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "getMintData",
		"outputs": [
			{
				"internalType": "string",
				"name": "get_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_bloodType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_home_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_certificateNum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "get_donateType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "get_date",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "getMintRecordCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_certificateNum",
				"type": "uint256"
			}
		],
		"name": "mintCert",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "only_use_balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ownedCerts",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bloodType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "home_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "certificateNum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "donateType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "result",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "department",
				"type": "uint256"
			}
		],
		"name": "setDepartment",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "department",
				"type": "uint256"
			}
		],
		"name": "setDepartment_internal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Inquiry_PW",
				"type": "uint256"
			}
		],
		"name": "set_InquiryPW",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenCount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const DEPLOYED_ADDRESS = '0x0573c41E7C08afb2Dc4bDE8efBB20b8ee8e900c0'
 
const BloodContract = DEPLOYED_ABI
 && DEPLOYED_ADDRESS
 && new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)

export default BloodContract