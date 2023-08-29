import {HeroDataType, HeroStatsType} from "@/types";

const baseUrl = 'https://api.opendota.com/api';


export const fetchHeroes = async (): Promise<HeroDataType[]> => {
    try {
        const response = await fetch(`${baseUrl}/heroes`);
        return await response.json() as HeroDataType[];
    } catch (e) {
        console.error(e);
    }
};

export const fetchHero = async (id: number): Promise<HeroStatsType> => {
    try {
        const response = await fetch(`${baseUrl}/heroStats`);
        const data = await response.json() as HeroStatsType[];
        return data.find(hero => hero.id === id);
    } catch (e) {
        console.log(e);
    }
};