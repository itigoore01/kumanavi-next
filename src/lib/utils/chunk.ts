export function chunk<T>(data: readonly T[], size: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }

  return result;
}
