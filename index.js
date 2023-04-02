// Connect to the Ethereum network using Web3.js library
const web3 = new web3(web3.givenProvider || "http://localhost:8545");

// Load the contract ABI (Application Binary Interface)
const abi = [
    {
        "inputs": [],
        "name": "owner",
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
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string[]",
                "name": "_courses",
                "type": "string[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_grades",
                "type": "uint256[]"
            },
            {
                "internalType": "string",
                "name": "_issuedBy",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_issuedOn",
                "type": "uint256"
            }
        ],
        "name": "addTranscript",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getTranscript",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Load the contract address
const contractAddress = '0x161330867F4b6D63DDb34297562B966da895A987';

// Create a new instance of the contract using the loaded ABI and address
const contract = new web3.eth.Contract(abi, contractAddress);

// Add a new transcript to the contract
contract.methods.addTranscript("Vashishth Gajjar", ["PDC", "DBMS", "DSA"], [90, 85, 95], "VIT University", Date.now())
    .send({ from: '0x0d2786065d8CA8Ac69b6B10EC83FD7bd5bf7ecee' }) // Replace with your account address
    .then(() => console.log("Transcript added successfully!"))
    .catch((error) => console.error(error));

// Get a transcript from the contract
contract.methods.getTranscript(0)
    .call({ from: '0x0d2786065d8CA8Ac69b6B10EC83FD7bd5bf7ecee' }) // Replace with your account address
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
