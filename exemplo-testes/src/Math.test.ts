import { describe, expect, it } from 'bun:test'
import { factorial, sum } from './Math'

describe('Tests over sum', () => {
  it('should sum two positive numbers correctly', () => {
    const n1 = 5, n2 = 4
    const result = sum(n1, n2)
    expect(result).toBe(9)
  })

  it('should sum two negative numbers correctly', () => {
    const n1 = -3, n2 = -5
    const result = sum(n1, n2)
    expect(result).toBe(-8)
  })
})

describe('Tests over factorial', () => {
  it('should return NaN when given number is negative', ()=> {
    const result = factorial(-7)
    expect(result).toBe(NaN)
  })

  it('should return 1 when given number is zero', () => {
    const result = factorial(0)
    expect(result).toBe(1)
  })

  it('should return correct factorial value when given number is positive', () => {
    let result = factorial(5)
    expect(result).toBe(120)
    result = factorial(10)
    expect(result).toBe(3628800)
  })
})