pragma solidity ^0.4.15;

contract Account {
  string public name;
  string public lastName;
  string public id;
  address public owner;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  function Account() {
    owner = msg.sender;
  }

  function setName(string _name) onlyOwner {
    name = _name;
  }

  function setLastName(string _lastName) onlyOwner {
    lastName = _lastName;
  }

  function setID(string _id) onlyOwner {
    id = _id;
  }

  function setAll(string _name, string _lastName, string _id) {
    name = _name;
    lastName = _lastName;
    id = _id;
  }
}
