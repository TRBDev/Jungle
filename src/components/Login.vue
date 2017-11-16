<template>

 <div class="login">
    <h3>Iniciar Sesión</h3>

    <div class="ui corner labeled input">
      <input  type="text" v-model="email" placeholder="Email">
      <div class="ui corner label">
        <i class="asterisk icon"></i>
      </div>
    </div>
    <div class="ui corner labeled input">
      <input type="password" v-model="password" placeholder="Password">
      <div class="ui corner label">
        <i class="asterisk icon"></i>
      </div>
    </div>
    <button class="ui teal basic button" v-on:click="signIn">Acceder</button>
  </div>

</template>
<script> 

 import firebase from 'firebase'

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert('Error al acceder: ' + err.message)
          }
        );
      }
    }
  }

</script>