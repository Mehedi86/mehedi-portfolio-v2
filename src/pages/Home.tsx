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
          <section id="home">
            <Banner />
          </section>
          <section id="about">
            <About />
          </section>
          <CertificateBtn />
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  )
}
