export const sum = (a: number, b: number) => a + b

export const factorial = (n: number): number => {
  if (n < 0) {
    return NaN
  }

  if(n == 0) {
    return 1
  }

  return n * factorial(n - 1)
}