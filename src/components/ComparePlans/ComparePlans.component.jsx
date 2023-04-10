import { ChoosePlan } from "../ChoosePlan/ChoosePlan.component"
import CheckIcon from '@mui/icons-material/Check';

export const ComparePlans = () => {
  return (
    <>
      <section 
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(28,204,127,1) 180%)"
      }}  
      className="w-full flex flex-col items-center py-12 px-2 gap-4"
      >
        <h1 className='text-2xl font-extrabold text-center leading-9 md:text-3xl lg:text-6xl'>Ready To Get Started?</h1>
        <ChoosePlan section="comparePlans" />
      </section>
      <section className="w-full flex flex-col items-center py-12 gap-5 lg:gap-12">
        <h2 className='text-2xl font-extrabold leading-9 md:text-3xl lg:text-6xl'>Compare Features</h2>
        <div className="w-full flex justify-between font-bold px-5 text-lg lg:text-2xl lg:w-[50%]">
          <p>Overview</p>
          <div className="flex gap-3 lg:gap-24">
            <p>Free</p>
            <p>Pro</p>
            <p>Team</p>
          </div>
        </div>
        <ul className="w-full flex flex-col lg:w-[50%]">
          <li className="py-3 bg-[#5555550D] px-5 ">
            <div className="w-full flex justify-between items-center font-medium lg:text-xl">
              <p>Create Tasks</p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 px-5 ">
            <div className="w-full flex justify-between font-medium lg:text-xl">
              <p>Gantt Chart </p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 bg-[#5555550D] px-5 ">
            <div className="w-full flex justify-between font-medium lg:text-xl">
              <p>Notifications </p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 px-5 ">
            <div className="w-full flex justify-between font-medium lg:text-xl">
              <p>Organizations </p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
              <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 bg-[#5555550D] px-5 ">
            <div className="w-full flex justify-between font-medium lg:text-xl">
              <p>Teams with more than 3 users </p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 px-5 ">
            <div className="w-full flex justify-between font-medium lg:text-xl">
              <p>Meetings </p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 bg-[#5555550D] px-5">
            <div className="w-full flex justify-between font-medium lg:text-xl ">
              <p>Personal Support </p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 px-5">
            <div className="w-full flex justify-between font-medium lg:text-xl ">
              <p>Unlimited Tasks</p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 bg-[#5555550D] px-5">
            <div className="w-full flex justify-between font-medium lg:text-xl ">
              <p>Unlimited Guests</p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
          <li className="py-3 px-5">
            <div className="w-full flex justify-between font-medium lg:text-xl ">
              <p>Coming Soon</p>
              <div className="flex justify-center gap-6 pr-1 lg:gap-[107px] lg:pr-2">
                <span></span>
                <span></span>
                <span><CheckIcon sx={{color: "green.main", fontSize: ["24px", "24px", "36px"]}} /></span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}
