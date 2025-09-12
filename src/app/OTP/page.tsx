"use client"
import { useState } from "react";
import './OTP.css'
import { useRouter } from "next/navigation";

export default function OTP(){
    const router = useRouter()
    const handleRedirect = (e: React.FormEvent) => {
        e.preventDefault()
        router.push("/Home")
    }
    
    return(
        <div className="absolute w-full h-full flex flex-col justify-center items-center gap-5 bg-beige-200 border-3 border-brown-800 rounded shadow-[4px_4px_0px_black]">
            <h2 className="text-2xl font-extrabold text-brown-800">Enter OTP</h2>
            <form 
            onSubmit={handleRedirect}
            className="flex flex-col items-center gap-4">
            <input
                type="number"
                placeholder="OTP"
                className="w-60 h-10 px-3 border-3 bg-beige-100 border-brown-800 rounded shadow-[4px_4px_0px_black] font-semibold text-gray-800 placeholder-gray-500 focus:border-amber-100 outline-none"
            />
            <button 
            type="submit"
            className="w-32 h-10 border-3 border-brown-800 rounded shadow-[4px_4px_0px_black] font-semibold text-gray-800 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
                Confirm!
            </button>
            </form>
        </div>
    )
}