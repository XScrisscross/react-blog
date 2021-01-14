// books 模块路由
export default [
  {
    name: 'book',
    component: () => import('~views/book/Book'),
  },
  {
    name: 'book2',
    component: () => import('~views/book/Book'),
  },
  {
    name: 'book3',
    component: () => import('~views/book/Book'),
  },
]
