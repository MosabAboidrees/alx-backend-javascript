const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.4, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
    assert.strictEqual(calculateNumber(-1.6, -3.7), -6);
  });

  it('should handle mixed positive and negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, 3.7), 3);
    assert.strictEqual(calculateNumber(1.4, -3.7), -3);
    assert.strictEqual(calculateNumber(-1.5, 3.7), 2);
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(-1.5, 0), -2);
  });
});
