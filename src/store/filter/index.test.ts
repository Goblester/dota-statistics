import {FilterState} from '@/store/filter/index';

let filterState: FilterState;

describe('setAttribute', () => {
    beforeEach(() => {
        filterState = new FilterState();
    });
    it('should set attribute', () => {
        expect(filterState.attribute).toBe('');
        filterState.setAttribute('all');

        expect(filterState.attribute).toBe('all');
    });
    it('should reset attribute if new value = current value', () => {
        filterState.setAttribute('all');
        filterState.setAttribute('all');

        expect(filterState.attribute).toBe('');
    });
});

describe('setComplexity', () => {
    beforeEach(() => {
        filterState = new FilterState();
    });

    it('should set complexity', () => {
        expect(filterState.complexity).toBe(0);
        filterState.setComplexity(3);

        expect(filterState.complexity).toBe(3);
    });
    it('should reset complexity if new value = current value', () => {
        filterState.setComplexity(3);
        filterState.setComplexity(3);

        expect(filterState.complexity).toBe(0);
    });
});

describe('changeSearch', () => {
    beforeEach(() => {
        filterState = new FilterState();
    });

    it('should change search', () => {
        expect(filterState.search).toBe('');

        filterState.changeSearch('TesT  Search   ');
        expect(filterState.search).toBe('test  search');
    });
});