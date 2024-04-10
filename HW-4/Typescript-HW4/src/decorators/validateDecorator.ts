import 'reflect-metadata';
import { requiredMetadataKey } from './requiredDecorator';
import { emailMetadataKey } from './emailDecorator';
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

    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const emailParameters: number[] = Reflect.getOwnMetadata(
      emailMetadataKey,
      target,
      propertyName
    );
    if (emailParameters) {
      for (let parameterIndex of emailParameters) {
        if (
          parameterIndex >= arguments.length ||
          !emailValid.test(arguments[parameterIndex])
        ) {
          throw new Error('Invalid email.');
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
