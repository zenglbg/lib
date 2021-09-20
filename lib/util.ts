export function formatParams<T extends { [key: string]: any }>(obj: T) {
  return Object.keys(obj).reduce<{ [key: string]: any }>((acc, curr) => {
    if (obj[curr] || obj[curr] === 0) {
      acc[curr] = obj[curr];
    }
    return acc;
  }, {});
}


export function throttle(fn: Function, gapTime: number) {
  let _lastTime: any = null;

  return function () {
    const _nowTime = new Date().getTime();
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime;
    }
  };
}
