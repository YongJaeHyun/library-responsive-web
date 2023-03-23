import styled from "styled-components";
import LogoItem from "./LogoItem";
import NavItem from "./NavItem";

const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const LogoBox = styled.div`
  display: block;
`;

const NavIconBtn = styled.button`
  display: none;
  position: absolute;
  right: 1.2rem;
  @media (max-width: 768px) {
    display: block;
    &:hover + nav {
      display: flex;
    }
  }
`;
const NavIcon = styled.span`
  display: none;
  font-size: 2.2rem;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 4.1rem;
    right: 0;
    background-color: rgb(249, 249, 249);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
    z-index: 999;
    &:hover {
      display: flex;
    }
  }
`;

const NavUl = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Header = () => {
  return (
    <Container>
      <LogoBox>
        <LogoItem />
      </LogoBox>
      <NavIconBtn>
        <NavIcon className="material-symbols-outlined">menu</NavIcon>
      </NavIconBtn>
      <Nav>
        <NavUl>
          <NavItem />
        </NavUl>
      </Nav>
    </Container>
  );
};

export default Header;
