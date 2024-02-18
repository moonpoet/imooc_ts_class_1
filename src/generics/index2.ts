function isString(params: any): params is string {
  // 类型保护
  return typeof params === "string";
}

// 泛型函数重载, 就是在之前函数重载的基础上添加了泛型
function foo(a: string, b: number): string;
function foo<T>(c: T): T[];
function foo(p1: any, p2?: number) {
  if (isString(p1)) {
    return p1.slice(0, p2);
  }
  return [p1];
}

const r = foo("123", 2);
const r1 = foo(0);

export {};

// !!!什么是泛型函数重载?
// 就是当函数所接收的参数类型不同时, 分别对不同的参数类型进行定义(重载签名), 之后通过实现签名来实现函数体, 从而可以很好的保证传入不同类型的参数时能得到正确的返回值类型
// 重载签名用于类型定义, 实现签名用于函数具体实现, 两者共同配合
