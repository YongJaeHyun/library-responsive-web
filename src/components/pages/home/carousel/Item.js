import { Link } from "react-router-dom";
import styled from "styled-components";

const BookContainer = styled.div`
  height: 14rem;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const BookLink = styled(Link)`
  width: 100%;
  height: auto;
`;

const BookImg = styled.img`
  width: 8rem;
  margin: 0 auto;
`;

const Item = (props) => {
  return (
    <BookContainer>
      <BookLink to="/book/3">
        <BookImg src={props.src} />
      </BookLink>
    </BookContainer>
  );
};

export default Item;
