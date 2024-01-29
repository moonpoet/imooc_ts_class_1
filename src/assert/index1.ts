// 类型断言
class Parent {
  public total = 20;
}

class Son extends Parent {
  foo() {
    console.log(this.total, "1");
  }
}

// const son = <Parent>new Son();
// const son = new Son() as Parent;
// console.log(son instanceof Parent, "result");

const son = new Son();

son.foo();

export {};
