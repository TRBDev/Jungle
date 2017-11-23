<template>

 <div class="login">
   <div class="container">
     <div class="row">
       <div class="col-lg-4"></div>

<div class="col-lg-4 col-xs-12 center-block text-left">
      <h3>Iniciar Sesión</h3>

  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input  type="email" class="form-control" v-model="email" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" class="form-control"  v-model="password" placeholder="Contraseña">
  </div>
  <div class="form-check">
   



  </div>
  <button type="submit"  v-on:click="signIn" class="btn btn-primary">Entrar</button>
</div>
       <div class="col-lg-4"></div>



    </div>
    </div>
  </div>

</template>
<script>

 import firebase from 'firebase';

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
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }

</script>
