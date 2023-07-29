import {fetchHeroes} from "@/api";
import {HERO_IMAGES} from "@/constants/heroImages";

export default async function Home() {

    const heroesData = fetchHeroes();

    const heroes = await heroesData;

    return (
        <main className="flex flex-col items-center p-24 max-w-5xl mx-auto">
            <h1 className="mb-2">Heroes</h1>
            <ul className="flex flex-wrap justify-center gap-4">
                {heroes.map(hero => {

                    return (
                        <li key={hero.id}
                            style={{backgroundImage: `url(${HERO_IMAGES[hero.id].src})`}}
                            className="w-56 h-32 dark:bg-slate-800 bg-no-repeat bg-cover bg-center">
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
