import About from '@/components/content/About'
import Projects from '@/components/content/Projects'
import Banner from '@/components/Header/Banner'
import ParallaxDemo from './ParallaxDemo'
import Skills from '@/components/content/Skills'



export default function Home() {
  return (
    <div>
      <div className="parallax-container">
        <div className="dark:parallax-background"></div>
        <div className="stars-layer stars1"></div>
        <div className="stars-layer stars2"></div>
        <div className="stars-layer stars3"></div>
        <div>
          <Banner />
          <About />
          <Projects />
          {/* <ParallaxDemo /> */}
          <Skills/>
        </div>
      </div>
    </div>
  )
}
