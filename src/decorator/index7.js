"use strict";
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length, // 4
            r =
                c < 3
                    ? target
                    : desc === null
                        ? (desc = Object.getOwnPropertyDescriptor(target, key))
                        : desc,
            d;
        console.log(c, 'cccccccc');
        console.log(r, 'rrrrrrrr');
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
Object.defineProperty(exports, "__esModule", { value: true });
function log(targetClassPrototype, attrName) {
    console.log(attrName, "attrName");
}
var Person = /** @class */ (function () {
    function Person() {
        this.age = "hello";
    }
    __decorate([log], Person.prototype, "age", void 0);
    return Person;
})();
