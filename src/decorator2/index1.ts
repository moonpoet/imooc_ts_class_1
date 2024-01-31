// 属性装饰器 => 方法参数装饰器 => 方法装饰器 => 构造器装饰器 => 类装饰器

// 类方法参数装饰器
function UrlParams(params: string) {
  return function (
    targetClassPrototype: any,
    methodName: string,
    paramIndex: number
  ) {
    console.log(params, "params");
    console.log(targetClassPrototype, "targetClassPrototype");
    console.log(methodName, "methodName");
    console.log(paramIndex, "paramIndex");
  };
}

class Test {
  public sayHi(name: string, @UrlParams("方法参数装饰器") age: number) {
    console.log(`Hi`);
  }
}
