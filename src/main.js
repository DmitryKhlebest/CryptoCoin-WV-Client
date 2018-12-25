/* eslint-disable no-unused-vars */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'
import VueGoodTable from 'vue-good-table';
Vue.use(VueGoodTable);
 
// Icons
import "./static/css/linearicons.css";
import "./static/css/font-awesome.min.css";
// CSS
import "./static/css/bootstrap.min.css";
import "./static/css/owl.carousel.min.css";
import "./static/css/animate.min.css";
import "./static/css/magnific-popup.css";
import "./static/css/main-color1.css";
// JS
import "./static/js/jquery-2.2.4.min.js";
import "./static/js/bootstrap.min.js";
import "./static/js/owl.carousel.min.js";
import "./static/js/jquery.marquee.min.js";
import "./static/js/smooth-scroll.min.js";
import "./static/js/jquery.magnific-popup.min.js";
import "./static/js/jquery.parallax.min.js";
import "./static/js/scrolla.jquery.min.js";
import "./static/js/jquery.waypoints.min.js";
import "./static/js/jquery.counterup.min.js";
import "./static/js/imagesloaded.pkgd.min.js";
// import "./static/js/main.js";

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
