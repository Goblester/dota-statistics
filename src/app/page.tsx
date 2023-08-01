import {fetchHeroes} from "@/api";
import {Heroes} from "@/components/heroes/heroes";

export default async function Home() {

    const heroesData = fetchHeroes();

    const heroes = await heroesData;

    return (
       <Heroes heroes={heroes} />
    )
}
