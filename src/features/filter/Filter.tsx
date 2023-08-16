'use client';
import React from "react";
import {ATTRIBUTES} from "@/constants/attributes";

const ATTRIBUTE_BUTTONS = ['str', 'agi', 'int', 'all'];


export const Filter: React.FC = () => {
    return (
        <div className="flex justify-start w-full py-10 mb-10">
            <div className="flex">
                <span>ATTRIBUTE</span>
                <div className="flex">
                    {ATTRIBUTE_BUTTONS.map(name => (
                        <button key={name} aria-label={`attribute ${name}`} className="w-16 h-16"
                                style={{backgroundImage: `url(${ATTRIBUTES[name].src})`}}/>
                    ))}
                </div>
            </div>
            <div>
                <span>COMPLEXITY</span>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <input className="p-4 bg-gray-500 outline-transparent border-gray-700 border-2"/>
        </div>
    )
}