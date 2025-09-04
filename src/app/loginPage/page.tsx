"use client"

import React, { useState } from 'react';
import { Phone } from 'lucide-react';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    console.log(`Signed up with phone number: +91${phoneNumber}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md mx-auto bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Welcome to DS90
          </h1>
          <p className="text-gray-400 mt-2">Enter your phone number to get started.</p>
        </div>

        {error && (
          <div className="flex items-center p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                +91
              </div>
              <Phone className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 h-full w-5" />
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="w-full pl-12 pr-10 py-3 bg-gray-800 border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all"
                placeholder="98765 43210"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}