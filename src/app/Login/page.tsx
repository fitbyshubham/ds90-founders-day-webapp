"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Alert from '../Components/Alert';
import './login.css';

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const router = useRouter();

  const handleRoute = () => {
    router.push('/OTP');
  }

  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("Success")
  const [alertMessage, setAlertMessage] = useState("empty")
  const showAlertMessage = (type: string, message: string) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => {
        setShowAlert(false)
    }, 5000);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mobile.trim()) {
      showAlertMessage("Error", "Mobile number is required");
      return;
    }
    if (mobile.length < 10 || mobile.length > 10) {
      showAlertMessage("Error", "Mobile number must be 10 digits");
      return;
    }
    if (!/^\d+$/.test(mobile)) {
      showAlertMessage("Error", "Mobile number must contain only digits");
      return;
    }
    if (!name.trim()) {
      showAlertMessage("Error", "Name is required");
      return;
    }
    showAlertMessage("Success", "Login successful!");
    handleRoute();
  };

  return (
    <div className="min-h-screen flex flex-col justify-end bg-black relative overflow-hidden px-0">
      {/* Video Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end z-0">
        <video
          src="/Videos/loginOTP.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white rounded-t-4xl shadow-lg px-6 pt-8 pb-6 z-10 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="text-center z-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Let's get you <br /> signed in!</h1>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 sm:mb-8 text-center">
              Enter your details below.
            </p>
          </div>
          <div className="mb-4 flex flex-row gap-2">
            <div className="flex items-center border border-neutral-300 rounded-lg bg-white px-3 py-2 min-w-[90px]">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="bg-transparent text-base outline-none w-10 cursor-not-allowed text-neutral-400"
                style={{ appearance: 'none', WebkitAppearance: 'none' }}
                disabled
              >
                <option value="+91">+91</option>
              </select>
              <span className="ml-1 text-neutral-400 text-xs">▼</span>
            </div>
            <input
              type="number"
              placeholder="Phone Number"
              className="flex-1 p-3 rounded-lg border border-neutral-300 text-base focus:outline-none focus:ring-2 focus:ring-black"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border border-neutral-300 text-base focus:outline-none focus:ring-2 focus:ring-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black py-3 rounded-lg font-semibold text-white text-lg"
          >
            Sign In
          </button>
        </form>
        {showAlert && <Alert type={alertType === "Success" ? "success" : "danger"} text={alertMessage} />}
      </div>
    </div>
  );
}