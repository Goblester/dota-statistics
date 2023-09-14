'use client';
import React from 'react';
import {fetchHeroMatchups} from '@/api';
import {getPercentage} from '@/libs/getPercentage/getPercentage';
import {HeroStatsType} from '@/types';
import Image from 'next/image';
import {getImageSrc} from '@/libs/getImageSrc/getImageSrc';


type PropsType = {
    heroId: number;
    heroStats: HeroStatsType[];
};

/**
 * renders hero matchup table with sorting
 * @param {number} heroId - hero id
 * @param {HeroStatsType[]} - hero stats data
 */
export const HeroMatchupsTable: React.FC<PropsType> = async ({heroId, heroStats}) => {

    const heroMatchups = await fetchHeroMatchups(heroId);


    return (
        <div className="mx-auto mt-10 w-full">
            <h2>Силен против</h2>
            <div className="grid w-full grid-cols-4 bg-gray-700 p-2 align-middle">
                <div className="p-2">Герой</div>
                <div className="p-2">Преймущество</div>
                <div className="p-2">Доля побед</div>
                <div className="p-2">Матчи</div>
                {heroMatchups.slice(0, 10).map(({hero_id, wins, games_played}) => {

                    const hero = heroStats.find(hero => hero.hero_id === hero_id);

                    return (
                        <div key={hero_id} className="col-span-3 grid grid-cols-4">
                            <Image src={getImageSrc(hero.img)} alt={hero.localized_name} height={49} width={89}/>
                            <span>{hero_id} | {getPercentage(wins, games_played)}%</span>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};