import Vue from 'vue'
import Router from 'vue-router'
import LogoIn from '@/layout/LogoIn.vue'
import LogoInSuccess from '@/layout/LogoSuccessful.vue'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const _import = file => () => import(`@/views/${file}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'GameCenter' },
      component: _import('index/index'),
      children: [
        { path: '/game_center', name: 'GameCenter', component: _import('index/components/GameCenter') },
        { path: '/user_center', name: 'UserCenter', component: _import('index/components/UserCenter') }
      ]
    },
    {
      path: '/logoin',
      name: 'logoin',
      component: LogoIn
    },
    {
      path: '/logo_success',
      name: 'logoinSuccess',
      component: LogoInSuccess
    },
    {
      path: '/setting',
      name: 'setting',
      component: _import('setting/index')
    },
    {
      path: '/getintegral',
      name: 'getintegral',
      component: _import('getintegral/index')
    },
    {
      path: '/record',
      name: 'record',
      component: _import('getintegral/components/record')
    },
    {
      path: '/beinvited',
      name: 'beinvited',
      component: _import('Beinvited/index')
    },
    {
      path: '/assets',
      name: 'assets',
      component: _import('AssetsDetail/index')
    },
    {
      path: '/currency',
      name: 'currency',
      component: _import('Currency/index')
    },
    {
      path: '/top_up',
      name: 'topUp',
      component: _import('TopUp/index')
    },
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: _import('withdrawal/index')
    }
  ]
})
