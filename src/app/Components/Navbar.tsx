"use client";
import { Home, Bell, User, ClipboardClock, CookingPot } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/Home");
  };
  const handleScheduleClick = () => {
    router.push("/Schedule");
  };
  const handleFoodClick = () => {
    router.push("/FoodStalls");
  };
  const handleProfileClick = () => {
    router.push("/Profile");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-end z-50 pointer-events-none">
      <div className="relative w-full flex justify-center items-end pb-4 pointer-events-auto">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
            className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white"
            onClick={handleFoodClick}
          >
            <span className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center">
              <CookingPot className="text-black w-6 h-6" />
            </span>
          </button>
        </div>

        <div className="w-[95vw] max-w-xl bg-black rounded-[2rem] flex justify-between items-center px-6 py-4 shadow-xl relative z-10">
          <button onClick={handleHomeClick}>
            <NavItem icon={<Home size={28} />} label="Home" />
          </button>

          <button onClick={handleScheduleClick}>
            <NavItem icon={<ClipboardClock size={28} />} label="Schedule" />
          </button>

          <div className="w-16" />
          <button>

            <NavItem icon={<Bell size={28} />} label="Notification" />
          </button>
          
          <button onClick={handleProfileClick}>
            <NavItem icon={<User size={28} />} label="Profile" />
          </button>
        </div>
      </div>
    </div>
  );
}

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <div className="flex flex-col items-center flex-1">
      <span className="text-white">{icon}</span>
      <span
        className={`mt-1 text-sm font-semibold ${
          active ? "text-green-500" : "text-white/80"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
