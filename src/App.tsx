import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedProject } from './components/FeaturedProject'
import { Gallery } from './components/Gallery'
import { Marquee } from './components/Marquee'
import { Projects } from './components/Projects'
import { InvestorRelations } from './components/InvestorRelations'
import { Media } from './components/Media'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Atmosphere } from './components/Atmosphere'
import { Grain } from './components/Grain'
import { Preloader } from './components/Preloader'
import { SmoothScroll } from './components/SmoothScroll'
import { Stats } from './components/Stats'
import { ProjectPage } from './pages/ProjectPage'

function HomePage() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <SmoothScroll />
      <AnimatePresence>
        {!introDone && <Preloader onDone={() => setIntroDone(true)} />}
      </AnimatePresence>
      <Atmosphere />
      <Grain />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <FeaturedProject />
        <Gallery />
        <Marquee />
        <Projects />
        <InvestorRelations />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  )
}

export default App
