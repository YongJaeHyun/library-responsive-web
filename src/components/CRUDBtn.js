import styled from "styled-components";

const Button = styled.button`
  width: 8rem;
  height: 3.5rem;
  background-color: #487eb0;
  border-radius: 10px;
  color: white;
  margin: 50px auto;
  font-size: 1.2rem;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #9c88ff;
  }
`;

const CRUDBtn = (props) => {
  return <Button onClick={props.onClick}>{props.title}</Button>;
};

export default CRUDBtn;
