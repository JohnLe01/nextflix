import classNames from "classnames";
import SplashPage from "@/components/SplashPage";
import Input from "@/components/Input";
import LoginRegisterForm from "./LoginRegisterForm";

const Login = () => (
  <SplashPage>
    <div className="flex justify-center">
      <div className={classNames(
        "bg-black bg-opacity-70 px-16 py-16 self-center mt-5",
        "lg:w-2/5 lg:max-w-md rounded-md w-full"
      )}>
        <LoginRegisterForm />
      </div>
    </div>
  </SplashPage>
);

export default Login;
