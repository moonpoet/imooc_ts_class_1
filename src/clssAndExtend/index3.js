// part1: 寄生组合式继承
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

function Son(name, age) {
  // 借用父级类给子类实例对象添加属性和方法
  Parent.call(this, name, age);
  this.son_name = name;
  this.son_age = age;
}

function Middle() { }

// core code
Middle.prototype = Parent.prototype;
Son.prototype = new Middle();



// part2: 寄生组合式继承 封装 这个方法其实就是Object.create的具体实现
function _extend(parent, son) {
  function Middle() {
    this.constructor = son;
  }
  Middle.prototype = parent.prototype;
  return new Middle();
}
// use
Son.prototype = _extend(Parent);


// part3: 使用Object.create来进行实现
// const obj = Object.create({ name: 'chen' }, { age: { value: 30 } })
Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son

// review ----------------------------------------- complete