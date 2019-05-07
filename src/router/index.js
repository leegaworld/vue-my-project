import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout/Layout';
import CompanyInfo from '@/components/Information/Company/CompanyInfo';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
        },
        {
            path: '/information',
            component: Layout,
            children: [
                {
                    path: 'company',
                    name: 'companyInfo',
                    component: CompanyInfo,
                },
            ],
        },
    ],
});
