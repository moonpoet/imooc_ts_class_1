// Record

interface Person {
  name: string;
}

// 定义一个特定接口的数组1
const people: Person[] = [{ name: "张三" }, { name: "李四" }, { name: "王五" }];
// 定义一个特定接口的数组2
const people1: Array<Person> = [
  { name: "张三" },
  { name: "李四" },
  { name: "王五" },
];
// 定义一个特定接口的数组3 注意这种方式的定义, 虽然可以但是很少这么做, 知道为什么可以这么做就行
const people2: Record<number, Person> = [
  { name: "张三" },
  { name: "李四" },
  { name: "王五" },
];

type R = Record<number, Person>;

// type R1 = keyof any // string | number | symbol
type MyRecord<T extends keyof any, U> = {
  [K in T]: U;
};
export {};

// Record映射出来的类型可以对对象进行定义, 也可以对数组进行定义, 这些都是可以的

// 虽说定义了key为string, 但是如果使用数字, 布尔值或者Symbol来作为key依然不会出错
const obj1: Record<string, string> = {
  name: "",
  1: "",
  true: "",
  [Symbol("a")]: "",
};

// 其实从某种意义上来说，这个也可以作为Record的类型定义
type OtherRecord<T> = {
  [K in keyof any]: T;
};

// Record<string, any>这个就可以对所有的对象进行定义
// 无论对象的key是什么类型，string可以概括所有key的类型

// Record<number, any>不仅可以来描述一个对象，也可以对数组进行描述

// 可以赋初始值为空对象，之后往其内部添加其他属性，这是一个比较有用的小技巧
// 如果定义类型为object就无法做到这一点
const o: Record<string, any> = {};
o.name = "";

// Record可以用于定义对象类型，在工作中使用很广泛

type A = object;
type B = Record<string, any>;
