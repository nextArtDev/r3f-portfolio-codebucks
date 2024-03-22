import Image from 'next/image'
import bg from '@/public/background/projects-background.webp'
import ProjectList from '@/components/projects'
import { projectsData } from '../../data'
import RenderModel from '@/components/RenderModel'
// import Staff from "@/components/models/Staff";
import dynamic from 'next/dynamic'
// import Cake from '@/components/models/Cake'

const Cake = dynamic(() => import('@/components/models/Cake'), {
  ssr: false,
})

export const metadata = {
  title: 'Projects',
}

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-6 2xl:left-0 h-screen">
        <RenderModel>
          {/* <Staff /> */}
          <Cake />
        </RenderModel>
      </div>
    </>
  )
}
