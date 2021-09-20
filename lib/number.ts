/**
 * 用零作为整数的前缀
 * @param number
 * @param length
 * @returns
 */
export const prefixWithZeros = (number: number, length: number) =>
  (number / Math.pow(10, length)).toFixed(length).substr(2);

/**
 * 将数字四舍五入到给定的数字位数
 * @param number
 * @param length
 * @returns
 */
export const prefixWith45 = (number: number, length: number) =>
  (number / Math.pow(10, length)).toFixed(length).substr(2);
