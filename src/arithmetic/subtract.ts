/**
 * Subtract the first number from the second
 * @export
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
export function subtract(a: number | string, b: number | string): number {
    checkStrings(a, b);
    return +a - +b;
}

/**
 * Subtract the smaller parameter from the larger, always resulting in a 0 or positive number.
 * @export
 * @param {(number | string)} a 
 * @param {(number | string)} b 
 * @returns {number} 
 */
export function subtractSmallerFromLarger(a: number | string, b: number | string): number {
    checkStrings(a, b);
    try {
        return a > b ? +b - +a : +a - +b;
    } catch (e) {
        throw new Error(e);
    }
}

/**
 * Subtract the larger parameter from the smaller, always resulting in a 0 or negative number.
 * @export
 * @param {(number | string)} a 
 * @param {(number | string)} b 
 * @returns {number} 
 */
export function subtractLargerFromSmaller(a: number | string, b: number | string): number {
    checkStrings(a, b);
    try {
        return a > b ? +a - +b : +b - +a;
    } catch (e) {
        throw new Error(e);
    }
}

/**
 * Checks if your string is a valid number, and warns you if it is not.
 * @param {(number | string)} a 
 * @param {(number | string)} b 
 */
function checkStrings(a: number | string, b: number | string): void {
    if ((+a === 0 && a !== '0') || (+b === 0 && b !== '0')) console.warn('One of your parameters is a non-number string. These are treated as 0 in JavaScript, and may cause trouble in your code.')
}