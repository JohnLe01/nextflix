'use client'
import { useCallback, useState, useMemo } from "react";
import Input from "@/components/Input";
import axios from "axios";

enum LOGIN_MODE {
  LOGIN,
  REGISTER
}

const LoginRegisterForm = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState(LOGIN_MODE.LOGIN);
  const isLogin = useMemo(() => mode === LOGIN_MODE.LOGIN, [mode]);

  const toggleMode = useCallback(() => {
    setMode((currMode) =>
      currMode === LOGIN_MODE.LOGIN
      ? LOGIN_MODE.REGISTER
      : LOGIN_MODE.LOGIN
    );
  }, []);
  
  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        userName,
        password
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h2 className="text-white text-4xl mb-8 font-semibold">
        {isLogin ? "Sign In" : "Register"}
      </h2>
      <div className="flex flex-col gap-4">
        {!isLogin && (
          <Input
            label="Username"
            onChange={(ev) => setUserName(ev.target.value)}
            id="name"
            value={userName}
          />
        )}
        <Input
          label="Email"
          onChange={(ev) => setEmail(ev.target.value)}
          id="email"
          type="email"
          value={email}
        />
        <Input
          label="Password"
          onChange={(ev) => setPassword(ev.target.value)}
          id="password"
          type="password"
          value={password}
        />
      </div>
      <button className="
        bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition
      ">
        {isLogin ? "Sign In" : "Register"}
      </button>
      <p className="text-neutral-500 mt-12">
        {isLogin ? "New to Nextflix?" : "Already have an account?"}
        <span onClick={toggleMode} className="text-white ml-1 hover:underline cursor-pointer">
          {isLogin ? "Sign up now.": "Sign in."}
        </span>
      </p>
    </>
  );
};

export default LoginRegisterForm;