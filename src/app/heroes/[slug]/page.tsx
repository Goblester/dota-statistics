import {fetchHero} from "@/api";
import {HERO_IDS} from "@/constants/heroIds";
import Image from "next/image";
import {HERO_IMAGES} from "@/constants/heroImages";

type PropsType = {
    params: {
        slug: string;
    };
};

export default async function Hero({params}: PropsType) {

    const heroId = HERO_IDS[params.slug];

    const heroesData = fetchHero(heroId);

    const hero = await heroesData;

    return (
       <div>
           <div>{hero.localized_name}</div>
           <Image src={HERO_IMAGES[heroId].src} alt={hero.localized_name} width={500} height={500} />
       </div>
    );
}
