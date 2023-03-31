import { AboutUsHero } from "@components/AboutUsHero/AboutUsHero.component"
import { AboutUsWhoWeAre } from "@components/AboutUsWhoWeAre/AboutUsWhoWeAre.component"
import { CEOPhrase } from "@components/CEOPhrase/CEOPhrase.component"
import { OurMission } from "@components/OurMission/OurMission.component"
import { OurValues } from "@components/OurValues/OurValues.component"
import { MeetTheTeam } from "@components/MeetTheTeam/MeetTheTeam.component"

const AboutUs = () => {
  return (
    <main>
      <AboutUsHero />
      <AboutUsWhoWeAre />
      <CEOPhrase />
      <OurMission />
      <OurValues />
      {/* <MeetTheTeam /> */}
    </main>
  )
}

export default AboutUs