import { useApi } from "../../utils/api";
import SectionUI from "../ui/Section";

export default function Navbar() {
  const { data, loading, error } = useApi("/common/menuList", "post", {
    depth: 1,
  });

  if (loading) return <div>Loading...</div>;
  if (error) alert("에러");

  console.log(data);

  return <SectionUI>메뉴</SectionUI>;
}
