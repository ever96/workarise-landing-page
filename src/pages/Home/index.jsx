import { Hero } from "@components/Hero/Hero.component"
import { WhatWeOffer } from "@components/WhatWeOffer/WhatWeOffer.component"
import { MainFeatures } from "@components/MainFeatures/MainFeatures.component"
import { WhoWeAre } from "@components/WhoWeAre/WhoWeAre.component"
import { VideoHome } from "@components/VideoHome/VideoHome.component"
import { ChoosePlan } from "@components/ChoosePlan/ChoosePlan.component"

const Home = () => {
  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <MainFeatures />
      <WhoWeAre />
      <VideoHome />
      <ChoosePlan />
    </main>
  )
}

export default Home