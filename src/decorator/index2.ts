// 传递参数的类装饰器，编译后代码见index2.js
function classDecorator1(params?: any) {
  return function (targetClass: any) {
    // const instance = new targetClass();
    // instance.buy();
    // console.log(targetClass.name);
    console.log(params, "params");
  };
}

@classDecorator1("传递参数的类装饰器")
class Person1 {
  public job: string = "soft";
  constructor() {}
  buy() {
    console.log(this.job, "job");
  }
}

type R = typeof Person1 extends new (...args: any) => Person1 ? true : false;
// typeof Person1和new (...args: any) => Person1两者是等价的

const r: Person1 = {
  job: "soft",
  buy() {
    console.log(this.job, "job");
  },
};

export {};
