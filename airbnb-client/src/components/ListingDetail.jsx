import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "./Navbar";

function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await api.get(`/listings/${id}`);
        setListing(res.data.listing);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) return <p className="p-6">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-full mx-auto bg-[#F2F3F4] flex flex-col items-center">
        <div className="w-5xl font-bold bg-[#F2F3F4]">
          <h1 className="text-[#000000] text-3xl px-2 py-3 font-semibold">Connect with your heart in this magical place</h1>
          <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden bg-[#F2F3F4]">
            {/* First big image on the left */}
            <div className="col-span-1 row-span-1">
              <img
                src={listing.image[0] || "https://via.placeholder.com/600"}
                alt={`${listing.title} - 1`}
                className=" w-full h-102"
              />
            </div>
            <div className="col-span-1 row-span-1 grid grid-cols-2 gap-2">
              {/* Remaining four smaller images */}
              {listing.image.slice(1, 5).map((imgUrl, index) => (
                <img
                  key={index + 1}
                  src={imgUrl || "https://via.placeholder.com/600"}
                  alt={`${listing.title} - ${index + 2}`}
                  className="w-62 h-50 object-cover"
                />
              ))}
            </div>
          </div>

          <h1 className="text-3xl font-semibold mt-4 px-3">{listing.title}</h1>
          <p className="text-lg font-normal px-3">2 queen bedsShared bathroom</p>
          <p className=" text-lg font-normal mt-1 px-3">{listing.address}</p>
          <p className="text-lg font-semibold mt-4 px-3">{listing.description}</p>
          <p className="text-xl font-semibold mt-4 px-3">₹{listing.price} / night</p>

          <div className="px-3">
            <h1 className="text-4xl mt-5">About this place</h1>
            <p className="w-[70%] mt-2 font-[400] text-lg">When you stay with us, you'll have the experience of spending the night in a peculiar village nestled in the middle of a ravine in the Teno mountains, surrounded by nature, and skies painted in colors, with many stars, and friendly people who will remind you how to value the simplest things in life.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingDetail;
