// part1: 原型链继承
function Parent(name, age) {
    this.name = name;
    this.age = age;
}

function Son(name, age) {
    this.son_name = name;
    this.son_age = age;
}
const parent = new Parent('chen', 27)
const son = new Son('li', 20)
// 更改Son的原型对象不影响之前已经创建的实例
Son.prototype = parent
const son1 = new Son('wang', 19)

console.log(son, 'son');
console.log(Son.prototype, 'Son.prototype');
console.log(son1, 'son1');

// review ----------------------------------------- complete