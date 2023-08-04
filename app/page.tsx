import Image from "next/image";
import classNames from "classnames";

const Home = () => {
  return (
    <main className="h-full w-full">
      <div
        className={classNames(
          "relative h-1/2 w-full",
          "bg-[url('/images/hero.jpg')]",
          "bg-no-repeat bg-center bg-fixed bg-cover"
        )}
      >
        <div className="bg-black w-full h-full bg-opacity-60">
          <nav className="p-5">
            <Image src="/images/logo.png" alt="Logo" width="100" height="0" />
          </nav>
          <div className={classNames(
            "mx-auto flex justify-center w-full text-center flex-col",
            "mt-[12%] lg:mt-[5%]"
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
        </div>
      </div>
    </main>
  )
}

export default Home;
