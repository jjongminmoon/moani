import styled from "@emotion/styled";
import SectionUI from "../ui/Section";
import logo from "@/assets/logo.webp";
import { Post } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface Menu {
  menuId: number;
  menuNm: string;
  path: string;
}

export default function Navbar() {
  const { data, isLoading, error } = useQuery<Menu[]>({
    queryKey: ["menuList"],
    queryFn: () => Post("/common/menuList", { depth: 1 }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) alert("에러");

  console.log(data);

  return (
    <SectionUI>
      <Container>
        <MenuList>
          {data?.slice(0, 3).map((item) => (
            <Link to={item.path} key={item.menuId}>
              {item.menuNm}
            </Link>
          ))}
          <Link to="/">
            <Logo src={logo} alt="모아니 로고" />
          </Link>
          {data?.slice(3, 6).map((item) => (
            <Link to={item.path} key={item.menuId}>
              {item.menuNm}
            </Link>
          ))}
        </MenuList>
      </Container>
    </SectionUI>
  );
}

const Container = styled.div`
  background-color: #fff;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: #000;
`;

const Logo = styled.img`
  width: 80px;
  heigth: 80px;
  border-radius: 100%;
  object-fit: cover;
`;
