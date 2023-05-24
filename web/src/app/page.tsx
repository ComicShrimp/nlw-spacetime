import { User } from 'lucide-react'
import nlwlogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="item-start border-white/10 relative flex flex-col justify-between overflow-hidden bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        {/* Stripes */}
        <div className="border-white/10 absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
        <a
          href=""
          className="flex-item-center gap-3 text-left transition-colors hover:text-gray-500"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"></User>
          </div>
          <p className="text-sm max-w-[140px] leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwlogo} alt="NLW Spacetime" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            href=""
            className="text-sm text-black inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none hover:bg-green-600"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>
        {/* Copyright */}
        <div>
          Feito com <span className="text-red-500">♥</span>
        </div>
      </div>

      {/* Rigth */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
