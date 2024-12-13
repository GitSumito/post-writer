import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { Toaster } from '@/components/ui/toaster'

const fontNotoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Post writer',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['blog', 'webアプリケーション', '投稿'],
  authors: [{ name: 'Sumito' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={cn('bg-background antialiased min-h-screen', fontNotoSansJP.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
