import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
// import Home from './views/Home.vue';

// import HomePage from '@/components/HomePage';
import HomePage from './views/HomePage.vue';
import SingIn from './views/SingIn';
import SingUp from './views/SingUp';
import SingOut from './views/SingOut';
import PersonalPage from './views/PersonalPage';
import MarketPage from './views/MarketPage';
import HistoryPage from './views/HistoryPage';
import NotFoundComponent from './views/NotFoundComponent';
// import User from "./user";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/home_page'
    },
    {
      path: '/home_page',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/signin',
      name: 'SingIn',
      component: SingIn
    },
    {
      path: '/signup',
      name: 'SingUp',
      component: SingUp
    },
    {
      path: '/personal_page',
      name: 'PersonalPage',
      component: PersonalPage,
      beforeEnter: requireAuth
    },
    {
      path: '/market_page',
      name: 'MarketPage',
      component: MarketPage,
      beforeEnter: requireAuth
    },
    {
      path: '/history_page',
      name: 'HistoryPage',
      component: HistoryPage,
      beforeEnter: requireAuth
    },
    {
      path: '/signout',
      name: 'SingOut',
      component: SingOut,
      beforeEnter: requireAuth
    },
    { path: '*', component: NotFoundComponent }
  ]
});

function requireAuth (to, from, next) {
  if (store.state.User)
    next();
  else
    next('/signin');
}
