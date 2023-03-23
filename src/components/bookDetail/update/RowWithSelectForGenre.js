import { forwardRef } from "react";
import styled from "styled-components";
import GenreOption from "../GenreOption";

const Row = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c8c8c8;
  &:first-child {
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

const Select = styled.select.attrs({ required: true })`
  width: 95%;
  height: 80%;
  border: 1px solid #c8c8c8;
  font-size: 1rem;
  padding: 0.8rem;
`;

const Option = styled.option``;

const RowWithSelectForGenre = forwardRef((props, ref) => {
  return (
    <Row>
      <LabelBox>
        <Label htmlFor={props.id}>{props.title}</Label>
      </LabelBox>
      <InputBox>
        <Select
          id={props.id}
          name={props.id}
          onChange={props.changeGenre}
          value={props.defaultValue || ""}
          ref={ref}
        >
          <Option value="">{`${props.title}를 선택하세요.`}</Option>
          <GenreOption selectedNation={props.selectedNation} />
        </Select>
      </InputBox>
    </Row>
  );
});

export default RowWithSelectForGenre;
