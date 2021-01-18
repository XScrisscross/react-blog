// action 指令集
// 调用时action 等于 type 等于 actionfn
// 命名方式 actions_xxx
export default {
  getListDemoB: {
    key: 'getListDemoB',
    action: 'getListDemoBAction',
    reducer: 'getListDemoBReducer',
  },
  setListDemoB: {
    key: 'setListDemoB',
    action: 'setListDemoBAction',
    reducer: 'setListDemoBReducer',
  },
}
