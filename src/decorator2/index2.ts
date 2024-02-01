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
