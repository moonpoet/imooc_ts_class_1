// import demo from "Demo";

// 使用ts编写深拷贝函数
function foo<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => foo(item)) as T;
  }
  const cloneObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = foo(obj[key]);
    }
  }
  return cloneObj as T;
}

export {};

// any可以赋给任何类型, 任何类型也可以赋给any
// 任何类型可以赋给unknown, 但unknown不能被赋值给任何类型

type R = number & string; // never

// 枚举既是类型, 也是变量
enum Some {
  a = 1,
  b = 2,
}

function bar(params: Some) {
  // 当做类型使用
  if (params === Some.a) {
    // 当做变量使用
    // ...
  }
}

// bar(3) 报错, 只能传递1和2

console.log(Some.a, "aaa");
console.log(Some![1], "---"); // 枚举可以反向取值, 但是只有数字枚举可以

enum Other {
  a = "hello",
  b = "world",
}

// 字符串枚举无法反向取值
// console.log(Other["hello"]);

interface Person {
  name: string;
  age: number;

  [key: string]: any;
}

type baz = () => void;

interface _baz {
  (): void;
}

type Baz = {
  foo: () => void;
  bar(): void;
};

// 使用交叉类型缩小范围
type _R = string & "";
const r: _R = "";

// Hello来源于d.ts文件声明
const hello: Hello = {
  hello: "",
};

const demo: typeof Chen = () => {
  return "";
};

function chen() {
  return "";
}

// Something.foo();
// 注意declare namespace以及declare module的区别
