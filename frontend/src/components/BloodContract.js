import caver from '../klaytn/caver'

/**
 * 1. Create contract instance
 * ex:) new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
 * You can call contract method through this instance.
 * Now you can access the instance by `this.countContract` variable.
 */
const DEPLOYED_ABI =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			}, 
			{
				"name": "_certificateNum",
				"type": "uint256"
			}
		],
		"name": "mintCert",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "user_CertLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenCount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "check_num",
				"type": "int64"
			}
		],
		"name": "Check_Existence3",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "Address_PW",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contract_function",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "result",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ownedCerts",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "id",
				"type": "string"
			},
			{
				"name": "bloodType",
				"type": "string"
			},
			{
				"name": "home_address",
				"type": "string"
			},
			{
				"name": "certificateNum",
				"type": "string"
			},
			{
				"name": "donateType",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "only_use_balances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_Inquiry_PW",
				"type": "uint256"
			} 
		],
		"name": "set_InquiryPW",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_bloodType",
				"type": "string"
			},
			{
				"name": "_home_address",
				"type": "string"
			},
			{
				"name": "_certificateNum",
				"type": "string"
			},
			{
				"name": "_donateType",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			}
		],
		"name": "createCertificate",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_InquiryPW",
				"type": "uint256"
			},
			{
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "InquiryTo",
		"outputs": [
			{
				"name": "get_name",
				"type": "string"
			},
			{
				"name": "get_id",
				"type": "string"
			},
			{
				"name": "get_bloodType",
				"type": "string"
			},
			{
				"name": "get_home_address",
				"type": "string"
			},
			{
				"name": "get_certificateNum",
				"type": "string"
			},
			{
				"name": "get_donateType",
				"type": "string"
			},
			{
				"name": "get_date",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certificateOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
const DEPLOYED_ADDRESS = '0x81302048EE0b2Aa07eC27f9C77650B814dE998b1'
 
const BloodContract = DEPLOYED_ABI
 && DEPLOYED_ADDRESS
 && new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)

export default BloodContract