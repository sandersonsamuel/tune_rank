import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-background min-h-screen flex flex-col items-center gap-5'>
      <main className='space-y-3 flex flex-col items-center min-h-[calc(100vh-60px)] my-16'>
        <Image
          className='animate-[spin_20s_linear_infinite]'
          src="https://melodymingler.vercel.app/assets/jesusAlbumC-lmUkpkRR.png"
          alt="Jesus is king album photo"
          width={450}
          height={450}
          priority
        />

        <h2 className='text-5xl'>Avalie suas músicas favoritas.</h2>

        <h2 className='text-5xl mt-20'>Busque por artistas, albuns ou músicas.</h2>

        <div className='flex gap-5 mt-10'>
          <div className='flex flex-col items-center gap-3'>
            <p className='text-2xl'>Kendrick Lammar</p>
            <img className='size-[270px]' src="https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918" alt="kendrick lammar photo" />
          </div>
          <div className='flex flex-col items-center gap-3'>
            <p className='text-2xl'>To pimp a butterfly</p>
            <img className='size-[270px]' src="https://upload.wikimedia.org/wikipedia/pt/c/c9/To_Pimp_a_Butterfly.jpg" alt="To pimp a butterfly album photo" />
          </div>

          <div className='flex flex-col items-center gap-3'>
            <p className='text-2xl'>Money trees</p>
            <img className='size-[270px]' src="https://i.scdn.co/image/ab67616d0000b2732cd55246d935a8a77cb4859e" alt="Money trees music photo" />
          </div>
        </div>

        <Button size={"lg"} className='text-xl mt-5'>Avalie Agora</Button>

      </main>

      <footer className='mt-auto py-5 bg-black/20 w-full'>
        <p className='text-xl text-center'>© 2025 Tune Rank. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
