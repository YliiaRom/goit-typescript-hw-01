function merge<T, S>(objA: T, objB: S): T & S {
  return Object.assign({}, objA, objB);
}
