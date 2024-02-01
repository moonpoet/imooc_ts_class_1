// 属性装饰器 => 方法参数装饰器 => 方法装饰器 => 构造器装饰器 => 类装饰器

// 类方法参数装饰器
function UrlParams(params: string) {
  return function (
    targetClassPrototype: any,
    methodName: string,
    paramIndex: number
  ) {
    console.log(params, "params");
    console.log(targetClassPrototype, "targetClassPrototype");
    console.log(methodName, "methodName");
    console.log(paramIndex, "paramIndex");
  };
}

class Test {
  public username: string = 'hello world';

  public sayHi(name: string, @UrlParams("方法参数装饰器") age: number) {
    console.log(`Hi`);
  }
}

// 只有编译为es5才能获取, 原因是for-in在es5和6上在处理类属性上存在差异
for (const arrayKey in Test.prototype) {
  console.log(arrayKey, 'arrayKey')
}

// => es6用法
// Object.getOwnPropertyNames(Test.prototype).forEach(arrayKey => {
//   console.log(arrayKey, 'arrayKey (ES5/ES6)');
// });
//
// Reflect.ownKeys(Test.prototype).forEach(arrayKey => {
//   console.log(arrayKey, 'arrayKey (ES5/ES6)');
// });

// Reflect.ownKeys和Object.keys的区别, 见chatGPT
const obj = {name: 'chen', age: 16}
Reflect.ownKeys(obj).forEach(arrayKey => {
  console.log(arrayKey, 'arrayKey (ES5/ES6)');
})
let a = 'name'
// obj[a] = ''

// 为什么上面的写法会报错?因为a的类型为string,并不是name | age中的某项,取值的过程中类型也会对应判断
// const obj: Record<string, any> = { name: 'chen', age: 16 }如果这样定义就不会报错了
// 原因就是string不是name | age中的某项

obj['name'] = ''
type Obj = { name: string, age: number }
type R = Obj['name'] // 上面的报错类似于Obj[string]

export {}

// 如果定义了一个函数类型有多个参数, 那么定义函数体的时候参数可以少于类型中所定义的参数
// 也即少参数的函数可以赋给多参数的函数
