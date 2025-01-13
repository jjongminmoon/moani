import styled from "@emotion/styled";
import logo from "@/assets/common/logo.webp";
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
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
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
