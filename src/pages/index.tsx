import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetStaticPropsResult } from 'next'

const inter = Inter({ subsets: ['latin'] })

export function getStaticProps(): GetStaticPropsResult<{}> {
  return {
    props: {
    },
    revalidate: 600
  }
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 className="text-3xl">ISR</h1>
    </main>
  )
}
