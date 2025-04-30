import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "./Navbar";
import CategoryBar from "./category";
import { Link } from "react-router-dom";

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await api.get("/listings");

        setListings(res.data.listings);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <Navbar />
      <CategoryBar/>
      <div className="p-6 bg-[#F2F3F4] ">
        <h1 className="text-3xl font-bold mb-4">Explore Places to Stay</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {listings.map((listing) => (
            <Link to={`/listing/${listing._id}`} key={listing._id}>
              <div
                key={listing._id}
                className="flex flex-col gap-3 pb-3 rounded-2xl transition"
              >
                <img
                  src={listing.image[0] || "https://via.placeholder.com/400"}
                  alt={listing.title}
                  className="w-full h-70 object-cover rounded-2xl "
                />
                <div>
                  <h2 className="text-xl font-semibold">{listing.title}</h2>
                  <p className="text-sm text-gray-500">{listing.address}</p>
                  <p className="text-md mt-2 font-medium">
                    ₹{listing.price} / night
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
