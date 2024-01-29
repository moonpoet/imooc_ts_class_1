// Exclude 排除
// Extract 提取

type R = Exclude<"name" | "age", "name">;
type R1 = Extract<"name" | "age", "name">;

// 记住Extract的类型实现, 以及提取的含义
type MyExtract<T, U> = T extends U ? T : never;

type R2 = "name" | never;

export {};

interface P1 {
  name: string;
  age: number;
}
interface P2 {
  name: string;
  job: string;
}
// 求在p1中存在，在p2中不存在的属性
type R3 = Exclude<keyof P1, keyof P2>; // 'age'
type _R3 = Extract<keyof P1, keyof P2>; // 'name'
type __R3 = Exclude<keyof P2, keyof P1>; // 'job'
type ___R3 = Extract<keyof P2, keyof P1>; // 'name'

type R4 = keyof any; // string | number | symbol

const exampleObj = {
  name: "John",
  age: 25,
  0: "zero",
  1: "one",
  [Symbol("key")]: "symbol",
};

type R5 = keyof typeof exampleObj; // symbol | 0 | "name" | "age" | 1
