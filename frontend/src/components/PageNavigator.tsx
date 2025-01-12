import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
