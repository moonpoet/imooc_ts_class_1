var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承
var Parent = /** @class */ (function () {
    function Parent(names, age) {
        this.names = names;
        this.age = age;
    }
    Parent.prototype.getName = function () {
        console.log("hello world");
    };
    return Parent;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(names, age, sex) {
        var _this = _super.call(this, names, age) || this;
        _this.sex = sex;
        return _this;
    }
    Son.prototype.getName = function () {
        _super.prototype.getName.call(this);
        console.log("fighting");
    };
    return Son;
}(Parent));
var son = new Son("张三", 18, "男");
console.log(son);
son.getName();
