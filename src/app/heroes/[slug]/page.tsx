import {fetchHero, fetchHeroDuration} from "@/api";
import {HERO_IDS} from "@/constants/heroIds";
import Image from "next/image";
import {HERO_IMAGES} from "@/constants/heroImages";
import {HeroDataType, HeroDurationType} from "@/types";

type PropsType = {
    params: {
        slug: string;
    };
};

type DataResponseType = [HeroDataType, HeroDurationType[]];

const getHeroWinPercentage = (durations: HeroDurationType[]) => {
    const {wins, games_played} = durations.reduce((acc, currentValue) => {
        acc.wins += currentValue.wins;
        acc.games_played += currentValue.games_played;
        return acc;
    }, {wins: 0, games_played: 0});

    return Math.round((wins / games_played) * 10000) / 100;
};

export default async function Hero({params}: PropsType) {

    const heroId = HERO_IDS[params.slug];

    const [hero, heroDuration] = await Promise.all([fetchHero(heroId), fetchHeroDuration(heroId)]) as DataResponseType;

    const winPercentage = getHeroWinPercentage(heroDuration);

    return (
        <div className="grid grid-rows-[7] grid-cols-2 max-w-screen-2xl mx-auto mt-10">
            <div className="col-span-2 p-2 gap-x-2 grid grid-rows-2 grid-cols-[89px_repeat(4,_1fr)] h-24 bg-gray-700">
                <Image src={HERO_IMAGES[heroId].src} alt={hero.localized_name} height={49} width={89}/>
                <h1 className="col-span-2">
                    {hero.localized_name}<br/>
                    <small>
                        {hero.roles.join(', ')}
                    </small>
                </h1>
                <div className="flex flex-col items-center justify-center">
                    <span>101st</span>
                    <span className="capitalize opacity-50">Популярность</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span
                        className={`${winPercentage > 50 ? 'text-green-600' : 'text-red-600'} `}>{getHeroWinPercentage(heroDuration)}%</span>
                    <span className="capitalize opacity-50">Доля побед</span>
                </div>
            </div>
            <div className="grid grid-cols-4 mx-auto mt-10 w-full bg-gray-700 align-middle">
                <div className="p-2">Герой</div>
                <div className="p-2">Преймущество</div>
                <div className="p-2">Доля побед</div>
                <div className="p-2">Матчи</div>
                <div>1</div>
            </div>
        </div>

    );
}
