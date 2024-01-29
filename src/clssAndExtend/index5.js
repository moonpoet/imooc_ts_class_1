// part1: Object.setPrototypeOf和Object.create的不同
const obj = { sex: 'man' }

Object.setPrototypeOf(obj, { name: 'obj' })

console.log(obj, 'obj');

function extend(Son, Person) {
  Object.setPrototypeOf(Son.prototype, Person.prototype)
  // Son.prototype.__proto__ = Person.prototype
}
// Son.prototype = new Middle() 这种方式会覆盖之前定义在Son.prototype上的方法, 但setPrototypeOf方式不会


// part2: 如何继承父类中的静态属性及其静态方法 1
function Son(age) { }
Son.sex = 'women'

function Parent() { }
Parent.job = 'soft'
Object.setPrototypeOf(Son, Parent)

for (const key in Son) {
  // console.log(key, 'key2'); => 除了打印自身静态属性, 父类中的静态属性也会被打印

  // if (Object.hasOwnProperty.call(Son, key)) { => 判断是否是自身的属性 
  //   console.log(key, 'key1');
  // }
  if (!Object.hasOwnProperty.call(Son, key)) {
    Son[key] = Parent[key]
  }
}
console.log(new Son(), 'new Son');
console.log(Son.job, 'Son.job');