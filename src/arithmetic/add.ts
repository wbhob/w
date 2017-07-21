/**
 * Sum a series of numbers or number strings
 * @export
 * @param {(...(number | string)[])} args 
 * @returns {number} 
 */
export function add(...args: (number | string)[]): number {
    let l = args.length;
    let i = 0;
    while (l--) {
        i += +args[l] | 0;
    }
    return i;
}
