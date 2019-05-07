// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

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

Vue.config.productionTip = true;

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

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
