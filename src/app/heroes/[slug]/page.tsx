import {fetchHeroDuration, fetchHeroStats} from '@/api';
import {HERO_IDS} from '@/constants/heroIds';
import Image from 'next/image';
import {HeroDurationType, HeroStatsType} from '@/types';
import {getImageSrc} from '@/libs/getImageSrc/getImageSrc';
import {HeroMatchupsTable} from '@/features/heroMatchupsTable/heroMatchupsTable';
import {getPercentage} from '@/libs/getPercentage/getPercentage';

type PropsType = {
    params: {
        slug: string;
    };
};

type DataResponseType = [HeroStatsType[], HeroDurationType[]];

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

    const [heroStats, heroDuration] = await Promise.all([fetchHeroStats(), fetchHeroDuration(heroId)]) as DataResponseType;
    
    const hero = heroStats.find(hero => hero.hero_id === heroId);
    
    const winPercentage = getHeroWinPercentage(heroDuration);

    return (
        <div className="mx-auto mt-10 grid max-w-screen-2xl grid-cols-2 grid-rows-[7]">
            <div className="col-span-2 grid h-24 grid-cols-[89px_repeat(4,_1fr)] grid-rows-2 gap-x-2 bg-gray-700 p-2">
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
            <HeroMatchupsTable heroId={heroId} heroStats={heroStats} />
        </div>

    );
}
