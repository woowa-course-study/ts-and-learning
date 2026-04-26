declare module "stats" {
  type CompareFnType = (a: T, b: T) => number;
  export function getMaxIndex(input: T[], comparator: CompareFnType): number;

  export function getMinIndex(input: T[], comparator: CompareFnType): number;

  export function getMedianIndex(input: T[], comparator: CompareFnType): number;

  export function getMaxElement(
    input: T[],
    comparator: CompareFnType,
  ): T | null;

  export function getMinElement(
    input: T[],
    comparator: CompareFnType,
  ): T | null;

  export function getMedianElement(
    input: T[],
    comparator: CompareFnType,
  ): T | null;

  export function getAverageValue(
    input: T[],
    getValue: (item: T) => number,
  ): number | null;
}
