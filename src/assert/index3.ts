// 抽象类, 通过添加一个abstract修饰符，声明这个类是一个抽象类
abstract class People {
  public abstract say(): void; // 声明抽象方法, 凡事继承该类的子类都要实现该方法, 抽象方法没有方法体
  public eat() {
    console.log("people eat");
  }
}

class ChinaPeople extends People {
  public say() {
    console.log("ChinaPeople say");
  }
}

const china = new ChinaPeople();
china.say();

export {};

// 1. 抽象类不能实例化
// 2. 抽象类可以声明抽象方法,
// 3. 其他方面和普通类没有区别, 可以继承, 可以有静态属性和静态方法
// 4. 抽象类通常用来充当父类, 当抽象类中把一个方法定义为抽象方法, 那么会强制所有继承该类的子类都要实现这个方法
// 5. 比较适合与多态进行结合
// const p = new People();

interface IPeople {
  say(): void;
  eat(): void;
  sleep(): void;
}

abstract class Person implements IPeople {
  say(): void {
    throw new Error("Method not implemented.");
  }
  abstract eat(): void;
  abstract sleep(): void;
}

class Student extends Person {
  eat(): void {
    console.log("student eat");
  }
  sleep(): void {
    console.log("student sleep");
  }
}
