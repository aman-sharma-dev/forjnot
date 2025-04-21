export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
