import VueRouter from 'vue-router'
import login from "@/components/login";
import registration from "@/components/registration";
import home from "@/components/home";
import authorization from "@/components/authorization";
import {TOKEN} from "@/api/common";

const token = localStorage.getItem('token');
export default new VueRouter({
        routes: [
            {
                path: '',
                name: 'main',
                component: authorization,
                beforeEnter: (to, from, next) => {
                    TOKEN.post('/verify_token/', {token: token}).then(() => {
                        window.location.href = "/home"
                    }).catch(() => {
                        next()
                    })
                }
            },
            {
                path: '/home',
                name: 'home',
                component: home,
                beforeEnter: (to, from, next) => {
                    TOKEN.post('/verify_token/', {token: token}).then(() => {
                        next();
                    }).catch(() => {
                        window.location.href = "/login";
                    })

                }
            },
            {
                path: '/signup',
                name: 'reg',
                component: registration
            },
            {
                path: '/login',
                name: 'login',
                component: login,
                beforeEnter: (to, from, next) => {
                    TOKEN.post('/verify_token/', {token: token}).then(() => {
                        window.location.href = "/home"
                    }).catch(() => {
                        next();
                    })

                }
            }
        ],
        //отключение хеша '#'
        mode: 'history'
    }
)