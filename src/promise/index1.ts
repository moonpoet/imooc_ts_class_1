// 手写promise
export {};

type Status = "pending" | "fulfilled" | "rejected";
type ResolveFunType = (value: any) => any;
type RejectFunType = (value: any) => any;
type ExecutorType = (resolve: ResolveFunType, reject: RejectFunType) => void;

class MyPromise {
  public status: Status = "pending";
  public resolveValue: any;
  public rejectError: any;
  public successFnList: Array<(...args: any) => any> = [];
  public failFnList: Array<(...args: any) => any> = [];

  constructor(execute: ExecutorType) {
    try {
      execute(this.resolve, this.reject);
    } catch (error) {
      this.status = "pending"; // 防止状态更改后报错, 所以需要重新赋值
      this.reject(error);
      // throw Error((error as any).toString()); 阻止后续链式调用的代码执行
    }
  }

  resolve: ResolveFunType = (value) => {
    if (this.status === "pending") {
      this.status = "fulfilled";
      this.resolveValue = value;
      this.successFnList.forEach((fn) => {
        // 订阅
        fn(value);
      });
    }
  };
  reject: RejectFunType = (error) => {
    if (this.status === "pending") {
      this.status = "rejected";
      this.rejectError = error;
      this.failFnList.forEach((fn) => {
        fn(error);
      });
    }
  };

  then(resolveThen: ResolveFunType, rejectThen?: RejectFunType) {
    // then级联调用时, 这里有两个promise实例
    return new Promise((resolve, reject) => {
      if (this.status === "fulfilled") {
        const res = resolveThen(this.resolveValue);
        resolve(res);
      }
      if (this.status === "rejected") {
        const error = rejectThen?.(this.rejectError);
        reject(error);
      }
      // 异步, 发布
      if (this.status === "pending") {
        this.successFnList.push((value) => {
          // 这个value可传可不传, 因为this就是调用then的promise实例, 通过this.resolveValue也可获取值
          const res = resolveThen(value);
          if (res instanceof MyPromise) {
            res.then(
              (ret) => {
                resolve(ret);
              },
              (error) => {
                reject(error);
              },
            );
            return;
          }
          resolve(res);
        });
        rejectThen && this.failFnList.push(rejectThen);
      }
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("1111111");
  }, 100);
});

const p1 = p.then((res) => {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("2222222");
    }, 200);
  });
});

p1.then((res) => {
  console.log(res);
});

// p.then((value) => {
//   console.log(value, "第一个then执行");
//   return "2222222";
// }).then((value) => {
//   console.log(value, "第二个then执行");
// });
