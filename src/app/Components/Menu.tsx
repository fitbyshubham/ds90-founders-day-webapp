import React from "react";
import { Menu as Menus } from "../Constants/Menu.js";

type VegType = "veg" | "egg" | "nonveg" | string;

type MenuItemType = {
  img: string;
  vegType: VegType;
  name: string;
  price: number;
};

type StallType = {
  stallNo: string | number;
  name: string;
  menu: {
    image: string;
    vegType: VegType;
    title: string;
    price: number | string;
  }[];
};

// Transform Menus array to an object keyed by stallNo for efficient lookup
const getMenuByStallNo = (Menus: StallType[]): Record<string, MenuItemType[]> =>
  Array.isArray(Menus)
    ? Menus.reduce((acc, stall) => {
        acc[stall.stallNo] = stall.menu.map((item) => ({
          img: item.image,
          vegType: item.vegType,
          name: item.title,
          price: Number(item.price),
        }));
        return acc;
      }, {} as Record<string, MenuItemType[]>)
    : {};

const TypedMenus = getMenuByStallNo(Menus);

// Icon components (same as your version)
const BackIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-4 h-4 inline ml-1 text-white/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor"/>
    <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GroupIcon = () => (
  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87M12 7a4 4 0 110-8 4 4 0 010 8z" />
  </svg>
);

const DotsIcon = () => (
  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx={12} cy={6} r={1.5} />
    <circle cx={12} cy={12} r={1.5} />
    <circle cx={12} cy={18} r={1.5} />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-green-600 inline" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.784.57-1.838-.197-1.54-1.118l1.286-3.945a1 1 0 00-.364-1.118L2.074 9.372c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.945z"/>
  </svg>
);

const VegIcon = () => (
  <span className="inline-block w-4 h-4 border-2 border-green-500 bg-white rounded-sm mr-2">
    <span className="block w-2 h-2 bg-green-500 rounded mx-auto my-1"></span>
  </span>
);
const EggIcon = () => (
  <span className="inline-block w-4 h-4 bg-yellow-100 border border-yellow-500 rounded-full mr-2">
    <span className="block w-2 h-2 bg-yellow-500 rounded-full mx-auto my-1"></span>
  </span>
);
const NonVegIcon = () => (
  <span className="inline-block w-4 h-4 border-2 border-orange-500 bg-white rounded-sm mr-2">
    <span className="block w-2 h-2 bg-orange-500 rounded mx-auto my-1"></span>
  </span>
);

type FilterBadgeProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  active: boolean;
};

const FilterBadge = ({ icon, children, active }: FilterBadgeProps) => (
  <div className={`flex items-center px-3 py-1 rounded-lg mr-2 text-sm font-semibold ${active ? "bg-green-900/60 text-green-300" : "bg-gray-700 text-white/80"} border border-gray-600`}>
    {icon}
    {children}
  </div>
);

const MenuItem = ({ img, vegType, name, price }: MenuItemType) => (
  <div className="flex items-center py-3 rounded-xl shadow-md">
    <div className="w-14 h-14 flex-shrink-0 rounded-md overflow-hidden border border-gray-700 bg-white mt-0 mx-3 relative">
      <img src={img} alt={name} className="w-full h-full object-cover" />
      {/* vegType icon overlay */}
      <span className="absolute top-1 left-1">
        {vegType === "veg" && <VegIcon />}
        {vegType === "egg" && <EggIcon />}
        {vegType === "nonveg" && <NonVegIcon />}
      </span>
    </div>
    <div className="flex-1">
      <div className="font-semibold text-black mt-3">{name}</div>
      <div className="text-gray-700 text-base font-medium">₹{price}</div>
    </div>
    <div className="flex flex-col items-end ml-2">
      <button className="bg-red-900/80 border border-red-600 text-red-200 font-bold px-4 py-1 mt-0 mx-3 rounded-lg text-base">
        ADD +
      </button>
      <span className="text-xs text-gray-700 mb-0.5 mx-3 ">customisable</span>
    </div>
  </div>
);

type MenuProps = {
  stallNo: string | number;
  location: string;
};

const Menu = ({ stallNo, location }: MenuProps) => {
  const menuItems = TypedMenus[stallNo as string] || [];

  return (
    <div className="px-5 min-h-screen bg-white pb-8 pt-2 max-w-md mx-auto relative text-black">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button className="rounded-full p-2 hover:bg-white/10">
            <BackIcon />
          </button>
        </div>
        <div className="flex space-x-2 items-center">
          <GroupIcon />
          <button className="rounded-full p-2 hover:bg-white/10">
            <DotsIcon />
          </button>
        </div>
      </div>
      {/* Restaurant Info */}
      <div className="mt-0 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">
              {/* You can fetch the restaurant name using stallNo if needed */}
              {Menus.find((s: StallType) => s.stallNo === stallNo)?.name || "Stall"} <InfoIcon />
            </h1>
            <div className="flex items-center gap-2 mt-0 text-black/80 text-base font-normal">
              <span className="flex items-center gap-1">
                Stall No. {stallNo} <span className="mx-1">·</span> {location}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0 text-black/80 text-base font-normal">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/>
                  <circle cx={12} cy={12} r={10}/>
                </svg>
                20-25 mins
              </span>
            </div>
          </div>
          {/* Rating */}
          <div className="flex flex-col items-end">
            <span className="bg-green-700 text-white rounded-full px-3 py-1 flex items-center text-lg font-bold">
              <StarIcon />
              <span className="ml-1">4.2</span>
            </span>
            <span className="text-xs text-gray-700 mt-1">By 2.4K+</span>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mt-0 mb-2">
        <h1 className="font-semibold mr-4">Filters</h1>
        <FilterBadge icon={<VegIcon />} active={true}>Veg</FilterBadge>
        <FilterBadge icon={<EggIcon />} active={false}>Egg</FilterBadge>
        <FilterBadge icon={<NonVegIcon />} active={false}>Non-veg</FilterBadge>
      </div>

      {/* Orders Section */}
      <div>
        <div className="flex items-center mt-0">
          <h2 className="text-xl font-extrabold">Menu</h2>
        </div>
        <div className="mt-1 space-y-1">
          {menuItems.length === 0 ? (
            <div className="text-gray-400">No menu available for this stall.</div>
          ) : (
            menuItems.map((item, idx) => (
              <MenuItem key={item.name + idx} {...item} />
            ))
          )}
        </div>
      </div>

      {/* Search bar */}
      <div className=" absolute bottom-6 left-7 mt-0 flex items-center bg-[#25232E] rounded-lg px-4 py-2">
        <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx={11} cy={11} r={8} stroke="currentColor"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"/>
        </svg>
        <input className="bg-transparent flex-1 text-white placeholder-gray-400 outline-none text-lg" placeholder='Search "shake"' />
        <button className="bg-[#35323f] text-white text-lg px-3 py-1 rounded-lg ml-2 flex items-center gap-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;