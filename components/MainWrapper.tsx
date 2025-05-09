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
        <section className="flex w-full my-6 flex-col md:flex-row gap-4">

          {/* Right side - Shows first on mobile */}
          <div className="w-full md:w-2/5 flex flex-col items-center justify-start mt-6 space-y-8 order-first md:order-last">
            <AboutMe />
            <Stack />
          </div>

          {/* Left side - Shows second on mobile */}
          <div className="w-full md:w-3/5 flex flex-col mt-6 order-last md:order-first">
            <LatestPost />
          </div>
        </section>
      </div>
    </FloatingContent>
  )
}
