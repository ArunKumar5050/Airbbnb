import { useRef } from "react";
import {
  FaBed, FaTicketAlt, FaFortAwesome, FaUmbrellaBeach, FaFilter, FaTag,
} from "react-icons/fa";
import { GiPalmTree, GiIsland, GiFarmer } from "react-icons/gi";
import { MdOutlinePool, MdOutlineCabin, MdOutlineLandscape } from "react-icons/md";

import { IoIosArrowForward } from "react-icons/io";

export default function MenuBar() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const items = [
    { label: "Rooms", icon: <FaBed size={24} /> },
    { label: "Icons", icon: <FaTicketAlt size={24} /> },
    { label: "Historical homes", icon: <FaFortAwesome size={24} /> },
    { label: "Islands", icon: <GiIsland size={24} /> },
    { label: "Luxe", icon: <FaUmbrellaBeach size={24} /> },
    { label: "Farms", icon: <GiFarmer size={24} /> },
    { label: "Amazing views", icon: <MdOutlineLandscape size={24} /> },
    { label: "Amazing pools", icon: <MdOutlinePool size={24} /> },
    { label: "Cabins", icon: <MdOutlineCabin size={24} /> },
    { label: "Beachfront", icon: <FaUmbrellaBeach size={24} /> },   
    { label: "Rooms", icon: <FaBed size={24} /> },
    { label: "Icons", icon: <FaTicketAlt size={24} /> },
    { label: "Historical homes", icon: <FaFortAwesome size={24} /> },
    { label: "Islands", icon: <GiIsland size={24} /> },  
    { label: "Luxe", icon: <FaUmbrellaBeach size={24} /> },
    { label: "Farms", icon: <GiFarmer size={24} /> },
    { label: "Amazing views", icon: <MdOutlineLandscape size={24} /> },
    { label: "Amazing pools", icon: <MdOutlinePool size={24} /> },
    { label: "Cabins", icon: <MdOutlineCabin size={24} /> },
    { label: "Beachfront", icon: <FaUmbrellaBeach size={24} /> },
  ];

  return (
    <div className="flex items-center space-x-4 px-10 py-4 overflow-hidden bg-[#f2f3f4]">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-max cursor-pointer text-gray-600 hover:text-black"
          >
            <div>{item.icon}</div>
            <div className="text-sm mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll Arrow */}
      <button
        onClick={scrollRight}
        className="p-2 rounded-full border ml-2 hover:bg-gray-100"
      >
        <IoIosArrowForward size={20} />
      </button>

      {/* Filters and Price Info */}
      <div className="flex items-center space-x-4 ml-4">
        <button className="flex items-center border rounded-full px-4 py-2 hover:bg-gray-100">
          <FaFilter className="mr-2" /> Filters
        </button>
        <div className="flex items-center">
          <FaTag className="text-pink-500 mr-1" /> Prices include all fees
        </div>
      </div>
    </div>
  );
}
