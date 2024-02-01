export {}

// 在接口中使用this
// 其实this就是Person类型, 也就是当前的这个接口类型
interface Person {
  name: string
  age: number
  sayHi(params: Person): this
}

const person: Person = {
  name: 'chen',
  age: 18,
  sayHi(person) {
    console.log('hello')
    console.log(this, 'this')
    console.log(this === person)
    return this
  }
}

const r = person.sayHi(person)
console.log(r === person)

// 给函数传递一个参数, 使类型不为string，而是值类型
function foo<T>(str: T): T {
  return str
}

// 在ts中, 注意let和const在定义变量时的类型是有区别的
// 使用let定义
let _r = foo('123') // string, 如果想得到123可以给泛型添加约束, T extends string
let __r = foo('123' as const) // 123
const ___r = foo('123') // 123

// 给泛型添加约束后, 如果传入123, 会将其推导为值类型而不是string
// 使用as const直接将其转化为值类型
// 使用const声明变量, 这个变量的类型本身就是值类型

