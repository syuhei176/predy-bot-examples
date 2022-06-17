/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BaseFlashSwap, BaseFlashSwapInterface } from "../BaseFlashSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "factory",
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
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161078838038061078883398101604081905261002f91610073565b6001600160a01b03811661005e5760405162461bcd60e51b8152600401610055906100a1565b60405180910390fd5b60601b6001600160601b0319166080526100d8565b600060208284031215610084578081fd5b81516001600160a01b038116811461009a578182fd5b9392505050565b60208082526017908201527f696e76616c696420666163746f72792061646472657373000000000000000000604082015260600190565b60805160601c6106906100f8600039806070528060d752506106906000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c45a01551461003b578063fa461e3314610059575b600080fd5b61004361006e565b6040516100509190610646565b60405180910390f35b61006c61006736600461050d565b610092565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b60008413806100a15750600083135b6100aa57600080fd5b60006100b882840184610588565b905060008060006100cc8460000151610138565b9250925092506100fe7f0000000000000000000000000000000000000000000000000000000000000000848484610169565b50600080891361010e5787610110565b885b905061012d8560200151858585858a606001518b60400151610188565b505050505050505050565b600080806101468482610191565b9250610153846014610247565b9050610160846017610191565b91509193909250565b600061017f8561017a8686866102ee565b610344565b95945050505050565b50505050505050565b6000818260140110156101e0576040805162461bcd60e51b8152602060048201526012602482015271746f416464726573735f6f766572666c6f7760701b604482015290519081900360640190fd5b8160140183511015610231576040805162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b604482015290519081900360640190fd5b5081810160200151600160601b90045b92915050565b600081826003011015610295576040805162461bcd60e51b8152602060048201526011602482015270746f55696e7432345f6f766572666c6f7760781b604482015290519081900360640190fd5b81600301835110156102e5576040805162461bcd60e51b8152602060048201526014602482015273746f55696e7432345f6f75744f66426f756e647360601b604482015290519081900360640190fd5b50016003015190565b6102f661044b565b826001600160a01b0316846001600160a01b03161115610314579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b60006103508383610367565b9050336001600160a01b0382161461024157600080fd5b600081602001516001600160a01b031682600001516001600160a01b03161061038f57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b604080516060810182526000808252602082018190529181019190915290565b80356001600160a01b038116811461048257600080fd5b919050565b600082601f830112610497578081fd5b813567ffffffffffffffff808211156104ac57fe5b604051601f8301601f1916810160200182811182821017156104ca57fe5b6040528281528483016020018610156104e1578384fd5b82602086016020830137918201602001929092529392505050565b803560ff8116811461048257600080fd5b60008060008060608587031215610522578384fd5b8435935060208501359250604085013567ffffffffffffffff80821115610547578384fd5b818701915087601f83011261055a578384fd5b813581811115610568578485fd5b886020828501011115610579578485fd5b95989497505060200194505050565b600060208284031215610599578081fd5b813567ffffffffffffffff808211156105b0578283fd5b90830190608082860312156105c3578283fd5b6040516080810181811083821117156105d857fe5b6040528235828111156105e9578485fd5b6105f587828601610487565b8252506106046020840161046b565b6020820152610615604084016104fc565b604082015260608301358281111561062b578485fd5b61063787828601610487565b60608301525095945050505050565b6001600160a01b039190911681526020019056fea264697066735822122051f5d8cf88a0e8e21702351bf2001a56f5529497529383589fdf36f12eac95c864736f6c63430007060033";

export class BaseFlashSwap__factory extends ContractFactory {
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
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseFlashSwap> {
    return super.deploy(_factory, overrides || {}) as Promise<BaseFlashSwap>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): BaseFlashSwap {
    return super.attach(address) as BaseFlashSwap;
  }
  connect(signer: Signer): BaseFlashSwap__factory {
    return super.connect(signer) as BaseFlashSwap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseFlashSwapInterface {
    return new utils.Interface(_abi) as BaseFlashSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseFlashSwap {
    return new Contract(address, _abi, signerOrProvider) as BaseFlashSwap;
  }
}
