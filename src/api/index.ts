import {HeroDataType, HeroStatsType} from "@/types";

const baseUrl = 'https://api.opendota.com/api';

/**
 * gets all heroes short info
 * @return {Promise<HeroDataType>} - Heres short data
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
 * @param id - hero id
 * @return {Promise<HeroStatsType>} - Hero data
 */
export const fetchHero = async (id: number): Promise<HeroStatsType> => {
    try {
        const response = await fetch(`${baseUrl}/heroStats`);
        const data = await response.json() as HeroStatsType[];
        return data.find(hero => hero.id === id);
    } catch (e) {
        console.log(e);
    }
};