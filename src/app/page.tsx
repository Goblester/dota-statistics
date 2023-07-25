import {fetchHeroes} from "@/api";

export default async function Home() {

    const heroesData = fetchHeroes();

    const heroes = await heroesData;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Heroes</h1>
            <ul className="flex flex-wrap">
                {heroes.map(hero => {
                    return (
                        <li key={hero.id} className="w-4 h-4">
                            {hero.localized_name}
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
