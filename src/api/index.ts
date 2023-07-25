const baseUrl = 'https://api.opendota.com/api'

type HeroDataType = {
    id: number;
    name: string;
    localized_name: string;
    primary_attr: "string";
    attack_type: "string";
    roles: string[];
}

export const fetchHeroes = async ():Promise<HeroDataType[]> => {
    try {
        const data = await fetch(`${baseUrl}/heroes`);
        return data.json();
    } catch (e) {
        console.log(e);
    }
}