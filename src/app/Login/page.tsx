"use client"

import React, { useState } from 'react';
import { Lock, Phone } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  
  return(
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 px-4">
      <div className="w-full max-w-sm bg-neutral-900 text-white">

          <h2 className="text-2xl font-semibold mb-1">Log in to your account ✨</h2>
          <p className="text-sm text-neutral-400 mb-6">
            Welcome back! Please enter your details.
          </p>

          <label className="block text-sm mb-2">Mobile Number</label>
          <div>
          <input
            type="tel"
            autoComplete="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Enter your mobile number"
            className="w-full p-3 mb-4 rounded-lg bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          </div>

          <label className="block text-sm mb-2">Name</label>
          <div className="relative mb-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />

          <button 
          
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 mt-6 rounded-lg font-semibold"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}