import Info from "./Info"
import LatestPost from "./LatestPost"
import AboutMe from "./AboutMe"
import Stack from "./Stack"

export const MainWrapper = () => {
  return (
    <div className='w-full flex flex-col'>

      {/* 上半部分 Intro */}
      <section className="flex items-center justify-center my-6">
        <Info />
      </section>

      {/* Main home */}
      <section className="flex w-full my-4">
        {/* Left side */}
        <div className="w-3/5 flex flex-col">
          <LatestPost />
        </div>

        {/* Right side */}
        <div className="w-2/5 flex flex-col items-center justify-start space-y-6">
          <AboutMe />
          <Stack />
        </div>
      </section>

    </div>
  )
}
