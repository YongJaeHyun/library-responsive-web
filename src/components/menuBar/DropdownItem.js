import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownLi = styled.li`
  text-align: center;
  border-radius: 5px;
  padding: 15px 0;
`;

const DropdownLink = styled(Link)`
  color: black;
  font-size: 1rem;
  &:hover > li {
    background-color: #f2f2f2;
  }
  &:hover > li > p {
    transition: all 0.3s ease-in-out;
    color: #9c88ff;
  }
`;

const DropdownTitle = styled.p``;

const DropdownItem = (props) => {
  return (
    <DropdownLink to={props.to}>
      <DropdownLi>
        <DropdownTitle>{props.title}</DropdownTitle>
      </DropdownLi>
    </DropdownLink>
  );
};

export default DropdownItem;
