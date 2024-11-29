const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should handle floating point whole numbers', () => {
    expect.assertions(1);
    expect(calculateNumber(1.0, 2.0)).toBe(3);
  });

  it("should round down b's floating point fractional number", () => {
    expect.assertions(1);
    expect(calculateNumber(1.0, 2.4)).toBe(3);
  });

  it("should round down a and b's floating point fractional numbers", () => {
    expect.assertions(1);
    expect(calculateNumber(1.4, 2.4)).toBe(3);
  });

  it("should round down a's floating point fractional number", () => {
    expect.assertions(1);
    expect(calculateNumber(1.4, 2.0)).toBe(3);
  });

  it("should round up b's floating point fractional number", () => {
    expect.assertions(1);
    expect(calculateNumber(1.0, 2.5)).toBe(4);
  });

  it("should round up a and b's floating point fractional numbers", () => {
    expect.assertions(1);
    expect(calculateNumber(2.6, 2.5)).toBe(6);
  });

  it("should round up a's floating point fractional number", () => {
    expect.assertions(1);
    expect(calculateNumber(2.6, 2.0)).toBe(5);
  });

  it("should round down a and b floating point fractional numbers with trailing 9's", () => {
    expect.assertions(1);
    expect(calculateNumber(2.499999, 3.499999)).toBe(5);
  });
});
