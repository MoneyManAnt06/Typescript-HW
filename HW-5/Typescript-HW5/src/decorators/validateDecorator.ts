import 'reflect-metadata';
import { requiredMetadataKey } from './requiredDecorator';
import { minLengthMetadataKey } from './minLengthDecorator';

export function validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  const originalMethod = descriptor.value as Function;
  descriptor.value = function () {
    const requiredParameters: number[] = Reflect.getOwnMetadata(
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

    const minLengthParameters: number[] = Reflect.getOwnMetadata(
      minLengthMetadataKey,
      target,
      propertyName
    );
    if (minLengthParameters) {
      for (let parameterIndex of minLengthParameters) {
        if (
          parameterIndex >= arguments.length ||
          arguments[parameterIndex].length < 3
        ) {
          throw new Error('Invalid min length.');
        }
      }
    }

    return originalMethod.apply(this, arguments);
  };
}
