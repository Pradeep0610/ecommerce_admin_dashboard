import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../layouts/main/Main.vue'),
    children: [
      {
        path: '/',
        redirect: '/dashboard/ecommerce'
      },
      {
        path: '/dashboard/ecommerce',
        name: 'Home',
        component: () => import('../views/dashboard/eCommerce.vue'),
        meta: {
          rule: 'admin'
        }
      },

      //Application Routes
      {
        path: '/apps/eCommerce/shop',
        name: 'Shop',
        component: () => import('../views/apps/eCommerce/Shop.vue'),
        meta: {
          breadcrumb: [
            { title: 'Home', url: '/' },
            { title: 'eCommerce' },
            { title: 'Shop', active: true },
          ],
          pageTitle: 'Shop',
          rule: 'editor'
        }
      },
      {
        path: '/apps/eCommerce/checkout',
        name: 'Checkout',
        component: () => import('../views/apps/eCommerce/Checkout.vue'),
        meta: {
          breadcrumb: [
            { title: 'Home', url: '/' },
            { title: 'eCommerce' },
            { title: 'Checkout', active: true },
          ],
          pageTitle: 'Checkout',
          rule: 'editor'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
