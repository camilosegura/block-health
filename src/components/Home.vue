<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" aria-describedby="nameHelp" placeholder="Enter name">
        <small id="nameHelp" class="form-text text-muted">Your name in the blockchain.</small>
      </div>
      <button type="button" class="btn btn-primary" @click="setName">Submit</button>
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
      name: ''
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
