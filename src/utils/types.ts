export type OmitStrict<T, K extends keyof T> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

// Get nested key
// https://stackoverflow.com/a/68404823/13118446
type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

/**
 * Get all nested path from object, separated by "."
 *
 * E.g: { a: { b: { c: 1 } } } => ["a.b.c"]
 */
export type AllNestedPaths<T> = (
  T extends object
    ? T extends Date | Function | any[]
      ? ""
      : {
          [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
            AllNestedPaths<T[K]>
          >}`;
        }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;
