import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
`;

const HistoryContainer = styled.div`
  font-size: 1.3rem;
`;

const History = styled(Link)`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
`;

const HistoryBox = styled.p`
  display: inline-block;
  &:last-child > ${History} {
    color: rgba(0, 0, 0, 0.8);
  }
  &:nth-child(2):before {
    content: "/";
    color: rgba(0, 0, 0, 0.4);
    padding: 10px;
  }
`;

const CategoryNav = (props) => {
  const nation = props.nation;
  const genre = props.genre;
  return (
    <Nav>
      <HistoryContainer>
        {props.nation && (
          <HistoryBox>
            <History to={`/${nation}`}>{nation}</History>
          </HistoryBox>
        )}

        {props.genre && (
          <HistoryBox>
            <History to={`/${nation}/${genre}`}>{genre}</History>
          </HistoryBox>
        )}
      </HistoryContainer>
    </Nav>
  );
};

export default CategoryNav;
