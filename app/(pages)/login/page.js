"use client";
import Link from "next/link";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="w-3/4 mx-auto flex flex-col place-items-center">
        <h1>Login</h1>
        <form className="flex flex-col gap-5 mt-5">
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="flex flex-col">
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
            />
            <span className="cursor-pointer" onClick={() => setShow(!show)}>
              {show ? (
                <IoEyeOutline size={25} />
              ) : (
                <IoEyeOffOutline size={25} />
              )}
            </span>
          </div>
          <div className="input-btn">
            <button type="submit" className="bg-blue-gray-500 p-3">
              Login
            </button>
          </div>
          <div className="input-btn">
            <button type="submit">Sign in with Google</button>
          </div>
          <div className="input-btn">
            <button type="submit">Sign in with Github</button>
          </div>
        </form>
        <p className="text-center text-gray mt-5">
          Don't have an account yet?
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </>
  );
};

export default Login;
