import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  position: relative;
`;

const SectionContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default SectionContainer;
