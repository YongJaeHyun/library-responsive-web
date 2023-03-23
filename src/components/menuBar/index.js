import styled from "styled-components";
import Dropdown from "./Dropdown";

const Container = styled.menu`
  width: 80vw;
  margin: 0 auto;
  position: relative;
`;

const Ul = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MenuBar = () => {
  return (
    <Container>
      <Ul>
        <Dropdown title="Home" to="/" />
        <Dropdown title="국내 만화" to="/국내만화" />
        <Dropdown title="일본 만화" to="/일본만화" />
        <Dropdown title="미국 만화" to="/미국만화" />
      </Ul>
      <hr />
    </Container>
  );
};

export default MenuBar;
