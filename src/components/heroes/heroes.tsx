//TODO mobx needs some SSR integration. This component should be sever side rendered
"use client";
import React, {ReactNode} from "react";
import {HeroDataType} from "@/types";
import Link from "next/link";
import {HERO_IMAGES} from "@/constants/heroImages";
import Image from "next/image";
import {ATTRIBUTES} from "@/constants/attributes";
import {filterState, FilterState} from "@/store/filter";
import {observer} from "mobx-react-lite";


/**
 * replaces spaces and dashes in strings
 * @param {string} name - name
 * @return {string} - trimmed link
 */
const getLinkName = (name: string): string => {
    return name
        .replaceAll(' ', '')
        .replaceAll('-', '')
        .toLowerCase();
};

const sortHeroes = (heroA: HeroDataType, heroB: HeroDataType) => heroA.localized_name > heroB.localized_name ? 1 : -1;


const filterHero = ({attribute, search}: FilterState) => (hero: HeroDataType) =>
    (!attribute || attribute === hero.primary_attr)
    && (!search || hero.localized_name.toLowerCase().includes(search));

export type PropsType = {
    heroes: HeroDataType[];
    filter: ReactNode;
    filterState: FilterState;
};

export const HeroesComponent = observer<PropsType>(({heroes, filter, filterState}) => {

    return (
        <main className="flex flex-col items-center p-24 max-w-6xl mx-auto">
            <h1 className="text-3xl mb-8">CHOOSE YOUR HERO</h1>
            {filter}
            <ul className="flex flex-wrap justify-between gap-4">
                {heroes.sort(sortHeroes).filter(filterHero(filterState)).map(hero => {

                    return (
                        <li key={hero.id}>
                            <Link
                                href={`/heroes/${getLinkName(hero.localized_name)}`}>
                                <div
                                    style={{backgroundImage: `url(${HERO_IMAGES[hero.id]?.src})`}}
                                    className="group relative w-56 h-32 dark:bg-slate-800 bg-no-repeat bg-cover bg-center hover:scale-125 hover:z-10 duration-300 overflow-hidden shadow-md
                            after:absolute after:inset-0 after:bg-gradient-hero after:opacity-0 hover:after:opacity-100 after:duration-300">
                                      <span
                                          className="flex absolute uppercase top-full left-1/2 w-full text-lg -translate-x-1/2 group-hover:-translate-y-8 duration-300 z-10">
                                <span className="mx-2">
                                    <Image src={ATTRIBUTES[hero.primary_attr]?.src} width={26} height={26}
                                           role="presentation" alt=""/>
                                </span>
                                          {hero.localized_name}
                                 </span>
                                </div>

                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
});

export const Heroes: React.FC<{ heroes: HeroDataType[]; filter: ReactNode; }> = ({filter, heroes}) =>
    <HeroesComponent
        heroes={heroes}
        filter={filter}
        filterState={filterState}
    />;