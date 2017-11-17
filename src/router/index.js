import Vue from "vue";
import Router from "vue-router";

import Hello from "@/components/Hello";
import Login from "@/components/Login";
import Products from '@/components/Products/index';
import firebase from "firebase";

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/hello",
            name: "Hello",
            component: Hello,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/products",
            name: "Products",
            component: Products
        }
    ]
});

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next("login");
    else next();
});

export default router;