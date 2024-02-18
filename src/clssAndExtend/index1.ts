// part1: 类的单例模式1 => 调用时创建
class Person {
  static instance: Person;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      // new的时候会调用constructor构造器
      this.instance = new Person();
    }
    return this.instance;
  }
}

// private修饰符表示私有, public修饰符表示公开
// static修饰符表示静态, 实例不能访问静态属性或方法, 只能由类名调用
// !!!静态属性只能由类名或静态方法访问, 非静态方法不能访问静态属性

Person.getInstance();

export {};

// part2: 工作中, 我们会封装一些公用的方法, 其实我们可以将相同类型的方法封装在一个类中, 然后统一导出这个类, 相较于零散的创建函数也许这种方式更加优雅, 可以见如下代码
// 可以使用单例模式, 也可以不使用
export default class Time {
  private constructor() {}

  public static getNow() {
    return new Date().toLocaleString();
  }

  public static setDate(time: string) {
    return new Date(time);
  }
}

// other.ts
Time.getNow();

// part3: 类的单例模式2 => 立即创建 代码更加简洁
class Person_ {
  static instance: Person_ = new Person_();

  // 私有构造器, 外部不可以通过new进行实例化, 但是内部可以
  private constructor() {}
}

const person_ = Person_.instance;

// review ----------------------------------------- complete
