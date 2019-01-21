import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
        },
        {
            path: '/proposal/:id',
            name: 'proposal',
            props: true,
            component: () =>
                import(/* webpackChunkName: "proposal" */ './views/Proposal.vue')
        },
        {
            path: '/server/:id',
            name: 'server',
            props: true,
            component: () =>
                import(/* webpackChunkName: "server" */ './views/Server.vue')
        },
        {
            path: '/user/:id',
            name: 'user',
            props: true,
            component: () =>
                import(/* webpackChunkName: "user" */ './views/User.vue')
        }
    ]
});
