"use client"

import React, { useState } from 'react';
import { Contact, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Alert from '../Components/Alert';
import './login.css';

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
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

  return(
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 px-4">
      <div className="w-full max-w-sm bg-neutral-900 text-white">

          <h2 className="text-2xl font-semibold mb-1">Log in to your account ✨</h2>
          <p className="text-sm text-neutral-400 mb-6">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="block text-sm mb-2">Mobile Number</label>
            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3 top-4 text-neutral-400"
              />
              <input
                type="number"
                placeholder="Enter your mobile number"
                className="w-full p-3 pl-10 mb-4 rounded-lg bg-neutral-800 border-2 border-pink-500/30 text-sm focus:outline-none focus:border-0 focus:ring-2 focus:ring-pink-500"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <label className="block text-sm mb-2">Name</label>
            <div className="relative mb-2">
              <Contact
                size={16}
                className="absolute left-3 top-4 text-neutral-400"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 pl-10 rounded-lg bg-neutral-800 border-2 border-pink-500/30 text-sm focus:outline-none focus:border-0 focus:ring-2 focus:ring-pink-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 mt-6 rounded-lg font-semibold"
            >
              Log In
            </button>
          </form>

          {showAlert && <Alert type={alertType === "Success" ? "success" : "danger"} text={alertMessage} />}
        </div>
      </div>
  )
}