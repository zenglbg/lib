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
