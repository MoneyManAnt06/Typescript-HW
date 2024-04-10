import LogServices from '../services/logServices';

export function logDecorator() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<void> {
      const logServices = new LogServices();

      const methodResult = await originalMethod.apply(this, args);
      console.log(methodResult);

      return methodResult;
    };
  };
}
