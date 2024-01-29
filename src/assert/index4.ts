// implements修饰符
interface People {
  foo(): void;
}
interface Person {
  bar(): void;
}

class My {
  foo() {
    console.log("foo");
  }
}
// 使用implements修饰符可以使用接口去限制一个类的形状
class Student extends My implements People, Person {
  bar() {
    console.log("bar");
  }
  baz() {
    console.log("baz");
  }
}

// 也就是说Student类中必须有foo和bar方法, 哪怕是继承自父类的也是可以的
// 但是有个问题, Student中除了foo和bar是必须存在之外, 也可以多定义一些别的, 如baz, baz在接口中并没有定义, 但是依然可以使用, 这会不会是一个问题呢
