import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login/Login';
import Layout from '@/components/Layout/Layout';
import CompanyInfo from '@/components/Information/Company/CompanyInfo';
import FilteredTableDisplay from '@/components/Tests/FilteredTableDisplay';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login/:token',
      name: 'Login',
      component: Login,
      props: token,
    },
    {
      path: '/customs',
      name: 'Customs',
      component: Layout,
    },
    {
      path: '/information',
      component: Layout,
      children: [
        {
          path: 'company',
          name: 'CompanyInfo',
          component: CompanyInfo,
        },
        {
          path: 'mypage',
          name: 'MyPage',
          component: FilteredTableDisplay,
        },
      ],
    },
  ],
});
