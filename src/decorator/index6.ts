// 方法装饰器的前置拦截和后置拦截

export {};
function funDecorator(params: string) {
  return function (
    targetClassPrototype: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const copyFun = descriptor.value;
    descriptor.value = function (...args: string[]) {
      console.log("前置拦截"); // 在这里所执行的操作就是前置拦截
      console.log(this, "this-----this");
      copyFun.call(this, ...args); // 前置拦截之后再去执行更改指向前的函数，也就是定义在类中的foo函数
      console.log("后置拦截"); // 函数执行完后的操作就是后置拦截
    };
  };
}

class Person {
  constructor(public name: string, public age: number) {}
  @funDecorator("传递参数的方法装饰器")
  foo(args: string) {
    console.log("hello world");
    console.log(args);
    console.log(this.age);
    console.log(this.name);
  }
}

const person = new Person("小明", 18);

// !!!调用foo函数时，因为使用了装饰器，且在装饰器内部改变了descriptor.value，所以执行新的descriptor.value所指向的函数, 这是因为装饰器底层源码做了修改，下一节分析源码就会发现

// 原因是源码中的这行代码Object.defineProperty(target, key, r)
// 当改变descriptor.value后，使用defineProperty将获取后改变的数据属性重新定义到target中，所以当new得到的实例执行foo函数时，执行的是descriptor.value指向的新的函数，而不是之前的函数了
person.foo("努力, 奋斗");
