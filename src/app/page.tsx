import Image from 'next/image';
import Link from "next/link";
import {fetchHeroes} from "@/api";
import {HERO_IMAGES} from "@/constants/heroImages";
import {ATTRIBUTES} from "@/constants/attributes";

/**
 * replaces spaces and dashes in strings
 * @param {string} name - name
 * @return {string} - trimmed link
 */
const getLinkName = (name: string): string => {
    return name
        .replaceAll(' ', '')
        .replaceAll('-', '')
        .toLowerCase();
}

export default async function Home() {

    const heroesData = fetchHeroes();

    const heroes = await heroesData;

    return (
        <main className="flex flex-col items-center p-24 max-w-6xl mx-auto">
            <h1 className="text-3xl mb-8">CHOOSE YOUR HERO</h1>
            <ul className="flex flex-wrap justify-center gap-4">
                {heroes.map(hero => {

                    return (
                        <li key={hero.id}>
                            <Link
                                href={`/heroes/${getLinkName(hero.localized_name)}`}>
                                <div
                                    style={{backgroundImage: `url(${HERO_IMAGES[hero.id].src})`}}
                                    className="group relative w-56 h-32 dark:bg-slate-800 bg-no-repeat bg-cover bg-center hover:scale-125 hover:z-10 duration-300 overflow-hidden shadow-md
                            after:absolute after:inset-0 after:bg-gradient-hero after:opacity-0 hover:after:opacity-100 after:duration-300">
                                      <span
                                          className="flex absolute uppercase top-full left-1/2 w-full text-lg -translate-x-1/2 group-hover:-translate-y-8 duration-300 z-10">
                                <span className="mx-2">
                                    <Image src={ATTRIBUTES[hero.primary_attr].src} width={26} height={26}
                                           role="presentation" alt=""/>
                                </span>
                                          {hero.localized_name}
                                 </span>
                                </div>

                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
