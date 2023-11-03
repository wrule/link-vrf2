// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBase.sol";

contract X is VRFConsumerBase {
  constructor() VRFConsumerBase(
    0x2bce784e69d2Ff36c71edcB9F88358dB0DfB55b4,
    0x326C977E6efc84E512bB9C30f76E30c160eD06FB
  ) { }

  uint256 constant fee = 0.1 * 10 ** 18;
  bytes32 constant keyHash = 0x0476f9a745b61ea5c0ab224d3a6e4c99f0b02fce4da01143a4f70aa80ae76e8a;

  function requestRandom() external returns (bytes32) {

  }

  function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {

  }

  event sendMessageEvent(string message);
  function sendMessage(string memory message) public {
    emit sendMessageEvent(message);
  }

  event fallbackEvent(address sender, uint value, bytes data);
  fallback() external payable {
    emit fallbackEvent(msg.sender, msg.value, msg.data);
  }

  event receiveEvent(address sender, uint value);
  receive() external payable {
    emit receiveEvent(msg.sender, msg.value);
  }
}
