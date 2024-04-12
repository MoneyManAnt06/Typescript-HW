import LogServices from '../services/logServices';
import { actionType } from '../types';

export function logDecorator(action: actionType, model: string) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<void> {
      const logServices = new LogServices();

      const methodResult = await originalMethod.apply(this, args);
      logServices.createLog(`${model} has been modified: ${action}`);

      return methodResult;
    };
  };
}
