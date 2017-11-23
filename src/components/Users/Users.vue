<template>

 <div class="login">



   <div class="container">
     <div class="row">

<form class="col-lg-4 col-xs-12 text-left">
      <h3>Crear nuevo usuario</h3>
    <div class="form-group">
    <label for="exampleInputEmail1">Nombre / Nick</label>
    <input  type="email" class="form-control"  id="nombre" aria-describedby="nombrelHelp" v-model="nombre" placeholder="Nombre">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input  type="email" class="form-control"  id="email" aria-describedby="emailHelp" v-model="email" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" class="form-control" id="password" v-model="password" placeholder="Contraseña">
  </div>

  <button type="submit"  v-on:click="signIn" class="btn btn-primary">Añadir</button>
</form>
       <div class="col-lg-8"></div>



    </div>
    </div>
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
