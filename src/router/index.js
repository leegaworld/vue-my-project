import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout/Layout';
import CompanyInfo from '@/components/Information/Company/CompanyInfo';
import FilteredTableDisplay from '@/components/Tests/FilteredTableDisplay';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
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
