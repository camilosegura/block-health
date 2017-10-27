<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" aria-describedby="nameHelp" placeholder="Ingrese nombre">
        <small id="nameHelp" class="form-text text-muted">Your name in the blockchain.</small>
      </div>
      <div class="form-group">
        <label for="last-name">Apellido</label>
        <input type="text" class="form-control" id="last-name" v-model="lastName" aria-describedby="lastnameHelp" placeholder="Ingrese Apellido">
        <small id="lastnameeHelp" class="form-text text-muted">Your last name in the blockchain.</small>
      </div>
      <div class="form-group">
        <label for="id">Identificación</label>
        <input type="text" class="form-control" id="id" v-model="id" aria-describedby="idHelp" placeholder="Ingrese Identificación">
        <small id="idHelp" class="form-text text-muted">Your ID in the blockchain.</small>
      </div>
      <button type="button" class="btn btn-primary" @click="setAll">Submit</button>
    </form>
  </div>
</template>

<script>
import Account from '@/handlers/account'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'A simple dApp using VueJS and Solidity for the Account contract',
      name: '',
      lastName: '',
      id: ''
    }
  },
  beforeCreate () {
    Account.init()
  },
  mounted () {
    this.getName()
  },
  methods: {
    getName () {
      Account.getName().then(name => { this.name = name }).catch(console.error)
    },
    setName() {
      Account.setName(this.name)
    },
    getLastName () {
      Account.getLastName().then(lastName => { this.lastName = lastName }).catch(console.error)
    },
    setLastName() {
      Account.setLastName(this.lastName)
    },
    getID () {
      Account.getID().then(id => { this.id = id }).catch(console.error)
    },
    setID() {
      Account.setID(this.id)
    },
    setAll() {
      this.setName();
      this.setLastName();
      this.setID();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
