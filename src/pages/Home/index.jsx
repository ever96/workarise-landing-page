import { Hero } from "@components/Hero/Hero.component"
import { WhatWeOffer } from "@components/WhatWeOffer/WhatWeOffer.component"
import { MainFeatures } from "@components/MainFeatures/MainFeatures.component"

const Home = () => {
  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <MainFeatures />
    </main>
  )
}

export default Home