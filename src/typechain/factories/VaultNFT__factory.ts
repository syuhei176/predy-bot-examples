/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VaultNFT, VaultNFTInterface } from "../VaultNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_perpetualMarket",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "mintNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "perpetualMarket",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526001600b553480156200001657600080fd5b506040516200224638038062002246833981810160405260608110156200003c57600080fd5b81019080805160405193929190846401000000008211156200005d57600080fd5b9083019060208201858111156200007357600080fd5b82516401000000008111828201881017156200008e57600080fd5b82525081516020918201929091019080838360005b83811015620000bd578181015183820152602001620000a3565b50505050905090810190601f168015620000eb5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010f57600080fd5b9083019060208201858111156200012557600080fd5b82516401000000008111828201881017156200014057600080fd5b82525081516020918201929091019080838360005b838110156200016f57818101518382015260200162000155565b50505050905090810190601f1680156200019d5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084640100000000821115620001c157600080fd5b908301906020820185811115620001d757600080fd5b8251640100000000811182820188101715620001f257600080fd5b82525081516020918201929091019080838360005b838110156200022157818101518382015260200162000207565b50505050905090810190601f1680156200024f5780820380516001836020036101000a031916815260200191505b50604052508491508390506200026c6301ffc9a760e01b620002eb565b81516200028190600690602085019062000389565b5080516200029790600790602084019062000389565b50620002aa6380ac58cd60e01b620002eb565b620002bc635b5e139f60e01b620002eb565b620002ce63780e9d6360e01b620002eb565b50503360601b608052620002e28162000370565b50505062000435565b6001600160e01b031980821614156200034b576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200038590600990602084019062000389565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620003c157600085556200040c565b82601f10620003dc57805160ff19168380011785556200040c565b828001600101855582156200040c579182015b828111156200040c578251825591602001919060010190620003ef565b506200041a9291506200041e565b5090565b5b808211156200041a57600081556001016200041f565b60805160601c611df362000453600039806107b75250611df36000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806354ba0f27116100b857806395d89b411161007c57806395d89b41146103c9578063a22cb465146103d1578063b88d4fde146103ff578063c87b56dd146104c5578063e61e8010146104e2578063e985e9c5146104ea57610137565b806354ba0f271461035057806361b8ce8c146103765780636352211e1461037e5780636c0360eb1461039b57806370a08231146103a357610137565b806319ab453c116100ff57806319ab453c1461027557806323b872dd1461029b5780632f745c59146102d157806342842e0e146102fd5780634f6ccce71461033357610137565b806301ffc9a71461013c57806306fdde0314610177578063081812fc146101f4578063095ea7b31461022d57806318160ddd1461025b575b600080fd5b6101636004803603602081101561015257600080fd5b50356001600160e01b031916610518565b604080519115158252519081900360200190f35b61017f61053b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101b95781810151838201526020016101a1565b50505050905090810190601f1680156101e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102116004803603602081101561020a57600080fd5b50356105d1565b604080516001600160a01b039092168252519081900360200190f35b6102596004803603604081101561024357600080fd5b506001600160a01b038135169060200135610633565b005b61026361070e565b60408051918252519081900360200190f35b6102596004803603602081101561028b57600080fd5b50356001600160a01b031661071f565b610259600480360360608110156102b157600080fd5b506001600160a01b0381358116916020810135909116906040013561089d565b610263600480360360408110156102e757600080fd5b506001600160a01b0381351690602001356108f4565b6102596004803603606081101561031357600080fd5b506001600160a01b0381358116916020810135909116906040013561091f565b6102636004803603602081101561034957600080fd5b503561093a565b6102636004803603602081101561036657600080fd5b50356001600160a01b0316610950565b6102636109bf565b6102116004803603602081101561039457600080fd5b50356109c5565b61017f6109ed565b610263600480360360208110156103b957600080fd5b50356001600160a01b0316610a4e565b61017f610ab6565b610259600480360360408110156103e757600080fd5b506001600160a01b0381351690602001351515610b17565b6102596004803603608081101561041557600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561045057600080fd5b82018360208201111561046257600080fd5b8035906020019184600183028401116401000000008311171561048457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c1c945050505050565b61017f600480360360208110156104db57600080fd5b5035610c7a565b610211610efb565b6101636004803603604081101561050057600080fd5b506001600160a01b0381358116916020013516610f0a565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105c75780601f1061059c576101008083540402835291602001916105c7565b820191906000526020600020905b8154815290600101906020018083116105aa57829003601f168201915b5050505050905090565b60006105dc82610f38565b6106175760405162461bcd60e51b815260040180806020018281038252602c815260200180611ce8602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061063e826109c5565b9050806001600160a01b0316836001600160a01b031614156106915760405162461bcd60e51b8152600401808060200182810382526021815260200180611d6c6021913960400191505060405180910390fd5b806001600160a01b03166106a3610f45565b6001600160a01b031614806106c457506106c4816106bf610f45565b610f0a565b6106ff5760405162461bcd60e51b8152600401808060200182810382526038815260200180611c0d6038913960400191505060405180910390fd5b6107098383610f49565b505050565b600061071a6002610fb7565b905090565b600a54610100900460ff16806107385750610738610fc2565b806107465750600a5460ff16155b6107815760405162461bcd60e51b815260040180806020018281038252602e815260200180611c98602e913960400191505060405180910390fd5b600a54610100900460ff161580156107ac57600a805460ff1961ff0019909116610100171660011790555b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610822576040805162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba103232b83637bcb2b960511b604482015290519081900360640190fd5b6001600160a01b03821661086c576040805162461bcd60e51b815260206004820152600c60248201526b5a65726f206164647265737360a01b604482015290519081900360640190fd5b600c80546001600160a01b0319166001600160a01b038416179055801561089957600a805461ff00191690555b5050565b6108ae6108a8610f45565b82610fd3565b6108e95760405162461bcd60e51b8152600401808060200182810382526031815260200180611d8d6031913960400191505060405180910390fd5b610709838383611077565b6001600160a01b038216600090815260016020526040812061091690836111c3565b90505b92915050565b61070983838360405180602001604052806000815250610c1c565b6000806109486002846111cf565b509392505050565b600c546000906001600160a01b031633146109a9576040805162461bcd60e51b8152602060048201526014602482015273139bdd0814195c9c195d1d585b0813585c9ad95d60621b604482015290519081900360640190fd5b50600b80546001810190915561053682826111eb565b600b5481565b600061091982604051806060016040528060298152602001611c6f6029913960029190611205565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105c75780601f1061059c576101008083540402835291602001916105c7565b60006001600160a01b038216610a955760405162461bcd60e51b815260040180806020018281038252602a815260200180611c45602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061091990610fb7565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105c75780601f1061059c576101008083540402835291602001916105c7565b610b1f610f45565b6001600160a01b0316826001600160a01b03161415610b85576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610b92610f45565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610bd6610f45565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610c2d610c27610f45565b83610fd3565b610c685760405162461bcd60e51b8152600401808060200182810382526031815260200180611d8d6031913960400191505060405180910390fd5b610c748484848461121c565b50505050565b6060610c8582610f38565b610cc05760405162461bcd60e51b815260040180806020018281038252602f815260200180611d3d602f913960400191505060405180910390fd5b60008281526008602090815260408083208054825160026001831615610100026000190190921691909104601f810185900485028201850190935282815292909190830182828015610d535780601f10610d2857610100808354040283529160200191610d53565b820191906000526020600020905b815481529060010190602001808311610d3657829003601f168201915b505050505090506000610d646109ed565b9050805160001415610d7857509050610536565b815115610e395780826040516020018083805190602001908083835b60208310610db35780518252601f199092019160209182019101610d94565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610dfb5780518252601f199092019160209182019101610ddc565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050610536565b80610e438561126e565b6040516020018083805190602001908083835b60208310610e755780518252601f199092019160209182019101610e56565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610ebd5780518252601f199092019160209182019101610e9e565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b600c546001600160a01b031681565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610919600283611349565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f7e826109c5565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061091982611355565b6000610fcd30611359565b15905090565b6000610fde82610f38565b6110195760405162461bcd60e51b815260040180806020018281038252602c815260200180611be1602c913960400191505060405180910390fd5b6000611024836109c5565b9050806001600160a01b0316846001600160a01b0316148061105f5750836001600160a01b0316611054846105d1565b6001600160a01b0316145b8061106f575061106f8185610f0a565b949350505050565b826001600160a01b031661108a826109c5565b6001600160a01b0316146110cf5760405162461bcd60e51b8152600401808060200182810382526029815260200180611d146029913960400191505060405180910390fd5b6001600160a01b0382166111145760405162461bcd60e51b8152600401808060200182810382526024815260200180611bbd6024913960400191505060405180910390fd5b61111f838383610709565b61112a600082610f49565b6001600160a01b038316600090815260016020526040902061114c908261135f565b506001600160a01b038216600090815260016020526040902061116f908261136b565b5061117c60028284611377565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610916838361138d565b60008080806111de86866113f1565b9097909650945050505050565b61089982826040518060200160405280600081525061146c565b60006112128484846114be565b90505b9392505050565b611227848484611077565b61123384848484611588565b610c745760405162461bcd60e51b8152600401808060200182810382526032815260200180611b8b6032913960400191505060405180910390fd5b60608161129357506040805180820190915260018152600360fc1b6020820152610536565b8160005b81156112ab57600101600a82049150611297565b60008167ffffffffffffffff811180156112c457600080fd5b506040519080825280601f01601f1916602001820160405280156112ef576020820181803683370190505b50859350905060001982015b831561134057600a840660300160f81b8282806001900393508151811061131e57fe5b60200101906001600160f81b031916908160001a905350600a840493506112fb565b50949350505050565b600061091683836116f0565b5490565b3b151590565b60006109168383611708565b600061091683836117ce565b600061121284846001600160a01b038516611818565b815460009082106113cf5760405162461bcd60e51b8152600401808060200182810382526022815260200180611b696022913960400191505060405180910390fd5b8260000182815481106113de57fe5b9060005260206000200154905092915050565b8154600090819083106114355760405162461bcd60e51b8152600401808060200182810382526022815260200180611cc66022913960400191505060405180910390fd5b600084600001848154811061144657fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b61147683836118af565b6114836000848484611588565b6107095760405162461bcd60e51b8152600401808060200182810382526032815260200180611b8b6032913960400191505060405180910390fd5b600082815260018401602052604081205482816115595760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561151e578181015183820152602001611506565b50505050905090810190601f16801561154b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061156c57fe5b9060005260206000209060020201600101549150509392505050565b600061159c846001600160a01b0316611359565b6115a85750600161106f565b60006116b6630a85bd0160e11b6115bd610f45565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561162457818101518382015260200161160c565b50505050905090810190601f1680156116515780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001611b8b603291396001600160a01b03881691906119dd565b905060008180602001905160208110156116cf57600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b600081815260018301602052604081205480156117c4578354600019808301919081019060009087908390811061173b57fe5b906000526020600020015490508087600001848154811061175857fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061178857fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610919565b6000915050610919565b60006117da83836116f0565b61181057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610919565b506000610919565b60008281526001840160205260408120548061187d575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055611215565b8285600001600183038154811061189057fe5b9060005260206000209060020201600101819055506000915050611215565b6001600160a01b03821661190a576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61191381610f38565b15611965576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b61197160008383610709565b6001600160a01b0382166000908152600160205260409020611993908261136b565b506119a060028284611377565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60606112128484600085856119f185611359565b611a42576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310611a805780518252601f199092019160209182019101611a61565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611ae2576040519150601f19603f3d011682016040523d82523d6000602084013e611ae7565b606091505b5091509150611af7828286611b02565b979650505050505050565b60608315611b11575081611215565b825115611b215782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561151e57818101518382015260200161150656fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122034bca808c50ad2eaba343b93e29f92175c92a064907f42b49ab1fded31043e5664736f6c63430007060033";

export class VaultNFT__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    _baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultNFT> {
    return super.deploy(
      _name,
      _symbol,
      _baseURI,
      overrides || {}
    ) as Promise<VaultNFT>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _baseURI,
      overrides || {}
    );
  }
  attach(address: string): VaultNFT {
    return super.attach(address) as VaultNFT;
  }
  connect(signer: Signer): VaultNFT__factory {
    return super.connect(signer) as VaultNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultNFTInterface {
    return new utils.Interface(_abi) as VaultNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultNFT {
    return new Contract(address, _abi, signerOrProvider) as VaultNFT;
  }
}
