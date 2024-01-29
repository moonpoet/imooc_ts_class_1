// infer关键词的使用

// 1. 这其实就是一个很简单的类型体操, 去推断函数类型的参数类型
type InferType<T> = T extends (params: infer P) => any ? P : T;

type Fun = (params: Function) => string;

type R = InferType<Fun>;

// 2. infer可以出现在泛型中, 从而可以推断传入的数据类型, 这一点你了解的并不深刻, 所以需要关注一下
type _R = Set<number>;

type InferR<T> = T extends Set<infer F> ? F : T;

type __R = InferR<_R>;

// 3. 需要掌握的是为什么得到的类型依然是一个数组, 而不是一个对象类型, 不能再忘记了
type A<T> = {
  [K in keyof T]: T[K];
};

type _C = A<[{ foo: string }, { bar: string }]>;
