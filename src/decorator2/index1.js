// 属性装饰器 => 方法参数装饰器 => 方法装饰器 => 类装饰器
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };

// 类方法参数装饰器
function UrlParams(params) {
  return function (targetClassPrototype, methodName, paramIndex) {
    console.log(params, "params");
    console.log(targetClassPrototype, "targetClassPrototype");
    console.log(methodName, "methodName");
    console.log(paramIndex, "paramIndex");
  };
}

var Test = /** @class */ (function () {
  function Test() { }

  Test.prototype.sayHi = function (name, age) {
    console.log("Hi");
  };
  __decorate(
    [__param(1, UrlParams("方法参数装饰器"))],
    Test.prototype,
    "sayHi",
    null
  );
  return Test;
})();
