"use client";
import { ClipboardCheck, Info, User, ClipboardClock, CookingPot } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { icon: <ClipboardCheck />, label: "Ready", route: "/Ready", onClick: "/Ready" },
  { icon: <ClipboardClock />, label: "Pending", route: "/Pending", onClick: "/Pending" },
  { icon: <Info />, label: "About", route: "/InfoPage", onClick: "/InfoPage" },
  { icon: <User />, label: "Profile", route: "/Profile", onClick: "/Profile" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    router.push("/Home");
  };
  const handleScheduleClick = () => {
    router.push("/Schedule");
  };
  const handleOrdersClick = () => {
    router.push("/AllOrders");
  };
  const handleProfileClick = () => {
    router.push("/Profile");
  };
  const handleInfoClick = () => {
    router.push("/InfoPage");
  };

  const hideNavbarRoutes = ["/Login", "/OTP", "/Cart"];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);
  if (shouldHideNavbar) return null;

  const leftNavItems = navItems.slice(0, 2);
  const rightNavItems = navItems.slice(2);

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-end z-50 pointer-events-none">
      <div className="relative w-full flex justify-center items-end pb-4 pointer-events-auto">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
            className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-black"
            onClick={handleOrdersClick}
          >
            <span className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
              <CookingPot className="text-black w-6 h-6" />
              <span className="absolute -bottom-6 text-sm font-semibold text-white/80">
                Orders
              </span>
            </span>
          </button>
        </div>

        <div className="w-[95vw] max-w-xl bg-black rounded-[2rem] flex justify-between items-center px-6 py-4 shadow-xl relative z-10">
          {leftNavItems.map(item => (
            <>
              <button 
              key={item.route}
              onClick={() => router.push(item.onClick)}>
                <NavItem icon={item.icon} label={item.label} active={pathname === item.route} />
              </button>
            </>
          ))}  
              <div className="w-16" />
          {rightNavItems.map(item => (
            <>
              <button 
              key={item.route}
              onClick={() => router.push(item.onClick)}>
                <NavItem icon={item.icon} label={item.label} active={pathname === item.route} />
              </button>
            </>
          ))} 
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
      <span className={active ? "text-[#66bfff]" : "text-white/80"}>{icon}</span>
      <span className={`mt-1 text-sm font-semibold ${active ? "text-[#66bfff]" : "text-white/80"}`}>{label}</span>
    </div>
  );
}