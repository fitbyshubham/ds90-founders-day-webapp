"use client"
import { useState } from "react";
import './login.css'
import { useRouter } from "next/navigation";

export default function Login(){
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter()
  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/OTP")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-beige-50">
      <div className="relative flex flex-col items-center">
        {/* Toggle */}
        <label className="relative flex items-center justify-center gap-6 w-12 h-5 mb-8 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isSignup}
            onChange={() => setIsSignup(!isSignup)}
          />

          {/* Log in text */}
          <span
            className={`absolute -left-20 ${
              !isSignup ? "font-bold text-black" : "font-semibold text-gray-800"
            }`}
          >
            Log in
          </span>

          {/* Sign up text */}
          <span
            className={`absolute left-20 ${
              isSignup ? "font-bold text-black" : "font-semibold text-gray-800"
            }`}
          >
            Sign up
          </span>

          {/* Slider bar */}
          <span className="w-full h-full bg-white border-2 border-gray-800 rounded peer-checked:bg-blue-500 transition"></span>

          {/* Knob */}
          <span className="absolute h-5 w-5 bg-white border-2 border-gray-800 rounded shadow-[3px_3px_0px_black] transition-transform peer-checked:translate-x-7"></span>
        </label>

        {/* Flip Card */}
        <div className="relative w-[300px] h-[350px] [perspective:1000px]">
          <div
            className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
              isSignup ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Front (Login) */}
            <div className="absolute w-full h-full flex flex-col justify-center items-center gap-5 bg-beige-200 border-3 border-brown-800 rounded shadow-[4px_4px_0px_black] [backface-visibility:hidden]">
              <h2 className="text-2xl font-extrabold text-brown-800">Log in</h2>
              <form className="flex flex-col items-center gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-60 h-10 px-3 border-3 bg-beige-100 border-brown-800 rounded shadow-[4px_4px_0px_black] font-semibold text-gray-800 placeholder-gray-500 focus:border-amber-100 outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-60 h-10 px-3 border-3 bg-beige-100 border-brown-800 rounded shadow-[4px_4px_0px_black] font-semibold text-gray-800 placeholder-gray-500 focus:border-amber-100 outline-none"
                />
                <button className="w-32 h-10 border-3 border-brown-800 rounded shadow-[4px_4px_0px_black] font-semibold text-brown-800 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
                  Let`s go!
                </button>
              </form>
            </div>

            {/* Back (Signup) */}
            <div className="absolute w-full h-full flex flex-col justify-center items-center gap-5 bg-beige-200 border-3 border-brown-800 rounded shadow-[4px_4px_0px_black] [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h2 className="text-2xl font-extrabold text-brown-800">Sign up</h2>
              <form 
              onSubmit={handleRedirect}
              className="flex flex-col items-center gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-60 h-10 px-3 border-3 bg-beige-100 border-brown-800 rounded shadow-[4px_4px_0px_black] font-semibold text-gray-800 placeholder-gray-500 focus:border-amber-100 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-60 h-10 px-3 border-3 bg-beige-100 border-brown-800 rounded shadow-[4px_4px_0px_black] font-semibold text-gray-800 placeholder-gray-500 focus:border-amber-100 outline-none"
                />
                <button 
                type="submit"
                className="w-32 h-10 border-3 border-brown-800 rounded shadow-[4px_4px_0px_black] font-semibold text-gray-800 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
                  Confirm!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}