import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const LogoItem = () => {
  return (
    <Link to="/">
      <Logo>Book24</Logo>
    </Link>
  );
};

export default LogoItem;
