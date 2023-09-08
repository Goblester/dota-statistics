/**
 * calculate percentage
 * @param {number} part - current value
 * @param {number} wholeValue - denominator
 * @return {number} - percentage with two digits float part
 *
 * @example
 * getPercentage(123, 456) equals 26.97
 */
export const getPercentage = (part: number, wholeValue: number): number => {
    if(wholeValue === 0) return 0;
    return Math.round((part / wholeValue) * 10000) / 100;
};