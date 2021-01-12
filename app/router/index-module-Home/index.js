// home 模块路由
export default {
  name: 'Home',
  path: '/home',
  component: () => import('~views/home/Home'),
}
