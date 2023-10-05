import Image from 'next/image'
import { Inter } from 'next/font/google'

import Head from'next/head'
import Feed from '../component/Feed'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div >
    <Head>
      <title> Reels</title>
      </Head>
      <Feed/>
     

    </div>
  )
}
