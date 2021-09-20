/**
 * 从对象中移除所有 null 和未定义的属性
 * @param obj
 * @returns
 */
export const removeNullUndefined = (obj: { [key: string]: any }) =>
  Object.entries(obj).reduce<{ [key: string]: any }>(
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {}
  );
