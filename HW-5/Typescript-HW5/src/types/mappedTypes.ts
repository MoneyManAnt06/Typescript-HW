export type ReadonlyStringType<T> = {
  readonly [K in keyof T]: T[K] extends string ? K : never;
};
