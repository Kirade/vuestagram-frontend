import Vue from 'vue';
import VueRouter from 'vue-router';

import BaseLayout from '@/layouts/Base';
import TimeLine from '@/pages/TimeLine';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Base',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'TimeLine',
        component: TimeLine,
      },
    ],
  },
  // {
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
