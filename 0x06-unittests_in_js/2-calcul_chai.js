/**
 * Performs calculations based on the given type.
 * @param {string} type - The type of calculation (SUM, SUBTRACT, DIVIDE).
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the calculation or 'Error' for division by 0.
 */
function calculateNumber(type, a, b) {
	const roundedA = Math.round(a);
	const roundedB = Math.round(b);
  
	if (type === 'SUM') {
	  return roundedA + roundedB;
	}
	if (type === 'SUBTRACT') {
	  return roundedA - roundedB;
	}
	if (type === 'DIVIDE') {
	  if (roundedB === 0) {
		return 'Error';
	  }
	  return roundedA / roundedB;
	}
	throw new Error('Invalid type');
  }
  
  module.exports = calculateNumber;
  