import React from "react";
import "./addListing.css";
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddListing() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await api.post("/listings", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Listing created successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error creating listing.");
    }
  };

  return (
    <div className="bg-[#F2F3F4] h-screen flex items-center justify-center">
        <div className="bg-[#ffffff] max-w-lg mx-auto mt-10 p-6 border rounded-2xl shadow">
      <h2 className="text-2xl text-[#ff385c] font-bold mb-4">Create a New Listing</h2>
     
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Address"
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price per night"
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />
        <input
          type="text"
          name="images"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
        />
        <button className="bg-[#ff385c] text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
