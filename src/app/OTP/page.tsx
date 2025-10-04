"use client"

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../OTP/OTP.css';

const images = [
  {
    image: "https://plus.unsplash.com/premium_photo-1727552116095-889cb485a803?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBzZWxmaWV8ZW58MHx8MHx8fDA%3D",
    imageNo: "1"
  },
  {
    image: "https://media.istockphoto.com/id/1479798765/photo/vertical-group-of-happy-friends-posing-for-a-selfie-on-a-spring-day-as-they-party-together.jpg?s=612x612&w=0&k=20&c=3ch9k6zg71DfVtWzf1Q-TgJXPeQyoflY7fCpiPLmoZs=",
    imageNo: "2"
  },
  {
    image: "https://c8.alamy.com/comp/EC1E47/indian-group-friends-park-enjoy-EC1E47.jpg",
    imageNo: "3"
  },
];

export default function LoginPage() {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/Home');
  }

  const length = 4;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // only numbers
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0];
    setOtp(newOtp);

    if (index < length - 1 && value) {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
        if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
    }
    }
  };

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return(
    <div className="min-h-screen flex flex-col justify-end bg-black relative overflow-hidden px-0">
            {/* Fullscreen Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${images[current].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 1s ease-in-out"
        }}
        aria-hidden="true"
      />
      {/* Overlay for contrast (optional) */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 -z-10" aria-hidden="true" />

      {/* Welcome Text */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 w-full flex flex-col items-center">
        <span className="text-white bg-black/30 px-4 py-2 text-4xl font-bold rounded mb-2 shadow-lg">
          Welcome To<br />Chandbagh 90!
        </span>
        <span className="text-white bg-black/30 px-3 py-1 text-lg font-semibold rounded shadow">
          An app made by the students
        </span>
      </div>

      {/* OTP Card */}
      <div className="relative w-full max-w-md bg-white rounded-t-4xl shadow-lg px-6 pt-8 pb-6 z-10 mx-auto">
          <div className="text-center z-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-1">Please enter the OTP</h1>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 sm:mb-8 text-center">
              Enter the OTP sent to you on Whatsapp.
            </p>
          </div>
          <div className="mb-4 flex flex-row gap-2 justify-center">
            {otp.map((digit, index) => (
              <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-semibold rounded-lg border-2 border-black/60 text-black focus:outline-none focus:border-0 focus:ring-2 focus:ring-black"
              />
            ))}
          </div>
          <button
            onClick={handleRoute}
            type="submit"
            className="w-full bg-black py-3 rounded-lg font-semibold text-white text-lg"
          >
            Verify
          </button>
      </div>
    </div>

    // <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 bg-white">
    //   <div className="w-full max-w-sm sm:max-w-md md:max-w-lg text-black bg-white rounded-xl shadow-lg p-4 sm:p-8">

    //     <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-center">Please enter OTP ✨</h2>
    //     <p className="text-xs sm:text-sm text-neutral-400 mb-6 sm:mb-8 text-center">
    //       Please enter the OTP sent to you on Whatsapp.
    //     </p>

    //     <div className="flex justify-center gap-2 sm:gap-3 mb-4">
    //       {otp.map((digit, index) => (
    //           <input
    //           key={index}
    //           ref={(el) => { inputRefs.current[index] = el; }}
    //           type="text"
    //           inputMode="numeric"
    //           maxLength={1}
    //           value={digit}
    //           onChange={(e) => handleChange(e, index)}
    //           onKeyDown={(e) => handleKeyDown(e, index)}
    //           className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-semibold rounded-lg border-2 border-black/60 text-black focus:outline-none focus:border-0 focus:ring-2 focus:ring-black"
    //           />
    //       ))}
    //     </div>

    //     <button 
    //       onClick={handleRoute}
    //       className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-2 sm:py-3 mt-4 sm:mt-6 rounded-lg font-semibold text-white text-base sm:text-lg"
    //     >
    //       Verify
    //     </button>
    //   </div>
    // </div>
  )
}