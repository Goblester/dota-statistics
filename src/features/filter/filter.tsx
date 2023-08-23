"use client";
import React, {useState} from "react";
import {FILTER_ATTRIBUTES} from "@/constants/attributes";
import {SearchIcon} from "@/components/icons/searchIcon";


const ATTRIBUTE_BUTTONS: AttributeType[] = ['str', 'agi', 'int', 'all'];

type AttributeType = 'str' | 'agi' | 'int' | 'all' | '';


export const Filter: React.FC = () => {
    const [activeAttribute, setActiveAttribute] = useState<AttributeType>("");

    return (
        <div
            className="flex justify-between w-full p-1 mb-10 bg-gradient-to-l from-gray-500 to-gray-700 border-black border items-center rounded-sm shadow-md">
            <div className="flex items-center">
                <span className="ml-10">ATTRIBUTE</span>
                <div className="flex gap-1 ml-10">
                    {ATTRIBUTE_BUTTONS.map(name => (
                        <button key={name} aria-label={`attribute ${name}`}
                                onClick={() => setActiveAttribute((value) => value === name ? "" : name)}
                                className={`w-11 h-8 bg-no-repeat bg-cover bg-center -ml-2 saturate-0 brightness-50 transition duration-100
                                ${activeAttribute === name && 'saturate-100 brightness-100'}`}
                                style={{backgroundImage: `url(${FILTER_ATTRIBUTES[name].src})`}}/>
                    ))}
                </div>
            </div>
            <div>
                <span>COMPLEXITY</span>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div className="relative flex bg-gray-700 h-12 p-2 pl-12">
                <SearchIcon size={26} className="absolute top-3 left-3 fill-gray-500"/>
                <input className="px-4 h-8 bg-gray-500 outline-none border-none bg-gray-700 focus:bg-gray-500"/>
            </div>
        </div>
    );
};