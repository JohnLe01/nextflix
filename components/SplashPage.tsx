import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

const SplashPage = ({ children, home }: { children?: React.ReactNode, home?: boolean }) => (
  <div
  className={classNames(
    "relative h-full w-full",
    "bg-[url('/images/hero.jpg')]",
    "bg-no-repeat bg-center bg-fixed bg-cover"
  )}
>
  <div className="bg-black w-full h-full bg-opacity-60">
    <nav className="py-5 mx-5 md:mx-[10%]">
      <div className="flex flex-row justify-between">
        <Image src="/images/logo.png" alt="Logo" width="100" height="0" />
        {home && (
          <Link href="/login" className="text-white bg-[rgb(193,17,25)] rounded-sm px-4 py-1">
            Sign In
          </Link>
        )}
      </div>
    </nav>
    {children}
  </div>
</div>
);

export default SplashPage;
