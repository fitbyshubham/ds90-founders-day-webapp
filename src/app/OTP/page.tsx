"use client"

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import '../OTP/OTP.css';

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

  return(
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 bg-white">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg text-black bg-white rounded-xl shadow-lg p-4 sm:p-8">

        <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-center">Please enter OTP ✨</h2>
        <p className="text-xs sm:text-sm text-neutral-400 mb-6 sm:mb-8 text-center">
          Please enter the OTP sent to you on Whatsapp.
        </p>

        <div className="flex justify-center gap-2 sm:gap-3 mb-4">
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
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-2 sm:py-3 mt-4 sm:mt-6 rounded-lg font-semibold text-white text-base sm:text-lg"
        >
          Verify
        </button>
      </div>
    </div>
  )
}