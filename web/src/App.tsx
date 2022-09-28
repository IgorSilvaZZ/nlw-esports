import { useState, useEffect } from "react";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import logoImg from "./assets/logo-nlw.svg";
import image1 from "./assets/game-1.png";
import image2 from "./assets/game-2.png";
import image3 from "./assets/game-3.png";
import image4 from "./assets/game-4.png";
import image5 from "./assets/game-5.png";
import image6 from "./assets/game-6.png";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games").then((res) => {
      res.json().then((data) => {
        setGames(data);
      });
    });
  }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt='Logo NlW eSports' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu{" "}
        <span className='text-transparent bg-nlw-gradient bg-clip-text'>
          {" "}
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(({ bannerUrl, title, id, _count }) => (
          <GameBanner
            key={id}
            bannerUrl={bannerUrl}
            title={title}
            adsCount={_count.ads}
          />
        ))}
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
