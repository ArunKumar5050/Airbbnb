import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
import AddListing from "./components/AddListing";
import ListingDetail from "./components/ListingDetail";

function App() {
  return (
    <>
      <div className="max-w-full">
        <Routes>
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddListing />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
