// 类
class Person {
  constructor(public personName: string, public age: number) {}

  // 函数重载, 可以用在类中, 注意实现签名中的any类型定义
  foo(id: number): number[];
  foo(type: string, count: number): string[];
  foo(params: any, count?: number) {
    if (typeof params === "number") {
      return [1, 2, 3];
    } else {
      return ["a", "b", "c"].slice(0, count);
    }
  }
}

const person = new Person("chen", 0);
console.log(person);

export {};

// review ----------------------------------------- complete
