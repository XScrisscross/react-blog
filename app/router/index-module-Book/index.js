// books 模块路由
export default {
  name: 'Book',
  path: '/book',
  component: () => import('~views/book/Book'),
}
