"use client";
import React, {useState} from "react";
import {FILTER_ATTRIBUTES} from "@/constants/attributes";
import filterDiamond from "@/assets/heroes/attributes/filter-diamond.png";
import {SearchIcon} from "@/components/icons/searchIcon";
import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";

const ATTRIBUTE_BUTTONS: AttributeType[] = ['str', 'agi', 'int', 'all'];

const COMPLEXITY_BUTTONS = [1, 2, 3];

type AttributeType = 'str' | 'agi' | 'int' | 'all' | '';

class FilterState {
    activeAttribute: AttributeType;

    constructor() {
        makeAutoObservable(this);
    }
    
    setAttribute (newValue: AttributeType) {
        console.log('set', newValue);
        if(newValue === this.activeAttribute) {
            this.activeAttribute = "";
        } else {
            this.activeAttribute = newValue;
        }
    }
}

const myFilterState = new FilterState();

export const FilterComponent: React.FC = observer(({filterState}: {filterState: FilterState}) => {
    const [activeComplexity, setActiveComplexity] = useState<number>(0);

    return (
        <div
            className="flex justify-between w-full p-1 mb-10 bg-gradient-to-l from-gray-500 to-gray-700 border-black border items-center rounded-sm shadow-md">
            <div className="flex items-center">
                <span className="ml-10 font-light text-gray-300">ATTRIBUTE</span>
                <div className="flex gap-1 ml-10">
                    {ATTRIBUTE_BUTTONS.map(name => (
                        <button key={name} aria-label={`attribute ${name}`}
                                onClick={() => filterState.setAttribute(name)}
                                className={`w-11 h-8 bg-no-repeat bg-cover bg-center -ml-2 transition duration-100
                                ${filterState.activeAttribute === name ? 'saturate-100 brightness-100' : 'saturate-0 brightness-50'}`}
                                style={{backgroundImage: `url(${FILTER_ATTRIBUTES[name].src})`}}/>
                    ))}
                </div>
            </div>
            <div className="flex items-center">
                <span className="font-light text-gray-300">COMPLEXITY</span>
                <div className="flex gap-1 ml-10">
                    {COMPLEXITY_BUTTONS.map(complexity => (
                        <button key={complexity} aria-label={`complexity ${complexity}`}
                                onClick={() => setActiveComplexity((value) => value === complexity ? 0 : complexity)}
                                className={`w-11 h-8 bg-no-repeat bg-cover bg-center -ml-2 transition duration-100
                                 ${activeComplexity >= complexity ? 'saturate-100 brightness-100' : 'saturate-0 brightness-50'}`}
                                style={{backgroundImage: `url(${filterDiamond.src})`}}/>
                    ))}
                </div>
            </div>
            <div className="relative flex bg-gray-700 h-12 p-2 pl-12">
                <SearchIcon size={26} className="absolute top-3 left-3 fill-gray-500"/>
                <input className="px-4 h-8 bg-gray-500 outline-none border-none bg-gray-700 focus:bg-gray-500"/>
            </div>
        </div>
    );
});

export const Filter = () => <FilterComponent filterState={myFilterState}  />;