/*global ethereum, MetamaskOnboarding */

/*
The `piggybankContract` is compiled from:

  pragma solidity ^0.4.0;
  contract PiggyBank {

      uint private balance;
      address public owner;

      function PiggyBank() public {
          owner = msg.sender;
          balance = 0;
      }

      function deposit() public payable returns (uint) {
          balance += msg.value;
          return balance;
      }

      function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
          require(msg.sender == owner);
          balance -= withdrawAmount;

          msg.sender.transfer(withdrawAmount);

          return balance;
      }
  }
*/

const forwarderOrigin = 'http://localhost:9010'

const initialize = () => {
  //Basic Actions Section
  const onboardButton = document.getElementById('connectButton');

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () = {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  
  //------Inserted Code------\\
  const MetaMaskClientCheck = () => {
    if(!isMetaMaskInstalled) {
      onboardButton.innerText = 'Click here to install MetaMask!';
    } else {
      onboardButton.innerText = 'Connect';
    }
  };
  MetaMaskClientCheck();
};

window.addEventListener('DOMContentLoaded', initialize)
