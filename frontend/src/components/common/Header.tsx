import styled from "@emotion/styled";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} />
      <UserMenuBar>
        <Link to="/login">로그인</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/cs">고객센터</Link>
      </UserMenuBar>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 18px;
`;

const UserMenuBar = styled.div`
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: #999;
`;
