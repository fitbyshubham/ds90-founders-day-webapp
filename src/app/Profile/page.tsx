"use client";
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center bg-white pb-30">
      <div className="w-full bg-white overflow-hidden flex flex-col max-h-full">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-center mb-6">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
              alt="Profile"
              className="w-32 h-42 rounded-full mx-auto object-cover "
            />
            <h2 className=" text-2xl font-semibold">Hello Samarth</h2>
            <p className="text-sm text-gray-500 mb-60">+91 99177 11177</p>
          </div>

          <div className=" flex items-center justify-between px-5 py-5 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcmCG2F_4GYTBV3EwUTIQJztQTxt2BbYMAg&s"
                alt="Recent Transactions"
                className="w-12 h-12"
              />
              <span className="text-base w-12 h-12">Recent Transactions</span>
            </div>
            <span className="text-gray-400">{">"}</span>
          </div>

          <div className="flex items-center justify-between px-5 py-5 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://www.svgrepo.com/show/192522/customer-service-support.svg"
                alt="Help & Support"
                className="w-10 h-10"
              />
              <span className="text-base">Help & Support</span>
            </div>
            <span className="text-gray-400">{">"}</span>
          </div>

          <div className="flex items-center justify-between px-5 py-5 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4421/4421772.png"
                alt="Logout"
                className="w-6 h-6"
              />
              <span className="text-base">Logout</span>
            </div>
            <span className="text-gray-400">{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
