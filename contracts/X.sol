// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/vrf/VRFV2WrapperConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/shared/token/ERC677/LinkToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

LinkToken constant linkToken = LinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);

contract X is VRFV2WrapperConsumerBase, Ownable {
  constructor() VRFV2WrapperConsumerBase(
    address(linkToken),
    0xab18414CD93297B0d12ac29E63Ca20f515b3DB46
  ) Ownable(msg.sender) { }

  event requestRandomEvent(uint256 requestId);
  function requestRandom() external returns (uint256) {
    uint256 requestId = requestRandomness(100000, 3, 1);
    emit requestRandomEvent(requestId);
    return requestId;
  }

  event fulfillRandomWordsEvent(uint256 _requestId, uint256[] _randomWords);
  function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords) internal override {
    emit fulfillRandomWordsEvent(_requestId, _randomWords);
  }

  function releaseLINK() external onlyOwner {
    linkToken.transfer(owner(), linkToken.balanceOf(address(this)));
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
