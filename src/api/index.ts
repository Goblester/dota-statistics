import {HeroDataType} from "@/types";

const baseUrl = 'https://api.opendota.com/api'


export const fetchHeroes = async ():Promise<HeroDataType[]> => {
    try {
        const data = await fetch(`${baseUrl}/heroes`);
        return data.json();
    } catch (e) {
        console.log(e);
    }
}