// 泛型工厂函数

// 1. 通用函数类型，Fun和Fn两者等价
type Fun = (...args: any) => any;

interface Fn {
  (...args: any): any;
}

// 2. 工厂函数类型 => 代表任意一个类的构造器的函数类型
type constructorType = new (...args: any) => any;

class Parent {
  constructor(public user: string) {}
}

console.log(Parent.name);
// const p = new Parent('tom');
// const a: Parent = new Parent('tom');
// 在一个类中, 如Parent类, Parent是一个变量, 也是一个构造函数, 可以通过new创建一个新的实例, 也是一个类型

// 3. 泛型工厂函数, 可用于规范一个类的形状
type constructorTypes<T> = new (...args: any) => T;

function createFactory<T>(paramsClass: constructorTypes<T>) {
  console.log(paramsClass.name, "被创建");
  return new paramsClass();
}

const r = createFactory<Parent>(Parent);
r.user;

// 4. 对于一个函数类型的定义有两种方式
// 4.1 在函数体中定义参数类型和返回值类型
function foo(a: string): string {
  return "";
}

// 4.2 先定义一个函数类型, 用这个函数类型来对函数创建时进行约束
// type Foo = (a: string) => string;
interface Foo {
  (a: string): string;
}

const foo1: Foo = () => {
  return "";
};
export {};

// 一个有关对象合并简单的类型体操
function merge<T extends object[]>(...args: T) {
  return args.reduce((prev, next) => {
    return Object.assign(prev, next);
  }, {}) as Merge<T>;
}

type Merge<T> = T extends [infer F, ...infer R] ? F & Merge<R> : {};

const ret = merge({ a: 1 }, { b: 2 }, { c: 3 });
