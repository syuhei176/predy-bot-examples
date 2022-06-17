/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFeePool, IFeePoolInterface } from "../IFeePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendProfitERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFeePool__factory {
  static readonly abi = _abi;
  static createInterface(): IFeePoolInterface {
    return new utils.Interface(_abi) as IFeePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFeePool {
    return new Contract(address, _abi, signerOrProvider) as IFeePool;
  }
}
