import logoImg from "./assets/logo-nlw.svg";
import image1 from "./assets/game-1.png";
import image2 from "./assets/game-2.png";
import image3 from "./assets/game-3.png";
import image4 from "./assets/game-4.png";
import image5 from "./assets/game-5.png";
import image6 from "./assets/game-6.png";

function App() {
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
        <a className='relative rounded-lg overflow-hidden'>
          <img src={image1} alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>
              League of Legends{" "}
            </strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src={image2} alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legend</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src={image3} alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS GO</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src={image4} alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>
              World of Warcraft
            </strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src={image5} alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden'>
          <img src={image6} alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>
      </div>

      <div className='bg-[#2A2634] px-8 py-6 self-stretch mt-8 rounded-lg'></div>
    </div>
  );
}

export default App;
