// 使用ts编写深拷贝函数
function foo<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => foo(item)) as T;
  }
  const cloneObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = foo(obj[key]);
    }
  }
  return cloneObj as T;
}
