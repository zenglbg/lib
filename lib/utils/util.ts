

export function formatParams<T extends { [key: string]: any }>(obj: T) {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, curr) => {
    if (obj[curr] || obj[curr] === 0) {
      acc[curr] = obj[curr];
    }
    return acc;
  }, {});
}
