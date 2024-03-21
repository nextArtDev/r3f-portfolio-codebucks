'use client'
import Image from 'next/image'
import bg from '@/public/background/home-bg.webp'
import dynamic from 'next/dynamic'
import RenderModel from '@/components/RenderModel'
import Navigation from '@/components/navigation'
import FireFliesBackground from '@/components/FireFliesBackground'
// import Staff from '@/components/models/Staff'
// import { Wizard } from '@/components/models/Wizard'
// const Wizard = dynamic(() => import('@/components/models/Wizard'), {
//   ssr: false,
// })
const Staff = dynamic(() => import('@/components/models/Staff'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          {/* <Wizard /> */}
          <Staff />
        </RenderModel>
      </div>
    </main>
  )
}
