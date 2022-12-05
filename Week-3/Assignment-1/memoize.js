function memoize(fn){
  const cache = new Map();
  return function (...args) {
    const keys = args.toString();

    if (cache.has(keys)){
        return cache.get(keys);
    } else {
        cache.set(keys, fn(...args));
        return cache.get(keys);
    }
  }
}

function multiply(a, b) {
    return a * b;
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}