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
  justify-content: center;
  width: 70%;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem;
`;

const DisabledInput = styled.input.attrs({
  disabled: true,
  readOnly: true,
  autoComplete: "off",
})`
  width: 95%;
  height: 80%;
  border: 1px solid #c8c8c8;
  font-size: 1rem;
  padding: 0.8rem;
`;

const RowWithDisabledInput = (props) => {
  return (
    <Row>
      <LabelBox>
        <Label htmlFor={props.id}>{props.title}</Label>
      </LabelBox>
      <InputBox>
        <DisabledInput id={props.id} name={props.id} value={props.value || ""} />
      </InputBox>
    </Row>
  );
};

export default RowWithDisabledInput;
