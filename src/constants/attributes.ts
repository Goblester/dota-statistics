import universal from './../assets/heroes/attributes/hero_universal.png';
import strength from './../assets/heroes/attributes/hero_strength.png';
import agility from './../assets/heroes/attributes/hero_agility.png';
import intelligence from './../assets/heroes/attributes/hero_intelligence.png';
import filterUniversal from './../assets/heroes/attributes/filter-uni.png';
import filterStrength from './../assets/heroes/attributes/filter-str.png';
import filterAgility from './../assets/heroes/attributes/filter-agi.png';
import filterIntelligence from './../assets/heroes/attributes/filter-int.png';

type AttributesType = {
    [key:string]: { src: string };
}

export const ATTRIBUTES: AttributesType = {
    all: universal,
    str: strength,
    agi: agility,
    int: intelligence,
};

export const FILTER_ATTRIBUTES: AttributesType = {
    all: filterUniversal,
    str: filterStrength,
    agi: filterAgility,
    int: filterIntelligence,
};