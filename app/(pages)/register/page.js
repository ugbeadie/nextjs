"use client";
import Link from "next/link";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Register = () => {
  const [show, setShow] = useState({ password: false, cPassword: false });

  return (
    <section className="w-3/4 mx-auto flex flex-col place-items-center">
      <h1>Register</h1>
      <form className="flex flex-col gap-5 mt-5">
        <div className="input-group">
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="input-group">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="flex flex-col">
          <input
            type={`${show.password ? "text" : "password"}`}
            name="password"
            placeholder="Password"
          />
          <span
            className="cursor-pointer"
            onClick={() => setShow({ ...show, password: !show.password })}
          >
            {show.password ? (
              <IoEyeOutline size={25} />
            ) : (
              <IoEyeOffOutline size={25} />
            )}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            type={`${show.cPassword ? "text" : "password"}`}
            name="cPassword"
            placeholder="Confirm Password"
          />
          <span
            className="cursor-pointer"
            onClick={() => setShow({ ...show, cPassword: !show.cPassword })}
          >
            {show.cPassword ? (
              <IoEyeOutline size={25} />
            ) : (
              <IoEyeOffOutline size={25} />
            )}
          </span>
        </div>
        <div className="input-btn">
          <button type="submit" className="bg-blue-gray-500 p-3">
            Register
          </button>
        </div>
      </form>
      <p className="text-center text-gray mt-5">
        Have an account?
        <Link href={"/login"} className="text-blue-700">
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default Register;
