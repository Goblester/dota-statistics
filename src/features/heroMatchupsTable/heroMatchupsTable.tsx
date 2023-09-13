import React from "react";
import {fetchHeroMatchups} from "@/api";
import {getPercentage} from "@/libs/getPercentage/getPercentage";


type PropsType = {
    heroId: number;
};

/**
 * renders hero matchup table with sorting
 * @param {number} heroId - hero id
 */
export const HeroMatchupsTable: React.FC<PropsType> = async ({heroId}) => {

    const heroMatchups = await fetchHeroMatchups(heroId);

    return (
        <div className="mx-auto mt-10 w-full">
            <h2>Силен против</h2>
            <div className="grid w-full grid-cols-4 bg-gray-700 p-2 align-middle">
                <div className="p-2">Герой</div>
                <div className="p-2">Преймущество</div>
                <div className="p-2">Доля побед</div>
                <div className="p-2">Матчи</div>
                {heroMatchups.slice(0, 10).map(({hero_id, wins, games_played}) =>
                    <div key={hero_id} className="col-span-3">
                        {hero_id} | {getPercentage(wins, games_played)}%
                    </div>)}
            </div>
        </div>
    );
};