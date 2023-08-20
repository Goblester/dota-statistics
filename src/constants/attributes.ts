import universal from './../assets/heroes/attributes/hero_universal.png';
import strength from './../assets/heroes/attributes/hero_strength.png';
import agility from './../assets/heroes/attributes/hero_agility.png';
import intelligence from './../assets/heroes/attributes/hero_intelligence.png';

type AttributesType = {
    [key:string]: { src: string };
}

export const ATTRIBUTES: AttributesType = {
    all: universal,
    str: strength,
    agi: agility,
    int: intelligence,
} as const;
