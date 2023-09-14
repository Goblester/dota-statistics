import {getPercentage} from '@/libs/getPercentage/getPercentage';


describe('getPercentage', () => {
    it('should return percentage with two float digits', () => {
        expect(getPercentage(123,456)).toBe(26.97);
    });
    it('should return zero if whole value is zero', () => {
        expect(getPercentage(123,0)).toBe(0);
    });
    it('should round correctly', () => {
        expect(getPercentage(71.155, 100)).toBe(71.16);
        expect(getPercentage(71.1549, 100)).toBe(71.15);
    });
});