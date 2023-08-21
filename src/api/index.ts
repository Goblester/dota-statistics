import {HeroDataType} from "@/types";

const baseUrl = 'https://api.opendota.com/api';


export const fetchHeroes = async (): Promise<HeroDataType[]> => {
    try {
        const response = await fetch(`${baseUrl}/heroes`);
        return await response.json() as HeroDataType[];
    } catch (e) {
        console.log(e);
    }
};