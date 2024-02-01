export {};

// 请写一个类型体操, 实现'/test/:id/:name' => { id: string, name: string }

// 思考这个类型体操是否可以继续优化?
type Handle<T extends string> = string extends T
  ? Record<string, any>
  : Record<HandleString<T>, string>;

type HandleString<T extends string> = T extends `${string}:${infer R}`
  ? R extends `${infer F}/:${string}`
    ? F | HandleString<R>
    : R
  : never;

type r = Handle<"/test/:id/:name/:job">;

const obj: Record<string, any> = {};
console.log(obj.name); // 取值未报错
// '/test/:id/:name' => { id: string, name: string }
// string => Record<string, any>
// 也就是当你如果没满足传入一个值类型, 那么我返回Record<string, any>, 那么外层对象取值也不会报错
// 待会可以将其加入到类型体操中
