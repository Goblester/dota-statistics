import {fetchHero, fetchHeroDuration} from "@/api";
import {HERO_IDS} from "@/constants/heroIds";
import Image from "next/image";
import {HeroDurationType, HeroStatsType, MatchupType} from "@/types";
import {getImageSrc} from "@/libs/getImageSrc/getImageSrc";
import {HeroMatchupsTable} from "@/features/heroMatchupsTable/heroMatchupsTable";
import {getPercentage} from "@/libs/getPercentage/getPercentage";

type PropsType = {
    params: {
        slug: string;
    };
};

type DataResponseType = [HeroStatsType, HeroDurationType[], MatchupType[]];

const getHeroWinPercentage = (durations: HeroDurationType[]) => {
    const {wins, games_played} = durations.reduce((acc, currentValue) => {
        acc.wins += currentValue.wins;
        acc.games_played += currentValue.games_played;
        return acc;
    }, {wins: 0, games_played: 0});

    return getPercentage(wins, games_played);
};

export default async function Hero({params}: PropsType) {

    const heroId = HERO_IDS[params.slug];

    const [hero, heroDuration] = await Promise.all([fetchHero(heroId), fetchHeroDuration(heroId)]) as DataResponseType;

    const winPercentage = getHeroWinPercentage(heroDuration);

    return (
        <div className="grid grid-rows-[7] grid-cols-2 max-w-screen-2xl mx-auto mt-10">
            <div className="col-span-2 p-2 gap-x-2 grid grid-rows-2 grid-cols-[89px_repeat(4,_1fr)] h-24 bg-gray-700">
                <Image src={getImageSrc(hero.img)} alt={hero.localized_name} height={49} width={89}/>
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
            <HeroMatchupsTable heroId={heroId} />
        </div>

    );
}
