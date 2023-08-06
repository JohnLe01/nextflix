import classNames from "classnames";
import SplashPage from "@/components/SplashPage";

const Home = () => {
  return (
    <main className="h-full w-full">
      <SplashPage home>
        <div className={classNames(
          "mx-auto flex justify-center w-full text-center flex-col",
          "my-[50%] sm:my-[40%] md:my-[25%] lg:my-[15%]"
        )}>
          <h1 className={classNames(
            "text-white text-[2rem] font-bold",
            "lg:text-[3rem] lg:font-black")
          }>
            Unlimited movies, TV shows, and more
          </h1>
          <p className="mt-4 text-white md:text-[1.5rem] md:font-normal">
            Watch anywhere. Cancel anytime.
          </p>
        </div>
      </SplashPage>
    </main>
  )
}

export default Home;
