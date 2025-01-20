import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Style from "../pages/Style";
import Shop from "../pages/Shop";
import Event from "../pages/Event";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Category />} />
      <Route path="/style" element={<Style />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
}
