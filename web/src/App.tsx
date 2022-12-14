import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import logoImg from "./assets/logo-nlw.svg";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";

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

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>
              Publique um anúncio
            </Dialog.Title>

            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold' htmlFor='game'>
                  Qual o game?
                </label>
                <Input id='game' placeholder='Selecione que deseja jogar' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Seu nome (ou nickname)</label>
                <Input id='name' placeholder='Como te chamam dentro do game?' />
              </div>

              <div className='grid grid-cols gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                  <Input id='yearsPlaying' placeholder='Tudo bem ser ZERO' />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='discord'>Qual seu Discord</label>
                  <Input id='discord' placeholder='Usuario #00000' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='weekDays'>Quando costuma jogar</label>

                  <div className='grid grid-cols-4 gap-2'>
                    <button
                      className='w-8 h-8 roundend bg-zinc-900'
                      title='Domingo'
                    >
                      D
                    </button>
                    <button
                      className='w-8 h-8 roundend bg-zinc-900'
                      title='Segunda'
                    >
                      S
                    </button>
                    <button
                      className='w-8 h-8 roundend bg-zinc-900'
                      title='Terça'
                    >
                      T
                    </button>
                    <button
                      className='w-8 h-8 roundend bg-zinc-900'
                      title='Quarta'
                    >
                      Q
                    </button>
                    <button
                      className='w-8 h-8 roundend bg-zinc-900'
                      title='Quinta'
                    >
                      Q
                    </button>
                    <button
                      className='w-8 h-8 roundend bg-zinc-900'
                      title='Sexta'
                    >
                      S
                    </button>
                    <button
                      className='w-8 h-8 roundend bg-zinc-900'
                      title='Sabado'
                    >
                      S
                    </button>
                  </div>
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor='hourStart'>Qual horario do dia?</label>

                  <div className='grid grid-cols-2 gap-2'>
                    <Input type='time' id='hourStart' placeholder='De' />
                    <Input type='hourEnd' id='hourStart' placeholder='Até' />
                  </div>
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm '>
                <Input type='checkbox' name='' placeholder='' />
                Costumo me conectar no chat de voz
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close
                  type='button'
                  className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                >
                  Cancelar
                </Dialog.Close>
                <button
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  type='submit'
                >
                  <GameController size={24} /> Enconrar Dou
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
