// 创建一个发布订阅中心  原型对象的方式实现还是闭包的方式实现 ??
const Observer = function (role) {
  // init
  // 存放角色信息
  this.role = []
  // 存放分发信息
  this.distributeMsg = []
  // 存放分发者
  this.distributeRole = []
  // 存放接收者
  this.distributeRole = []
  // 存放管理员
  this.adminRole = []

  //
  this.initRole(role)
}

Object.assign(Observer.prototype, {
  // 初始化角色
  initRole(role) {
    if (role && typeof role === 'object') {
      this.role.push(role)
      this.analyseRole(role)
      return
    }
    console.log('订阅失败')
  },
  // 订阅
  subscrib() {},
  // 取消订阅
  // 消息分发
  // 权限判断
  // 角色识别
  analyseRole(role) {
    if (role.authority) {
    }
  },
})

// 创建一个订阅者
const subscriber = {
  name: 'mingzi',
  authority: 'adimin',
  distributeMsg: {
    axingwei() {
      console.log('axingwei');
    }
  },
}
