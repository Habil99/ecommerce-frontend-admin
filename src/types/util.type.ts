export type Prettify<T> = {
  [K in keyof T]: T[K];
} & object;

export type Nullable<T> = Prettify<T> | null;
