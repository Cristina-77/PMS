// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Pacienti {
    mapping(bytes32 => bool) public hashuri;

    function salveazaHash(string memory hash) public {
        hashuri[keccak256(abi.encodePacked(hash))] = true;
    }

    function verificaHash(string memory hash) public view returns (bool) {
        return hashuri[keccak256(abi.encodePacked(hash))];
    }
}