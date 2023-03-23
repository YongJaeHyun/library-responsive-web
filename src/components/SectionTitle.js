import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1.6rem 1rem;
`;

const SectionTitle = (props) => {
  return <Title>{props.children}</Title>;
};

export default SectionTitle;
