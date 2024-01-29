// 自定义守卫
// 只有当函数返回true时, 形参被确定为某个类型

// 实际项目开发中可封装对应函数来判断数据类型, 可以进行复用, 不用通过typeof来进行判断
function foo(params: any): params is string {
  return typeof params === "string";
}
function bar(a: any) {
  if (foo(a)) {
    // 由此推断a的类型为string, 从而可以使用string相关的方法
    console.log(a.length);
  }
}

// // !!! as const可以生成一个只读的值类型
const arr = [1, "hello", true] as const;

// 一个和函数结合的简单的类型体操
type Tail<T extends readonly any[]> = T extends readonly [infer _F, ...infer R]
  ? R
  : never;

function at<T extends readonly any[]>(params: T) {
  const [, ...rest] = params;
  return rest as Tail<T>;
}

const res = at(arr);
console.log(res, "res1");
