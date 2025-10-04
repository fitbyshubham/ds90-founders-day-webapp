"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Alert from '../Components/Alert';
import './login.css';

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

  // Carousel logic: show one image as background, switch every 5s
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-end relative overflow-hidden px-0">
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

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white rounded-t-4xl shadow-lg px-6 pt-8 pb-6 z-10 mx-auto mt-auto">
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