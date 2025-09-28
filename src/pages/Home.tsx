import About from '@/components/content/About'
import Projects from '@/components/content/Projects'
import Banner from '@/components/Header/Banner'
import Skills from '@/components/content/Skills'
import Education from '@/components/content/Education'
import CertificateBtn from '@/components/content/CertificateBtn'
import '../../bgStyle.css'
import Contact from '@/components/content/Contact'



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
          <CertificateBtn/>
          <Projects />
          <Skills/>
          <Education/>
          <Contact/>
        </div>
      </div>
    </div>
  )
}
