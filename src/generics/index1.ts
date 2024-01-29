class Parent {
  static job: string = "soft";
  constructor(public user: string, public age: number) {}
  public getUser() {}
}

// => 当keyof使用在类上时, 会获取到类的公共属性和方法, 静态属性和方法不能获取
type R = keyof Parent; // user | age | getUser

const r: R = "getUser";

export {};
