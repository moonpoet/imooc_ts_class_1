// 类属性的装饰器, 相对来说就比较简单了
export {};

function log(targetClassPrototype: any, attrName: string) {
  console.log(attrName, "attrName");
}
class Person {
  @log
  public age: string = "hello";
}
