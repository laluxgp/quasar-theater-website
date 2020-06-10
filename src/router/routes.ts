import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  /* {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    // children: [{ path: '', component: () => import('pages/Index.vue') }]
  } */
  {
    name: '',
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      // {
      //   path: '',
      //   redirect: { name: 'home' }
      // },
      {
        name: 'home',
        path: '',
        component: () => import('pages/Home.vue'),
        meta: {
          title: 'Home | Theaters'
        }
      },
      {
        name: 'contactus',
        path: '/contactus',
        component: () => import('pages/ContactUs.vue'),
        meta: {
          title: 'Contact Us | Theaters'
        }
      }
    ],
    meta: {
      title: 'Home | Theaters'
    }
  },
  {
    name: 'watchnow',
    path: '/watchnow',
    component: () => import('layouts/WatchNowLayout.vue'),
    children: [
      { path: '/watchnow', component: () => import('pages/WatchNow.vue') }
    ],
    meta: {
      title: 'Watch Now | Theaters'
    }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
