import image1 from "./assets/game-1.png";

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner({ bannerUrl, adsCount, title }: GameBannerProps) {
  return (
    <a className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} alt='' />

      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{title}</strong>
        <span className='text-zinc-300 text-sm block'>
          {adsCount} Anuncio(s)
        </span>
      </div>
    </a>
  );
}
