// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueFire from "vuefire";
import router from "./router";
import firebase from "firebase";
import { config } from "./config/config";

Vue.config.productionTip = false;
Vue.use(VueFire);

const app = new Vue({
    router,
    created() {
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$router.push("/hello");
            } else {
                this.$router.push("/login");
            }
        });
    },
    el: "#app",
    render: h => h(App)
});