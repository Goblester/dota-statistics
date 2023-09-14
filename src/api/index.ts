import {HeroDataType, HeroDurationType, HeroStatsType, MatchupType} from "@/types";
import {BASE_URL} from "@/constants/api";


/**
 * gets all heroes short info
 * @return {Promise<HeroDataType[]>} - Heres short data
 */
export const fetchHeroes = async (): Promise<HeroDataType[]> => {
    try {
        const response = await fetch(`${BASE_URL}/api/heroes`);
        return await response.json() as HeroDataType[];
    } catch (e) {
        console.error(e);
    }
};
/**
 * gets all heroes stats and returns hero data
 * @return {Promise<HeroStatsType[]>} - Heroes stats data
 */
export const fetchHeroStats = async (): Promise<HeroStatsType[]> => {
    try {
        const response = await fetch(`${BASE_URL}/api/heroStats`);
        return await response.json() as HeroStatsType[];
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
        const response = await fetch(`${BASE_URL}/api/heroes/${heroId}/durations`);
        return await response.json() as HeroDurationType[];
    } catch (e) {
        console.error(e);
    }
};
/**
 * gets hero matchups agains other heroes
 * @param heroId - hero id
 * @return {Promise<MatchupType[]>} - Hero matchups
 */
export const fetchHeroMatchups = async (heroId: number): Promise<MatchupType[]> => {
    try {
        const response = await fetch(`${BASE_URL}/api/heroes/${heroId}/matchups`);
        return await response.json() as MatchupType[];
    } catch (e) {
        console.error(e);
    }
};