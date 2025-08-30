// app/layout.tsx
import "./globals.css"
import Footer from "./components_home/Footer"
import Header from "./components_home/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        <Header/>
        {/* Add padding-bottom so content never overlaps navbar */}
        <main className="flex-1 pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
