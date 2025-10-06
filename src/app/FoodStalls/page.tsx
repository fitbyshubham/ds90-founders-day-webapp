"use client"
import StallsCard from "../Components/StallsCard";
import PopRestaurants from "../Components/PopRestaurants"
import { useRef, useEffect } from "react"

export default function StallsCardPage(){
    const categories = [
        { name: "All", icon: "🍖" },
        { name: "Indian", icon: "🍲" },
        { name: "Chinese", icon: "🍟" },
        { name: "Kathi", icon: "🌯" },
        { name: "Pizza", icon: "🍕" },
        { name: "Burger", icon: "🍔" },
        { name: "Drinks", icon: "🥤" },
    ];

    const scrollRef = useRef(null);
    useEffect(() => {
        const scrollContainer = scrollRef.current as HTMLElement | null;
        let scrollAmount = 0;
        const scrollStep = 2; // pixels per frame
        const scrollDelay = 20; // ms

        const autoScroll = () => {
        if (!scrollContainer) return;
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollAmount = 0; // Loop back to start
        }
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
        };

        const interval = setInterval(autoScroll, scrollDelay);
        return () => clearInterval(interval);
    }, []);
      

    return(
        <div className="w-full h-full mx-auto bg-white rounded-3xl shadow-lg p-4 relative font-sans pb-32">
            {/* Top Search Bar */}
            <div className="flex items-center gap-2 mb-4">
                <input
                className="flex-1 px-4 py-2 rounded-full bg-gray-100 text-sm outline-none"
                placeholder="Search"
                />
                <div className="bg-orange-100 text-orange-500 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" strokeWidth="2" />
                </svg>
                </div>
            </div>

            {/* Categories */}
            <div className="flex flex-row items-center justify-center gap-4 mb-6 overflow-x-auto pb-2">
                {categories.map((c) => (
                <div key={c.name} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl mb-1">
                    {c.icon}
                    </div>
                    <span className="text-xs text-gray-500">{c.name}</span>
                </div>
                ))}
            </div>

            {/* Popular Restaurants */}
            <PopRestaurants />

            {/* All Restaurants */}
            <h2 className="text-xl font-semibold mb-2">All Stalls</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <StallsCard
                    image="https://b.zmtcdn.com/data/pictures/3/21200663/3224425715d12181f4586c2daf715028.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    name="Rolls Mania"
                    rating="4.5"
                    stallNo="26"
                    offer=""
                />
                <StallsCard
                    image="https://b.zmtcdn.com/data/pictures/chains/7/3500437/91fb9d0f90ec10a2d996ccbf49e4079f.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" 
                    name="Walk in Woods"
                    rating="4.5"
                    stallNo="39"
                    offer=""
                />
                <StallsCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/3500373/0a8e5c36b9e641bc2da42fd3398de8a5_o2_featured_v2.jpg?output-format=webp"
                    name="Doon Triple Nine"
                    rating="4.5"
                    stallNo="18"
                    offer=""
                />
                <StallsCard
                    image="https://www.licious.in/blog/wp-content/uploads/2020/12/BBQ-Chicken-Pizza-750x750.jpg"
                    name="Domino's Pizza"
                    rating="4.1"
                    stallNo="28"
                    offer=""
                />
                <StallsCard
                    image="https://b.zmtcdn.com/data/pictures/chains/7/3501627/7ffe00f19bc2ab12e5c5368d0643e19d_featured_v2.jpg?output-format=webp"
                    name="Burger Singh"
                    rating="4.6"
                    stallNo="36"
                    offer=""
                />
                <StallsCard
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiVxHZAYqaceL7hPDJafiwSdjly7wyJeobA&s"
                    name="Kebabs 'N' Curries"
                    rating="4.9"
                    stallNo="4"
                    offer=""
                />
                <StallsCard
                    image="https://b.zmtcdn.com/data/pictures/chains/5/3500375/fca6e33ea05ba721fd41f967aa5ab59e_featured_v2.jpg?output-format=webp"
                    name="Kalkata Lazeez Kathi"
                    rating="4.6"
                    stallNo="41"
                    offer=""
                />
                <StallsCard
                    image="https://www.munatycooking.com/wp-content/uploads/2023/12/chicken-shawarma-image-feature-2023.jpg"
                    name="Trees Ventures"
                    rating="3.2"
                    stallNo="7"
                    offer=""
                />
                <StallsCard
                    image="https://content.jdmagicbox.com/comp/def_content/chaat_corners/default-chaat-corners-14.jpg"
                    name="Sagar Chaat"
                    rating="1.8"
                    stallNo="35"
                    offer=""
                />
                <StallsCard
                    image="https://b.zmtcdn.com/data/pictures/9/19013179/f4410c3137dc8934a443d6e377595d91.jpg?fit=around|750:500&crop=750:500;*,*"
                    name="Hong's Kitchen"
                    rating="4.0"
                    stallNo="12"
                    offer=""
                />
                <StallsCard
                    image="https://b.zmtcdn.com/data/pictures/8/110248/8625af42d46380ccbc230b9e5f413418_o2_featured_v2.jpg?fit=around|960:500&crop=960:500;*,*"
                    name="Kesar Foods"
                    rating="4.0"
                    stallNo="44"
                    offer=""
                />
                <StallsCard
                    image="https://b.zmtcdn.com/data/reviews_photos/a35/ee16d23c5bbbbed575a6ce2546890a35_1532611421.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                    name="Y Café & Resta."
                    rating="3.9"
                    stallNo="9"
                    offer=""
                />
                <StallsCard
                    image="https://b.zmtcdn.com/data/pictures/5/20741605/c035309b3edc32022fcb99be7da84539_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    name="Frozen Factory"
                    rating="4.2"
                    stallNo="50"
                    offer=""
                />
            </div>
        </div>
    )
}