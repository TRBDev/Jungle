// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
    apiKey: "AIzaSyAo-IvF63iCWi6zpPgIdgLNcyPISKdt2RE",
    authDomain: "jungle-637d8.firebaseapp.com",
    databaseURL: "https://jungle-637d8.firebaseio.com",
    projectId: "jungle-637d8",
    storageBucket: "jungle-637d8.appspot.com",
    messagingSenderId: "671808464311"
  };

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});