import React, { useRef, useEffect } from "react";
import PopRestaurantsCard from "./PopRestaurants_Card";

const stalls = [
  {
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/BBQ-Chicken-Pizza-750x750.jpg",
    alt: "Domino's Pizza",
    title1: "Domino's",
    title2: "Pizza",
    stallNo: "1",
    rating: "4.5",
    reviews: "120",
  },
  {
    image: "https://b.zmtcdn.com/data/pictures/chains/5/3500375/fca6e33ea05ba721fd41f967aa5ab59e_featured_v2.jpg?output-format=webp",
    alt: "Kalkata Lazeez Kathi",
    title1: "Kalkata Lazeez",
    title2: "Kathi",
    stallNo: "2",
    rating: "4.5",
    reviews: "120",
  },
  {
    image: "https://b.zmtcdn.com/data/pictures/chains/4/18391854/15918ea9293921d6ee0518f78f630e1b_featured_v2.jpg?output-format=webp",
    alt: "Burger King",
    title1: "Burger",
    title2: "King",
    stallNo: "3",
    rating: "4.5",
    reviews: "120",
  },
  {
    image: "https://b.zmtcdn.com/data/pictures/chains/7/3501627/7ffe00f19bc2ab12e5c5368d0643e19d_featured_v2.jpg?output-format=webp",
    alt: "Burger Singh",
    title1: "Burger",
    title2: "Singh",
    stallNo: "4",
    rating: "4.5",
    reviews: "120",
  },
];

export default function RestaurantCarousel() {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const intervalRef = useRef<number | null>(null);
  const idxRef = useRef<number>(0);

  useEffect(() => {
    function scrollToIndex(i: number) {
      if (itemRefs.current[i]) {
        itemRefs.current[i].scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    }

    scrollToIndex(idxRef.current); // initial

    intervalRef.current = window.setInterval(() => {
      idxRef.current = (idxRef.current + 1) % stalls.length;
      scrollToIndex(idxRef.current);
    }, 5000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [stalls.length]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Popular Stalls</h2>
      <div
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {stalls.map((props, i) => (
          <div
            key={props.stallNo}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="flex-shrink-0 w-full sm:w-96 snap-start px-2"
            style={{ scrollSnapAlign: "start" }}
          >
            <PopRestaurantsCard {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}