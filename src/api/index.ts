import {HeroDataType, HeroDurationType, HeroStatsType, MatchupType} from "@/types";

const baseUrl = 'https://api.opendota.com/api';

/**
 * gets all heroes short info
 * @return {Promise<HeroDataType[]>} - Heres short data
 */
export const fetchHeroes = async (): Promise<HeroDataType[]> => {
    try {
        const response = await fetch(`${baseUrl}/heroes`);
        return await response.json() as HeroDataType[];
    } catch (e) {
        console.error(e);
    }
};
/**
 * gets all heroes stats and returns hero data
 * @param heroId - hero id
 * @return {Promise<HeroStatsType>} - Hero data
 */
export const fetchHero = async (heroId: number): Promise<HeroStatsType> => {
    try {
        const response = await fetch(`${baseUrl}/heroStats`);
        const data = await response.json() as HeroStatsType[];
        return data.find(hero => hero.id === heroId);
    } catch (e) {
        console.log(e);
    }
};
/**
 * gets hero games and wins count
 * @param heroId - hero id
 * @return {Promise<HeroStatsType>} - Hero data
 */
export const fetchHeroDuration = async (heroId: number): Promise<HeroDurationType[]> => {
    try {
        const response = await fetch(`${baseUrl}/heroes/${heroId}/durations`);
        return await response.json() as HeroDurationType[];
    } catch (e) {
        console.error(e);
    }
};

export const fetchHeroMatchups = async (heroId: number): Promise<MatchupType[]> => {
    try {
        const response = await fetch(`${baseUrl}/heroes/${heroId}/matchups`);
        return await response.json() as MatchupType[];
    } catch (e) {
        console.error(e);
    }
};