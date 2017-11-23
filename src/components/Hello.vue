<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><router-link to="/products">Products</router-link></li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase';

/*************** DEBERIAMOS HACER EL IMPORT DONDE SE NECESITE ************** */
export default {
  name: "HelloWorld",
  
  data() {

    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
