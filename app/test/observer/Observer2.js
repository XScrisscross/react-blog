
msg = '全局发布的消息'
// 创建一个简单的发布订阅模式
const Observer = function (role) {
  // init
  this.distributeList = []

  this.msg = '发布的消息'
}

Object.assign(Observer.prototype, {
  // 订阅
  subscrib(name, fn) {
    this.distributeList = [...this.distributeList, { name, fn }]
  },
  // 取消订阅
  removeSuscrib(name) {
    this.distributeList = this.distributeList.filter((item) => item.name !== name)
  },
  // 消息分发
  distribute() {
    this.distributeList.forEach(function (item) {
      item.fn.call(window, this.msg)
      // item.fn(this.msg)
    })
  },
})



const ob = new Observer()

ob.subscrib('1', function (data) {
  console.log(data)
})
ob.subscrib('2', function (data) {
  console.log(data)
})
ob.subscrib('3', function (data) {
  console.log(data)
})
ob.removeSuscrib('3')

ob.distribute()
