import About from '@/components/content/About'
import Projects from '@/components/content/Projects'
import Banner from '@/components/Header/Banner'

import React from 'react'

export default function Home() {
  return (
    <div>
        <Banner/>
        <About/>
        <Projects/>
    </div>
  )
}
