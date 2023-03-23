import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.li`
  @media (max-width: 768px) {
    color: black;
    text-align: center;
    font-size: 1.1rem;
    transition: color 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  padding-right: 1rem;
  @media (max-width: 768px) {
    padding: 1.3rem 1.7rem !important;
    border-radius: 10px;
    text-align: center;
    &:hover {
      background-color: #f2f2f2;
    }
    &:hover > li {
      color: #9c88ff;
    }
  }
`;

const NavItem = () => {
  return (
    <>
      <NavLink to="/">
        <NavList>Home</NavList>
      </NavLink>
      <NavLink to="/login">
        <NavList>로그인</NavList>
      </NavLink>
      <NavLink to="/signup">
        <NavList>회원가입</NavList>
      </NavLink>
      <NavLink to="/">
        <NavList>고객센터</NavList>
      </NavLink>
      <NavLink to="/">
        <NavList>제휴문의</NavList>
      </NavLink>
      <NavLink to="/">
        <NavList>회사소개</NavList>
      </NavLink>
    </>
  );
};

export default NavItem;
