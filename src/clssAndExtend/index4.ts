// 继承
class Parent {
  constructor(
    public names: string,
    public age: number,
  ) {}

  public getName() {
    console.log("hello world");
  }
}

class Son1 extends Parent {
  constructor(...args: any[]) {
    // @ts-ignore
    super(...args);
  }
}

const son1 = new Son1("张三", 18);

class Son extends Parent {
  public sex;

  constructor(names: string, age: number, sex: string) {
    // 将属性传递到父类中, 给子类实例对象属性赋值
    // 相当于Parent.call(this, names, age);
    super(names, age);
    this.sex = sex;
  }

  public getName() {
    // 继承可重写父类方法, 通过super可以调用父类方法
    super.getName();
    console.log("fighting");
  }
}

const son = new Son("张三", 18, "男");
console.log(son);
son.getName();

// notes:
// class Parent {
//   public names: string;
//   public age: number;
//   constructor(names: string, age: number) {
//     this.names = names;
//     this.age = age;
//   }
// }
//   public getName() {
//     console.log("hello world");
//   }
// }
// 1. 父类中抽离一些公用的属性, 在constructor中给this对象赋值
// 2. 子类中通过super调用父类方法, 并传入参数, 其实更改了this指向, this指向的是子类的实例对象
// 3. 所以父类中的this赋值其实是给子类的实例对象赋值, 也就是给子类的实例对象的属性赋值
// 4. 也就是说子类实例对象中有一部分属性赋值操作是在父类中进行的, 另一部分是在自己构造函数的constructor构造器中进行
// 5. 这就是继承中super关键词的本质

// 常见的访问修饰符：public, static, private, protected

// review ----------------------------------------- complete
