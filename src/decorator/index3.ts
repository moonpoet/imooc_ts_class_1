// 泛型工厂类继承装饰器

// 使用装饰器实现当类被创建时输出日志语句

function logger<T extends new (...args: any) => any>(targetClass: T) {
  // 传递进来的targetClass肯定是一个类，我们使用泛型来接收一下这个类的类型，并给这个泛型进行约束
  class NewPerson extends targetClass {
    public test: string = "hello world";
    constructor(...args: any) {
      super(...args);
      console.log("实例化了", targetClass);
    }
    public getNow() {
      return new Date();
    }
  }
  return NewPerson;
  // 匿名类，其实编译后的代码中会自动加上一个类名，和这里的NewPerson没有区别
  // return class extends targetClass {
  //   constructor(...args: any) {
  //     super(...args);
  //     console.log("实例化了", targetClass);
  //   }
  // };
}

@logger
class Person {
  constructor(public name: string, public age: number) {}
}

const person = new Person("zhangsan", 18);
console.log((person as any).test, "----------");
console.log((person as any).getNow(), "----------");

// 如果new的是NewPerson类，那为什么没有test和getNow方法呢???
// 方法是有的，但是并没有类型提示，也就是说类型定义上有问题,但是始终没有办法将这个类型定义正确
// 难道只能使用as any吗
person.getNow();
// 因为现在处于编译期间，只有在运行后Person才会变为NewPerson，所以现在无法确定person上具有getNow方法

export {};

// 函数类型的定义方法真的很多
// const foo: (params: string) => string = (params: string) => {
//   return "foo";
// };
// const foo1: { (params: string): string } = (params: string) => {
//   return "foo";
// };
// function foo2(params: string): string {
//   return "foo";
// }

// 类装饰器已经学习完成
// /** 回车生成函数注释
