export {};

// 不传递参数的方法装饰器
// 拦截目标类的方法，帮目标类的方法做一些前置工作或后置工作
/**
 *
 * @param targetClassPrototype 类的原型对象 [Person.prototype]
 * @param methodName 函数名
 * @param descriptor 函数的数据属性
 */
function funDecorator(
  targetClassPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(methodName, "methodName");
  descriptor.value(); // 执行被装饰器所修饰的函数
}

class Person {
  constructor(public name: string, public age: number) {}
  @funDecorator
  foo() {
    console.log("hello world");
  }
}
