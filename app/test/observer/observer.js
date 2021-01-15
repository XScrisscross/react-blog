//如下实现一个通用发布者
//定义发布者对象...{}是定义一个对象
var publisher = {
  subscribers: {
    any: [], //event type: subscribers
  },
  subscribe: function (fn, type) {
    type = type || 'any'
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  },
  unsubscribe: function (fn, type) {
    this.visitSubscribers('unsubscribe', fn, type)
  },
  publish: function (publication, type) {
    this.visitSubscribers('publish', publication, type)
  },
  visitSubscribers: function (action, arg, type) {
    var pubtype = type || 'any',
      subscribers = this.subscribers[pubtype],
      i,
      max = subscribers.length
    for (i = 0; i < max; i++) {
      if (action == 'publish') {
        subscribers[i](arg)
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1)
        }
      }
    }
  },
}
// 定义一个函数makePublisher()，它接受一个对象作为对象，通过把上述通用发布者的方法复制到该对象中，从而将其转换为一个发布者
function makePublisher(o) {
  var i
  for (i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
      o[i] = publisher[i]
    }
  }
  o.subscribers = { any: [] }
}
//实现paper对象
var paper = {
  daily: function () {
    this.publish('big news today')
  },
  monthly: function () {
    this.publish('interesting analysis', 'monthly')
  },
}
//将paper构造成一个发布者
makePublisher(paper)
//已经有了一个发布者。看看订阅对象joe，该对象有两个方法：
var joe = {
  drinkCoffee: function (paper) {
    console.log('Just read' + paper)
  },
  sundayPreNap: function (monthly) {
    console.log('About to fall asleep reading this' + monthly)
  },
}
//paper注册joe（即joe向paper订阅）
paper.subscribe(joe.drinkCoffee)
paper.subscribe(joe.sundayPreNap, 'monthly')
//即joe为默认“any”事件提供了一个可被调用的方法，而另一个可被调用的方法则用于当“monthly”类型的事件发生时的情况。现在让我们来触发一些事件：
paper.daily() //Just readbig news today
paper.daily() //Just readbig news today
paper.monthly() //About to fall asleep reading thisinteresting analysis
paper.monthly() //About to fall asleep reading thisinteresting analysis
paper.monthly()
