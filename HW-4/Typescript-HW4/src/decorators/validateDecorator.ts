import 'reflect-metadata';
import { requiredMetadataKey } from './requiredDecorator';
import { required } from './requiredDecorator';

export function validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  const originalMethod = descriptor.value as Function;
  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(
      requiredMetadataKey,
      target,
      propertyName
    );
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || !arguments[parameterIndex]) {
          throw new Error('Missing required argument.');
        }
      }
    }

    return originalMethod.apply(this, arguments);
  };
}
