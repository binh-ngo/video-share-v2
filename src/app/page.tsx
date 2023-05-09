'use client'

import { Cards } from "./components/Cards"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

export default function Home() {
  return (
    <main>
    <Navbar />
    <Cards/>
    <Footer />
    </main>
  )
}
