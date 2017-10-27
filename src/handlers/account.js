import contract from 'truffle-contract';
import AccountContract from '@contracts/Account.json';

const Account = {
  contract: null,
  instance: null,

  init: () => {
    let self = this;
    return new Promise((resolve, reject) => {
      self.contract = contract(AccountContract);
      self.contract.setProvider(window.web3.currentProvider);
      self.instance = self.contract.deployed().then(instance => {
        return instance;
      })
        .catch(error => { reject(error) });
    });
  },

  getName: () => {
    let self = this;
    return new Promise((resolve, reject) => {
      self.instance
        .then(account => { return account.name(); })
        .then(name => { resolve(name) })
        .catch(error => { reject(error) })
    });
  },

  setName: (name) => {
    let self = this;
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase()
        .then((coinbase, error) => {
          if (error) {
            reject(error)
          }
          self.instance
            .then(account => { return account.setName(name, {from: coinbase}); })
            .then(console.log)
            .catch(console.error)
        })
    });
  },

  getLastName: () => {
    let self = this;
    return new Promise((resolve, reject) => {
      self.instance
        .then(account => { return account.lastName(); })
        .then(lastName => { resolve(lastName) })
        .catch(error => { reject(error) })
    });
  },

  setLastName: (lastName) => {
    let self = this;
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase()
        .then((coinbase, error) => {
          if (error) {
            reject(error)
          }
          self.instance
            .then(account => { return account.setLastName(lastName, {from: coinbase}); })
            .then(console.log)
            .catch(console.error)
        })
    });
  },

  getID: () => {
    let self = this;
    return new Promise((resolve, reject) => {
      self.instance
        .then(account => { return account.id(); })
        .then(id => { resolve(id) })
        .catch(error => { reject(error) })
    });
  },

  setID: (id) => {
    let self = this;
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase()
        .then((coinbase, error) => {
          if (error) {
            reject(error)
          }
          self.instance
            .then(account => { return account.setID(id, {from: coinbase}); })
            .then(console.log)
            .catch(console.error)
        })
    });
  },

  setAll: (name, lastName, id) => {
    let self = this;
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase()
        .then((coinbase, error) => {
          if (error) {
            reject(error)
          }
          self.instance
            .then(account => { return account.setAll(name, lastName, id, {from: coinbase}); })
            .then(console.log)
            .catch(console.error)
        })
    });
  }
};

export default Account;
