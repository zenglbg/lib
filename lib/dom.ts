/**
 * 检查一个元素是否被聚焦
 * @param ele
 * @returns
 */
export const hasFocus = (ele: Element) => ele === document.activeElement;

/**
 * 检查用户是否滚动到页面底部
 * @returns
 */
export const isAtBottom = () =>
  document.documentElement.clientHeight + window.scrollY >=
  document.documentElement.scrollHeight;

// export const siblings = (ele: HTMLElement) => {
//   const targetElement: HTMLElement | null = ele;

//   if (targetElement !== null) {
//     return [].slice
//       .call(targetElement.parentElement.children)
//       .filter((child) => child !== ele);
//   }
// };

/**
 * 获取元素相对于文档的位置
 * @param ele
 * @returns
 */
export const getPosition = (ele: Element) => {
  var r = ele.getBoundingClientRect();
  return {
    left: r.left + window.scrollX,
    top: r.top + window.scrollY,
  };
};

/**
 * 在另一个元素之后插入一个元素
 * @param ele
 * @param anotherEle
 * @returns
 */
// const insertAfter = (ele: HTMLElement, anotherEle: HTMLElement) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);

/**
 * 在其他元素之前插入一个元素
 * @param ele
 * @param anotherEle
 * @returns
 */
// const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);

/**
 * 在元素后面插入给定的 HTML
 * @param html
 * @param ele
 * @returns
 */
export const insertHtmlAfter = (html: string, ele: Element) =>
  ele.insertAdjacentHTML("afterend", html);

/**
 * 在元素之前插入给定的 HTML
 * @param html
 * @param ele
 * @returns
 */
export const insertHtmlBefore = (html: string, ele: Element) =>
  ele.insertAdjacentHTML("beforebegin", html);

/**
 * 滚动到页面顶部（返回顶部）
 * @returns
 */
export const go2Top = () => window.scrollTo(0, 0);
