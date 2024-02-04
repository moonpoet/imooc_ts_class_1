interface Hello {
  hello: string;
}

// interface或type不需要加declare修饰符
declare function Chen(): string;

declare function chen(): number;

declare namespace Something {
  export type foo = () => number;
}
