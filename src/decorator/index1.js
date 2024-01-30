// 类装饰器
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        // 类装饰器只传递了两个参数
        var c = arguments.length, // 2
            r = // 所以r为target，也就是所传递进来的类参数
                c < 3
                    ? target
                    : desc === null // c为4且desc为null，表明这是一个方法装饰器
                        ? (desc = Object.getOwnPropertyDescriptor(target, key))
                        : desc,
            d; // 用于保存传递进来的装饰器数组当中的元素
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            // 元数据信息，本例中不涉及
            r = Reflect.decorate(decorators, target, key, desc);
        else
            // 装饰器循环，注意这里是倒着循环，说明如果有多个装饰器同时修饰，那么执行顺序是倒着执行
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    // d(r)把类传递到装饰器函数中
                    // d(target, key, r)方法装饰器的执行逻辑
                    // d(target, key)属性装饰器的执行逻辑
                    // 如果d()执行后没有返回值，注意后面的||，依然返回之前的r
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        console.log(r, 'rrrrrr'); // Person类
        // c > 3 && r && Object.defineProperty(target, key, r)这是执行语句，并不返回，真正返回的还是r
        // 但是这种语句真的不好理解
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
// 不传递参数
function classDecorator(targetClass) {
    var instance = new targetClass();
    instance.buy();
    console.log(targetClass.name);
}
var Person = /** @class */ (function () {
    function Person() {
        this.job = "soft";
    }
    Person.prototype.buy = function () {
        console.log(this.job, "job");
    };
    Person = __decorate([classDecorator], Person);
    return Person;
})();
// function classDecorator1(params?: any) {
//   return function (targetClass: any) {
//     // const instance = new targetClass();
//     // instance.buy();
//     // console.log(targetClass.name);
//     console.log(params, "params");
//   };
// }
// @classDecorator1("传递参数的类装饰器")
// class Person1 {
//   public job: string = "soft";
//   constructor() {}
//   buy() {
//     console.log(this.job, "job");
//   }
// }
