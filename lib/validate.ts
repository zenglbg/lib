export function isFunction(fn: any): boolean {
  return typeof fn === "function";
}
export function isNumber(num: any): boolean {
  return typeof num === "number";
}
export function isArray(arr: any): boolean {
  if (!Array.isArray) {
    return Object.prototype.toString.call(arr) === "[object Array]";
  }
  return Array.isArray(arr);
}
export function isString(value: any): boolean {
  return Object.prototype.toString.call(value).indexOf("String") > -1;
}
export function isBoolean(bol: any): boolean {
  return typeof bol === "boolean";
}
export function isDate(value: any): boolean {
  return value instanceof Date;
}
