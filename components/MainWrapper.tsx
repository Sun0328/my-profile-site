import Info from "./Info"
import LatestPost from "./LatestPost"
import AboutMe from "./AboutMe"
import Stack from "./Stack"
import FloatingContent from "./animations/FloatingContent"

export const MainWrapper = () => {
  return (
    <FloatingContent>
      <div className="w-full flex flex-col">
        {/* Intro */}
        <section className="flex items-center justify-center">
          <Info />
        </section>

        {/* Main */}
        <section className="flex w-full my-6">

          {/* Left side */}
          <div className="w-3/5 flex flex-col mt-6">
            <LatestPost />
          </div>

          {/* Right side */}
          <div className="w-2/5 flex flex-col items-center justify-start mt-6 space-y-6">
            <AboutMe />
            <Stack />
          </div>
        </section>
      </div>
    </FloatingContent>
  )
}
