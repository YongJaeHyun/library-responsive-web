import { Link } from "react-router-dom";
import styled from "styled-components";
import { jpGenres, krGenres, usGenres } from "../../GenresByNation";
import DropdownItem from "./DropdownItem";

const Li = styled.li`
  position: relative;
  &:hover > button > a {
    color: #9c88ff;
  }
  &:hover > nav {
    display: block;
  }
`;

const DropdownTitle = styled.button`
  padding: 0.4rem;
  margin: 0.4rem;
  transition: all 0.2s ease-out;
`;

const DropdownTitleLink = styled(Link)`
  color: black;
  font-size: 1.15rem;
  font-weight: 600;
  transition: color 0.2s ease-out;
`;

const NavContainer = styled.nav`
  display: none;
  width: 120px;
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const NavUl = styled.ul``;

const Dropdown = (props) => {
  const nation = props.to;
  const title = props.title;
  return (
    <Li>
      <DropdownTitle>
        <DropdownTitleLink to={nation}>{title}</DropdownTitleLink>
      </DropdownTitle>
      {nation !== "/" && (
        <NavContainer>
          <NavUl>
            {title === "국내 만화" &&
              krGenres.map((genre) => (
                <DropdownItem key={genre} title={genre} to={`${nation}/${genre}`} />
              ))}

            {title === "일본 만화" &&
              jpGenres.map((genre) => (
                <DropdownItem key={genre} title={genre} to={`${nation}/${genre}`} />
              ))}

            {title === "미국 만화" &&
              usGenres.map((genre) => (
                <DropdownItem key={genre} title={genre} to={`${nation}/${genre}`} />
              ))}
          </NavUl>
        </NavContainer>
      )}
    </Li>
  );
};

export default Dropdown;
