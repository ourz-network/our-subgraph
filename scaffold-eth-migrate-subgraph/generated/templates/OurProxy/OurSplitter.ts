// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TransferETH extends ethereum.Event {
  get params(): TransferETH__Params {
    return new TransferETH__Params(this);
  }
}

export class TransferETH__Params {
  _event: TransferETH;

  constructor(event: TransferETH) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get success(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class WindowIncremented extends ethereum.Event {
  get params(): WindowIncremented__Params {
    return new WindowIncremented__Params(this);
  }
}

export class WindowIncremented__Params {
  _event: WindowIncremented;

  constructor(event: WindowIncremented) {
    this._event = event;
  }

  get currentWindow(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fundsAvailable(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OurSplitter extends ethereum.SmartContract {
  static bind(address: Address): OurSplitter {
    return new OurSplitter("OurSplitter", address);
  }

  PERCENTAGE_SCALE(): BigInt {
    let result = super.call(
      "PERCENTAGE_SCALE",
      "PERCENTAGE_SCALE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PERCENTAGE_SCALE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PERCENTAGE_SCALE",
      "PERCENTAGE_SCALE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceForWindow(param0: BigInt): BigInt {
    let result = super.call(
      "balanceForWindow",
      "balanceForWindow(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_balanceForWindow(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceForWindow",
      "balanceForWindow(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentWindow(): BigInt {
    let result = super.call("currentWindow", "currentWindow():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentWindow(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentWindow",
      "currentWindow():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isClaimed(window: BigInt, account: Address): boolean {
    let result = super.call("isClaimed", "isClaimed(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(window),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isClaimed(
    window: BigInt,
    account: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isClaimed",
      "isClaimed(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(window),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  merkleRoot(): Bytes {
    let result = super.call("merkleRoot", "merkleRoot():(bytes32)", []);

    return result[0].toBytes();
  }

  try_merkleRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("merkleRoot", "merkleRoot():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  scaleAmountByPercentage(amount: BigInt, scaledPercent: BigInt): BigInt {
    let result = super.call(
      "scaleAmountByPercentage",
      "scaleAmountByPercentage(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(scaledPercent)
      ]
    );

    return result[0].toBigInt();
  }

  try_scaleAmountByPercentage(
    amount: BigInt,
    scaledPercent: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "scaleAmountByPercentage",
      "scaleAmountByPercentage(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(scaledPercent)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wethAddress(): Address {
    let result = super.call("wethAddress", "wethAddress():(address)", []);

    return result[0].toAddress();
  }

  try_wethAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("wethAddress", "wethAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get window(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get scaledPercentageAllocation(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get merkleProof(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimForAllWindowsCall extends ethereum.Call {
  get inputs(): ClaimForAllWindowsCall__Inputs {
    return new ClaimForAllWindowsCall__Inputs(this);
  }

  get outputs(): ClaimForAllWindowsCall__Outputs {
    return new ClaimForAllWindowsCall__Outputs(this);
  }
}

export class ClaimForAllWindowsCall__Inputs {
  _call: ClaimForAllWindowsCall;

  constructor(call: ClaimForAllWindowsCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get percentageAllocation(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get merkleProof(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class ClaimForAllWindowsCall__Outputs {
  _call: ClaimForAllWindowsCall;

  constructor(call: ClaimForAllWindowsCall) {
    this._call = call;
  }
}

export class IncrementWindowCall extends ethereum.Call {
  get inputs(): IncrementWindowCall__Inputs {
    return new IncrementWindowCall__Inputs(this);
  }

  get outputs(): IncrementWindowCall__Outputs {
    return new IncrementWindowCall__Outputs(this);
  }
}

export class IncrementWindowCall__Inputs {
  _call: IncrementWindowCall;

  constructor(call: IncrementWindowCall) {
    this._call = call;
  }
}

export class IncrementWindowCall__Outputs {
  _call: IncrementWindowCall;

  constructor(call: IncrementWindowCall) {
    this._call = call;
  }
}