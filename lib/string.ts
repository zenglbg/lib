/**
 * 将一个字符串转换为 camelCase
 * @param str
 * @returns
 */
export const toCamelCase = (str: string) =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));

/**
 * 将字符串转换为 PascalCase
 * @param str
 * @returns
 */
export const toPascalCase = (str: string) =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join("");

/**
 *  转义 HTML 特殊字符
 * @param str
 * @returns
 */
export const escape = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

/**
 * 将多个空格替换为单个空格
 * @param str
 * @returns
 */
export const replaceSpaces = (str: string) => str.replace(/\s\s+/g, " ");

/**
 * 在字母顺序中对文本文档的行进行排序
 * @param str
 * @returns
 */
export const sortLines = (str: string) => str.split(/\r?\n/).sort().join("\n");
