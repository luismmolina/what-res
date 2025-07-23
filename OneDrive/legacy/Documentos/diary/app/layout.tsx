import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Diary',
  description: 'AI-powered personal diary for tracking thoughts and tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 