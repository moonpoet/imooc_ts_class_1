// 多态 1. 必须存在继承关系 2. 子类必须重写父类中的方法

// 两个子类中重写了父类中的eat()方法
class Parent {
  eat() {
    console.log("parent eat");
  }
}

class Child_1 extends Parent {
  eat() {
    console.log("child_1 eat");
  }
}

class Child_2 extends Parent {
  eat() {
    console.log("child_2 eat");
  }
}

class Demo {
  // params: Child_1 | Child_2 这样的类型定义的可扩展性并不是很好
  foo(params: Parent) {
    // 只能调用共同的方法, 无法调用子类中独有的方法
    // 如果想调用子类中独有的方法, 需使用instanceof, 结合类型守卫来使用
    params.eat();
    if (params instanceof Child_1) {
      // ...
    }
    if (params instanceof Child_2) {
      // ...
    }
  }
}

const demo = new Demo();
demo.foo(new Child_1());
demo.foo(new Child_2());

// let parent: Parent = new Child_1();
// parent.eat();
// parent = new Child_2();
// parent.eat();

export {};

// note: 我好像并没有理解到多态的精髓

// 如果只是单纯的通过上面的demo来理解多态
// 好像多态就是定义的时候将接口定义为可以满足多个子类实例, 如demo中的Parent
// 然后调用多个子类中共有的方法即可, 难道这就是多态吗?
// 所以对于多态的理解和使用仍然需要继续去进行探究
