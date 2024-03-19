import HomeBtn from '@/components/HomeBtn'
import { ReactNode } from 'react'

export default function SubPagesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <HomeBtn />
      {children}
    </main>
  )
}
