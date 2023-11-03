// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/vrf/VRFV2WrapperConsumerBase.sol";

contract X is VRFV2WrapperConsumerBase {
  constructor() VRFV2WrapperConsumerBase(
    0x779877A7B0D9E8603169DdbD7836e478b4624789,
    0xab18414CD93297B0d12ac29E63Ca20f515b3DB46
  ) { }

  function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords) internal override {
    
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
