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
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 px-4">
      <div className="w-full max-w-sm bg-neutral-900 text-white">

        <img src="/OTP.svg" alt="OTP Illustration" className=" w-64 h-64 grid items-center mb-6" />
          <h2 className="text-2xl font-semibold mb-1">Please enter OTP ✨</h2>
          <p className="text-sm text-neutral-400 mb-8">
            Please enter the OTP sent to you on Whatsapp.
          </p>

          <div className="flex justify-center gap-3">
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
                className="w-12 h-12 text-center text-lg font-semibold rounded-lg border border-neutral-600 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            ))}
          </div>

          <button 
          onClick={handleRoute}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 mt-6 rounded-lg font-semibold"
          >
            Verify
          </button>
        </div>
      </div>
  )
}