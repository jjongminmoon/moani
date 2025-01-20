import styled from "@emotion/styled";
import { Get } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface Menu {
  menuId: number;
  menuNm: string;
  menuPath: string;
}

export default function Navbar() {
  const { data } = useQuery<Menu[]>({
    queryKey: ["menuList"],
    queryFn: () => Get("/common/menuList"),
  });

  return (
    <Wrapper>
      <MenuList>
        {data?.map((menu) => (
          <li>
            <Link key={menu.menuId} to={menu.menuPath}>
              {menu.menuNm}
            </Link>
          </li>
        ))}
      </MenuList>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 1200px;
  margin: 0 auto;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
  height: 60px;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
