import 'reflect-metadata';

export const emailMetadataKey = Symbol('email');

export function email(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(emailMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    emailMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}
