import {makeAutoObservable} from "mobx";

export type AttributeType = 'str' | 'agi' | 'int' | 'all' | '';
export type ComplexityType = 0 | 1 | 2 | 3;

/**
 * filter state for heroes
 */
export class FilterState {
    attribute: AttributeType = '';
    complexity: ComplexityType = 0;
    search: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    /**
     * changes active attribute
     * @param {AttributeType} newAttribute - new attribute
     */
    setAttribute (newAttribute: AttributeType) {
        if(newAttribute === this.attribute) {
            this.attribute = "";
        } else {
            this.attribute = newAttribute;
        }
    }

    /**
     * changes active heroes complexity
     * @param {ComplexityType} newComplexity - new complexity
     */
    setComplexity (newComplexity: ComplexityType) {
        if(newComplexity === this.complexity) {
            this.complexity = 0;
        } else {
            this.complexity = newComplexity;
        }
    }

    /**
     * changes active heroes name search
     * @param {ComplexityType} newSearch - new search query
     */
    changeSearch (newSearch: string) {
        this.search = newSearch.replace('  ', ' ').toLowerCase();
    }

}

export const filterState = new FilterState();