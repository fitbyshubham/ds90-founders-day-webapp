import React from "react";

// Icon components (you may use an icon library or replace with inline SVGs)
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

type MenuItemProps = {
  img: string;
  vegType: "veg" | "egg" | "nonveg";
  name: string;
  price: number;
  orderedAgo: string;
};

const MenuItem = ({ img, vegType, name, price, orderedAgo }: MenuItemProps) => (
  <div className="flex items-center py-3">
    <div className="w-14 h-14 flex-shrink-0 rounded-md overflow-hidden border border-gray-700 bg-white mr-3">
      <img src={img} alt={name} className="w-full h-full object-cover" />
      {/* vegType icon overlay */}
      <span className="absolute mt-1 ml-1">
        {vegType === "veg" && <VegIcon />}
        {vegType === "egg" && <EggIcon />}
        {vegType === "nonveg" && <NonVegIcon />}
      </span>
    </div>
    <div className="flex-1">
      <div className="font-semibold text-white">{name}</div>
      <div className="text-gray-200 text-base font-medium">₹{price}</div>
      <div className="text-gray-400 text-xs">You ordered {orderedAgo}</div>
    </div>
    <div className="flex flex-col items-end ml-2">
      <button className="bg-red-900/80 border border-red-600 text-red-200 font-bold px-4 py-1 rounded-lg text-base">
        ADD <span className="">+</span>
      </button>
      <span className="text-xs text-gray-400 mt-1">customisable</span>
    </div>
  </div>
);

const  Menu = () => {
  // Dummy image URLs (replace with your own or static assets)
  const menuItems: MenuItemProps[] = [
    {
      img: "https://images.unsplash.com/photo-1606788075761-546cf2c1d1da?fit=crop&w=100&q=80", // chicken tenders
      vegType: "nonveg",
      name: "Chicken Tenders",
      price: 349,
      orderedAgo: "3 months ago"
    },
    {
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?fit=crop&w=100&q=80", // peri peri burger
      vegType: "nonveg",
      name: "Peri Peri Fried Chicken Burger",
      price: 319,
      orderedAgo: "3 months ago"
    },
    {
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=100&q=80", // veg burger
      vegType: "veg",
      name: "Melt Down Burger",
      price: 169,
      orderedAgo: "7 months ago"
    },
    {
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fit=crop&w=100&q=80", // veg burger
      vegType: "veg",
      name: "Ultimate Snacker Burger",
      price: 219,
      orderedAgo: "13 months ago"
    }
  ];

  return (
    <div className="min-h-screen bg-[#19171D] pb-8 px-2 pt-2 max-w-md mx-auto relative text-white">
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
      <div className="mt-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold leading-tight">
              Burgrill - OG’s of <br/> Grilled Burger
              <InfoIcon />
            </h1>
            <div className="flex items-center gap-2 mt-2 text-white/80 text-base font-normal">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 21 9.172 16.657C5.344 12.83 8.686 7 14.07 7c5.385 0 8.727 5.83 4.9 9.657z"/>
                  <circle cx={12} cy={11} r={3}/>
                </svg>
                3.2 km <span className="mx-1">·</span> Karanpur
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l3-3m0 0l3 3m-3-3v12"/>
                </svg>
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-white/80 text-base font-normal">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/>
                  <circle cx={12} cy={12} r={10}/>
                </svg>
                20-25 mins · Schedule for later
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l3-3m0 0l3 3m-3-3v12"/>
                </svg>
              </span>
            </div>
            <div className="mt-3 flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span className="text-base text-green-200 font-medium">Low plastic packaging</span>
            </div>
          </div>
          {/* Rating */}
          <div className="flex flex-col items-end">
            <span className="bg-green-700 text-white rounded-full px-3 py-1 flex items-center text-lg font-bold">
              <StarIcon />
              <span className="ml-1">4.2</span>
            </span>
            <span className="text-xs text-gray-300 mt-1">By 2.4K+</span>
          </div>
        </div>
        {/* Offer banner */}
        <div className="flex items-center mt-5 px-4 py-2 bg-[#211F28] rounded-xl border border-[#25232e]">
          <span className="mr-2">
            <svg className="w-5 h-5 text-blue-400 inline" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.784.57-1.838-.197-1.54-1.118l1.286-3.945a1 1 0 00-.364-1.118L2.074 9.372c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.945z"/>
            </svg>
          </span>
          <span className="text-base text-white font-medium">
            Flat ₹100 OFF above ₹249
          </span>
          <span className="ml-auto text-gray-200 text-sm font-semibold">3 offers <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7l3-3m0 0l3 3m-3-3v12"/></svg></span>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mt-5 mb-2">
        <FilterBadge icon={<svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v9a1 1 0 001 1h3a1 1 0 001-1V7m6 0v9a1 1 0 001 1h3a1 1 0 001-1V7"/></svg>} active={false}>Filters <svg className="w-3 h-3 ml-1 inline" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7l3 3 3-3"/></svg></FilterBadge>
        <FilterBadge icon={<VegIcon />} active={true}>Veg</FilterBadge>
        <FilterBadge icon={<EggIcon />} active={false}>Egg</FilterBadge>
        <FilterBadge icon={<NonVegIcon />} active={false}>Non-veg</FilterBadge>
        <FilterBadge icon={null} active={false}>H</FilterBadge>
      </div>

      {/* Orders Section */}
      <div>
        <div className="flex items-center mt-2">
          <h2 className="text-xl font-extrabold">Your Orders and Collections</h2>
          <svg className="w-5 h-5 ml-2 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7l3 3 3-3"/></svg>
        </div>
        <div className="mt-1 space-y-1">
          {menuItems.map((item, idx) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="mt-4 flex items-center bg-[#25232E] rounded-lg px-4 py-2">
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

      {/* Bottom Notch */}
      <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-40 h-2 bg-white/10 rounded-full" />
    </div>
  );
};

export default Menu;