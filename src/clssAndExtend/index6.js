function Son(age) { }
Son.sex = 'women'
Son.way = 'car'

function Parent() { }
Parent.job = 'soft'
Parent.height = '170cm'

// part1: 如何继承父类中的静态属性及其静态方法 2
// Object.keys不会查找父类属性
// console.log(Object.keys(Son), 'keys');
// Object.keys(Parent).forEach(key => Son[key] = Parent[key])
// console.log(new Son(), 'new Son');

// part2: 如何继承父类中的静态属性及其静态方法 3
Object.setPrototypeOf(Son, Parent)
console.log(Son.height, 'son.job');

// // part3: 手写extendStatic函数