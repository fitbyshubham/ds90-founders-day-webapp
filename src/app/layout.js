import './globals.css'

export const metadata = {
  title: 'DS90 Founders Day',
  description: 'DS90 Founders Day App',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen pb-16">
        {children}
      </body>
    </html>
  )
}
