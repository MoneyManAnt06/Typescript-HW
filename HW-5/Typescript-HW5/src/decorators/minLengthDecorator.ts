import 'reflect-metadata';

export const minLengthMetadataKey = Symbol('minLength');

export function minLength(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(minLengthMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    minLengthMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}
