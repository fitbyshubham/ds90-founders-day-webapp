"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2]">
      <div className="w-full max-w-sm bg-[#f2f2f2] rounded-xl p-8">
        
          
          <div className="mb-10 flex justify-center"> 
          <img src="/ds901.png"  alt="Logo" className="w-25 h-25" />
          </div>

        <h1 className="text-[28px] font-bold text-[#2F4349] mb-1 ">Login</h1>
        <p className="text-[#2F4349] mb-4 text-[15px]">Login to continue</p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
              Email ID
            </label>
            <input
              type="email"
              placeholder="Enter Email ID"
              className="w-full px-4 py-3 rounded-lg border border-[#2F4349] text-[#2F4349] placeholder-[#2F4349] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2F4349]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full px-4 py-3 rounded-lg border border-[#2F4349] text-[#2F4349] placeholder-[#2F4349] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2F4349] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-[#2F4349] hover:text-[#2F4349]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#2F4349] mb-90 text-white text-[15px] font-medium rounded-lg hover:bg-[#2F4349] transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export { Login };
