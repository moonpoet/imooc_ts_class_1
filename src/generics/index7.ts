// Pick, Omit, Partial, Required, Readonly
// Extract, Exclude, Record
// 请手写这些高级类型的类型体操

// ts函数中的解构参数
type Person = {
  name: string;
  age: number;
};

//  Person定义的是前面参数的类型，无论你是否对参数进行解构
function printPerson({ name, age }: Person) {
  console.log(name, age);
}

printPerson({ name: "tom", age: 20 });

export {};

// 回调函数中对象参数的解构

type Fun = (a: Person) => string;
// 使用这种方式定义函数，函数体中其实可以不用再去进行定义了,函数体中的类型必须和定义的Fun保持一致，所以函数体中的参数使用解构并不会出错
const fun: Fun = ({ name, age }) => {
  return "";
};

// 这种方式可以用于定义对象或者数组
const r: Record<string, any> = [1, 2, 3];
const r1: Record<string, any> = { a: 1, b: 2, c: 3 };

// 请使用ts写一个深拷贝函数

// 这种用法还熟悉吗？
type P1 = {
  name: string;
  age: number;
};

type Add<T extends object, K extends keyof any, V> = Omit<
  T & { [P in K]: V },
  never
>;

type R1 = Add<P1, "job", string>;
const _r: R1 = {
  name: "tom",
  age: 20,
  job: "teacher",
};
