import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
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
        },
        {
            path: '/authRedirect',
            name: 'authRedirect',
            component: () =>
                import(/* webpackChunkName: "authRedirect" */ './views/Redirect.vue')
        }
    ]
});
router.afterEach((to, from) => {
    /* Getters aren't initialized at this point */
    if (
        !(
            to.path.includes('proposal') |
            to.path.includes('server') |
            to.path.includes('user') |
            to.path.includes('dashboard')
        )
    ) {
        return;
    }
    if (!store.state.auth['token']) {
        // TODO: USE STATE HERE!
        window.location.href = store.state.auth.url;
    }
});
export default router;
