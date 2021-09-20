export function chunk<T>(arr: Array<T>, size: number): Array<Array<T>> {
  size = size || 1;
  //
  const result = [];

  // 我这里能想到的是遍历
  const l = arr.length; //数组的长度
  const s = Math.ceil(l / size); //  假如我们有长度为10的数组，size传入的是3，是要分成4个自数组的。
  for (let i = 0; i < s; i++) {
    result[i] = arr.slice(size * i, size * (i + 1));
  }
  return result;
}

export function newArr(fn: Function | null, len: number) {
  return Array.apply(null, Array(len)).map(
    typeof fn === "function" ? fn() : () => fn
  );
}
/**
 * 数字判断空
 * @param arr
 * @returns
 */
export const isEmpty = (arr: any) => !Array.isArray(arr) || arr.length === 0;

/**
 * 克隆数组
 * @param arr
 * @returns
 */
export const clone = <T extends any>(arr: Array<T>): Array<T> => [...arr];

/**
 * 找到数组中最大值对应的索引
 * @param arr
 * @returns
 */
export const indexOfMax = <T extends any>(arr: Array<T>): number =>
  arr.reduce<number>((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);

/**
 * 最小值对应的索引;
 * @param arr
 * @returns
 */
export const indexOfMin = <T extends any>(arr: Array<T>): number =>
  arr.reduce<number>((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);

/**
 *
 * @param a
 * @param arr
 * @returns
 */
export const getIntersection = (a: Array<any>, ...arr: Array<any>) =>
  [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));

/**
 * 按键对一组对象进行分组
 * @param arr
 * @param key
 * @returns
 */
export const groupBy = (arr: Array<any>, key: any) =>
  arr.reduce<{ [key: string]: any }>(
    (acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc),
    {}
  );
/**
 * 删除数组中的重复值
 * @param arr
 * @returns
 */
export const removeDuplicate = <T extends any>(arr: Array<T>): Array<T> =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

/**
 * 按给定的键对数组中的项进行排序
 * @param arr
 * @param k
 * @returns
 */
export const sortBy = <T, K extends keyof T>(arr: Array<T>, k: K) =>
  arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
