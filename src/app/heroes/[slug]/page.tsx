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
       <div className="grid px-24 py-12 w-screen-2xl grid-cols-2 grid-rows-3">
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum lorem ipsum lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum lorem ipsum lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum lorem ipsum lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum lorem ipsum</div>
          <div className="p-4 text-black bg-white border-green-500 border-2">lorem ipsum lorem ipsum lorem ipsum </div>
       </div>
    );
}
