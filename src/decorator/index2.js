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
// 传递参数的类装饰器，编译后代码见index2.js
function classDecorator1(params) {
    return function (targetClass) {
        // const instance = new targetClass();
        // instance.buy();
        // console.log(targetClass.name);
        console.log(params, "params");
    };
}
var Person1 = /** @class */ (function () {
    function Person1() {
        this.job = "soft";
    }
    Person1.prototype.buy = function () {
        console.log(this.job, "job");
    };
    // 和不传参的装饰器相比，不同就在于这里的传参，一个是直接传递函数，另一个是传递函数执行后返回的函数，别的过程都是相同的
    Person1 = __decorate([classDecorator1("传递参数的类装饰器")], Person1);
    return Person1;
})();
