import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/Providers'
import localFont from 'next/font/local';
import { ChildrenType } from '../types/types';
import Taskbar from '@/components/server/Taskbar';
import Desktop from '@/components/server/Desktop';
import LockScreen from '@/components/client/LockScreen';

// Font Family
const segoeUi = localFont({
  src: [
    {
      path: '../../public/fonts/segoeuil.ttf',
      weight: '200',
    },
    {
      path: '../../public/fonts/segoeuisl.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/segoeui.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/seguisb.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/seguibl.ttf',
      weight: '800',
    },
  ],
});

// Metadata
export const metadata: Metadata = {
  title: 'Rahul Kumar',
  description: "Hey there! I'm Rahul Kumar, a web developer, and this is my portfolio at rahusweb.in. Dive into my world of coding and design, where I create websites that not only look good but work like a charm. Explore my projects and let's bring your online ideas to life together. Click now for a web-tastic journey!",
  keywords:['rahulkumar703','react-developer','next-developer','next.js-developer','frontend developer','web-developer','rahul','rahul web developer','rahulsweb','rahulsweb .in','btech student','mce motihari','rahul atplc','motihari college of engineering'],
}

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${segoeUi.className} flex flex-col h-screen overflow-hidden`} >
        <Providers>
          <LockScreen>
            <>
              <Desktop />
              {children}
              <Taskbar />
            </>
          </LockScreen>
        </Providers>
      </body>
    </html>
  )
}
