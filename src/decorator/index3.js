"use strict";
// 泛型工厂类继承装饰器
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b)
                        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError(
                    "Class extends value " + String(b) + " is not a constructor or null"
                );
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype =
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
        };
    })();
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
Object.defineProperty(exports, "__esModule", { value: true });
// 使用装饰器实现当类被创建时输出日志语句
function logger(targetClass) {
    // 传递进来的targetClass肯定是一个类，我们使用泛型来接收一下这个类的类型，并给这个泛型进行约束
    var NewPerson = /** @class */ (function (_super) {
        __extends(NewPerson, _super);
        function NewPerson() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.test = "hello world";
            console.log("实例化了", targetClass);
            return _this;
        }
        NewPerson.prototype.getNow = function () {
            return new Date();
        };
        return NewPerson;
    })(targetClass);
    return NewPerson;
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person = __decorate([logger], Person);
    console.log(Person.test, 'test');
    return Person;
})();
var person = new Person("zhangsan", 18);
// 函数类型的定义方法真的很多
// const foo: (params: string) => string = (params: string) => {
//   return "foo";
// };
// const foo1: { (params: string): string } = (params: string) => {
//   return "foo";
// };
// function foo2(params: string): string {
//   return "foo";
// }
