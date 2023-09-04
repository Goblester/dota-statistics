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
        <div className="grid grid-rows-[7] grid-cols-2 max-w-screen-2xl mx-auto mt-10">
            <div className="col-span-2 p-2 grid grid-rows-2 grid-cols-5 h-24 bg-gray-700">
                <div className="justify-self-start">
                    <Image src={HERO_IMAGES[heroId].src} alt={hero.localized_name} height={49} width={89}/>
                </div>
                <h1>
                    {hero.localized_name}<br/>
                    <small>
                        {hero.roles.join(', ')}
                    </small>
                </h1>
            </div>
        </div>

    );
}
