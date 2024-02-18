export {};

class Demo {
  constructor(public user: string) {
    console.log(this, "this");
  }
}

const r = new Demo("123");

// 平淡是生活的解药
