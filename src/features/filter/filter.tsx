'use client';
import React, {useTransition} from 'react';
import {FILTER_ATTRIBUTES} from '@/constants/attributes';
import filterDiamond from '@/assets/heroes/attributes/filter-diamond.png';
import {SearchIcon} from '@/components/icons/searchIcon';
import {observer} from 'mobx-react-lite';
import {AttributeType, ComplexityType, filterState, FilterState} from '@/store/filter';

const ATTRIBUTE_BUTTONS: AttributeType[] = ['str', 'agi', 'int', 'all'];

const COMPLEXITY_BUTTONS: ComplexityType[] = [1, 2, 3];

type PropsType = {
    filterState: FilterState
}
/**
 * renders heroes filter
 */
export const FilterComponent: React.FC<PropsType> = observer(({filterState}) => {

    const [isSearchPending, startTransition] = useTransition();

    return (
        <div
            className="mb-10 flex w-full items-center justify-between rounded-sm border border-black bg-gradient-to-l from-gray-500 to-gray-700 p-1 shadow-md">
            <div className="flex items-center">
                <span className="ml-10 font-light text-gray-300">ATTRIBUTE</span>
                <div className="ml-10 flex gap-1">
                    {ATTRIBUTE_BUTTONS.map(name => (
                        <button key={name} aria-label={`attribute ${name}`}
                                onClick={() => filterState.setAttribute(name)}
                                className={`-ml-2 h-8 w-11 bg-cover bg-center bg-no-repeat transition duration-100
                                ${filterState.attribute === name ? 'brightness-100 saturate-100' : 'brightness-50 saturate-0'}`}
                                style={{backgroundImage: `url(${FILTER_ATTRIBUTES[name].src})`}}/>
                    ))}
                </div>
            </div>
            <div className="flex items-center">
                <span className="font-light text-gray-300">COMPLEXITY</span>
                <div className="ml-10 flex gap-1">
                    {COMPLEXITY_BUTTONS.map(complexity => (
                        <button key={complexity} aria-label={`complexity ${complexity}`}
                                onClick={() => filterState.setComplexity(complexity)}
                                className={`-ml-2 h-8 w-11 bg-cover bg-center bg-no-repeat transition duration-100
                                 ${filterState.complexity >= complexity ? 'brightness-100 saturate-100' : 'brightness-50 saturate-0'}`}
                                style={{backgroundImage: `url(${filterDiamond.src})`}}/>
                    ))}
                </div>
            </div>
            <div className="relative flex h-12 bg-gray-700 p-2 pl-12">
                <SearchIcon size={26} className="absolute left-3 top-3 fill-gray-500"/>
                <input
                    className={`h-8 border-none bg-gray-700 px-4 outline-none focus:bg-gray-500 
                    ${isSearchPending && 'opacity-50'}`}
                    value={filterState.search}
                    onChange={(e) => {
                        startTransition(() => {
                            filterState.changeSearch(e.currentTarget.value);
                        });
                    }}
                />
            </div>
        </div>
    );
});
/**
 * Filter with filterState
 */
export const Filter = () => <FilterComponent filterState={filterState} />;