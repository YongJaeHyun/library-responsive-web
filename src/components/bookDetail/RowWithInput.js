import styled from "styled-components";

const Row = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c8c8c8;
  &:first-of-type {
    border-top: 2px solid #c8c8c8;
  }
`;

const DefaultBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const LabelBox = styled(DefaultBox)`
  width: 30%;
  background-color: #f2f2f2;
`;
const InputBox = styled(DefaultBox)`
  width: 70%;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem;
`;

const Input = styled.input.attrs({
  required: true,
  autoComplete: "off",
})`
  width: 95%;
  height: 80%;
  border: 1px solid #c8c8c8;
  font-size: 1rem;
  padding: 0.8rem;
`;

const RowWithInput = (props) => {
  return (
    <Row>
      <LabelBox>
        <Label htmlFor={props.id}>{props.title}</Label>
      </LabelBox>
      <InputBox>
        {props.id === "price" ? (
          <Input
            type="number"
            id={props.id}
            name={props.id}
            defaultValue={props.defaultValue || ""}
          />
        ) : (
          <Input id={props.id} name={props.id} defaultValue={props.defaultValue || ""} />
        )}
      </InputBox>
    </Row>
  );
};

export default RowWithInput;
