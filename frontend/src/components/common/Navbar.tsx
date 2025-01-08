import { useEffect, useState } from "react";
import SectionUI from "../ui/Section";
import axios from "axios";
import { useAxios } from "../../utils/api";

export default function Navbar() {
  const { menuList, loading, error } = useAxios("/api/menuList", { depth: 1 }, "post");

  return <SectionUI></SectionUI>;
}
