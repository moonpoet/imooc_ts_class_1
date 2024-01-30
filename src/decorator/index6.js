"use strict";
// 方法装饰器的前置拦截和后置拦截
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length, // 4
            r =
                c < 3
                    ? target
                    : desc === null
                        ? (desc = Object.getOwnPropertyDescriptor(target, key)) // 满足方法装饰器，获取该方法的数据属性
                        : desc,
            d;
        const r1 = Object.getOwnPropertyDescriptor(target, key)
        // 取了两次数据属性后比较发现并不相同，所以每次都是开辟了一个新的空间
        console.log(r === r1, '---------------');
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    // d(target, key, r)传递给方法装饰器的参数
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        // 为什么是方法拦截器时要执行Object.defineProperty(target, key, r)呢
        // 为什么如果不执行这行代码方法拦截器就会失效呢
        // 由上面r和r1的比较结果知道r是一个完全独立的对象，和定义在target上的key的数据属性是完全不同的，所以要执行Object.defineProperty(target, key, r)来覆盖定义在target上的key的数据属性，这就是答案
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
Object.defineProperty(exports, "__esModule", { value: true });
function funDecorator(params) {
    return function (targetClassPrototype, methodName, descriptor) {
        var copyFun = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("前置拦截"); // 在这里所执行的操作就是前置拦截
            console.log(this, "this-----this");
            copyFun.call.apply(copyFun, __spreadArray([this], args, false)); // 前置拦截之后再去执行更改指向前的函数，也就是定义在类中的foo函数
            console.log("后置拦截"); // 函数执行完后的操作就是后置拦截
        };
    };
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.foo = function (args) {
        console.log("hello world");
        console.log(args);
        console.log(this.age);
        console.log(this.name);
    };
    __decorate(
        [funDecorator("传递参数的方法装饰器")],
        Person.prototype,
        "foo",
        null
    );
    return Person;
})();
var person = new Person("小明", 18);
// !!!调用foo函数时，因为使用了装饰器，且在装饰器内部改变了descriptor.value，所以执行新的descriptor.value所指向的函数, 这是因为装饰器底层源码做了修改，下一节分析源码就会发现
person.foo("努力, 奋斗");
