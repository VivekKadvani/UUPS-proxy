// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Proxiable.sol";

contract MyContract is Proxiable{
    address public owner;
    uint256 public number;
    bool public initialized= false;

    //initializer as we not use constructor in this pattern
    function initialize() public  {
        require(owner==address(0),"Already Initialized");
        require(!initialized,"Already Initialized");
        owner=msg.sender;
        initialized=true;
   }
    modifier onlyOwner(){
        require(msg.sender==owner ,"Only owner can call this function.");
        _;
    }
    function updateCode(address newCode)onlyOwner public{
        updateCodeAddress(newCode);
    }
    //remain code logic
    function increament()public {
        number++;
    }

    function decrement() external {
       require(number > 1, "no slices left");
       number -= 1;
    }


}