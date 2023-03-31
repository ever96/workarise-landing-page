import { HomeHero } from "@components/HomeHero/HomeHero.component"
import { WhatWeOffer } from "@components/WhatWeOffer/WhatWeOffer.component"
import { MainFeatures } from "@components/MainFeatures/MainFeatures.component"
import { HomeWhoWeAre } from "@components/HomeWhoWeAre/HomeWhoWeAre.component"
import { VideoHome } from "@components/VideoHome/VideoHome.component"
import { ChoosePlan } from "@components/ChoosePlan/ChoosePlan.component"

const Home = () => {
  return (
    <main>
      <HomeHero />
      <WhatWeOffer />
      <MainFeatures />
      <HomeWhoWeAre />
      <VideoHome />
      <ChoosePlan section="home" />
    </main>
  )
}

export default Home