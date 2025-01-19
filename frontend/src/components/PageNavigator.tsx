import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Room from "../pages/Room";
import Exterior from "../pages/Exterior";
import Info from "../pages/Info";
import Location from "../pages/Location";
import Travel from "../pages/Travel";
import Review from "../pages/Review";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<Room />} />
      <Route path="/info" element={<Info />} />
      <Route path="/exterior" element={<Exterior />} />
      <Route path="/location" element={<Location />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}
