export function checkLength(valueLength: number) {
  return function (target: any, propertyKey: string) {
    let value = target[propertyKey];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length < valueLength) {
        throw new Error('Name is not valid');
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}


