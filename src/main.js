// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSession from 'vue-session';
import VueCookies from 'vue-cookies';
import cookie from 'cookie';
import VueCsrf from 'vue-csrf';


import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

import Button from 'bootstrap-vue/es/components/button';
import FormInput from 'bootstrap-vue/es/components/form-input';
import Nav from 'bootstrap-vue/es/components/nav';
import Navbar from 'bootstrap-vue/es/components/navbar';
import PaginationNav from 'bootstrap-vue/es/components/pagination-nav';
import Table from 'bootstrap-vue/es/components/table';
import BootstrapLayout from 'bootstrap-vue/es/components/layout';
import FormGroup from 'bootstrap-vue/es/components/form-group';
import InputGroup from 'bootstrap-vue/es/components/input-group';
import FormSelect from 'bootstrap-vue/es/components/form-select';
import Pagination from 'bootstrap-vue/es/components/pagination';
import Modal from 'bootstrap-vue/es/components/modal';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import FieldFormatter from './Plugins/FieldFormatter/FieldFormatter';
import AlertModal from './Plugins/AlertModal/AlertModal';

Vue.config.productionTip = true;

Vue.use(VueAxios, axios);
Vue.use(cookie, VueCookies, VueSession);

Vue.use(VueCsrf);

Vue.use(VueSidebarMenu);

Vue.use(Nav);
Vue.use(Navbar);
Vue.use(FormInput);
Vue.use(Button);
Vue.use(PaginationNav);
Vue.use(Table);
Vue.use(BootstrapLayout);
Vue.use(FormGroup);
Vue.use(InputGroup);
Vue.use(FormSelect);
Vue.use(Pagination);
Vue.use(Modal);

Vue.use(FieldFormatter, {
  opt1: true,
});

Vue.use(AlertModal);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
