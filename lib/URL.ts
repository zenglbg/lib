/**
 * 将 URL 参数转换为对象
 * @param query
 * @returns
 */
export const getUrlParams = (query: string) =>
  Array.from(new URLSearchParams(query).entries()).reduce<{
    [key: string]: any;
  }>(
    (p, [k, v]) =>
      Object.assign({}, p, {
        [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v,
      }),
    {}
  );

/**
 * 从 URL 获取参数的值
 * @param url
 * @param param
 * @returns
 */
export const getParam = (url: string, param: string) =>
  new URLSearchParams(new URL(url).search).get(param);
