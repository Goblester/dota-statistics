'use client';
import React from "react";


export const Filter: React.FC = () => {
    return (
        <div className="flex justify-start w-full py-10 mb-10">
            <div>
                <span>ATTRIBUTE</span>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
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