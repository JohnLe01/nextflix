'use client'
import classNames from "classnames";
import SplashPage from "@/components/SplashPage";
import Input from "@/components/Input";

const Login = () => (
  <SplashPage>
    <div className="flex justify-center">
      <div className={classNames(
        "bg-black bg-opacity-70 px-16 py-16 self-center mt-5",
        "lg:w-2/5 lg:max-w-md rounded-md w-full"
      )}>
        <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            onChange={() => {}}
            id="email"
            type="email"
            value=""
          />
        </div>
      </div>
    </div>
  </SplashPage>
);

export default Login;
