import {getImageSrc} from '@/libs/getImageSrc/getImageSrc';


describe('getImageSrc', () => {
    it('should return full url', () => {
        expect(getImageSrc('/testurl')).toBe('https://api.opendota.com/testurl');
    });
    it('should add / if image url does not start with it', () => {
        expect(getImageSrc('testurl')).toBe('https://api.opendota.com/testurl');
    });
});