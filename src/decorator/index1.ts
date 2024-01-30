// 类装饰器

// tsc index1.ts --target ES5 --experimentalDecorators
// 装饰器在ts中仍然是一个实验性的功能，--experimentalDecorators用于在编译时对于包含装饰器的代码提供编译支持，使编译过程中不会出现error

// 不传递参数，编译后代码见index1.js
function classDecorator(targetClass: any) {
  const instance = new targetClass();
  instance.buy();
  console.log(targetClass.name);
}

@classDecorator
class Person {
  public job: string = "soft";
  constructor() {}
  buy() {
    console.log(this.job, "job");
  }
}

export {};
