export {};

// 传递参数的方法装饰器,和传递参数的类装饰器一样的写法

/**
 *
 * @param targetClassPrototype 类的原型对象 [Person.prototype]
 * @param methodName 函数名
 * @param descriptor 函数的数据属性
 */
function funDecorator(params: string) {
  return function (
    targetClassPrototype: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(params, "params");
    console.log(methodName, "methodName");
    descriptor.value(); // 执行被装饰器所修饰的函数
  };
}

class Person {
  constructor(public name: string, public age: number) {}
  @funDecorator("传递参数的方法装饰器")
  foo() {
    console.log("hello world");
  }
}
