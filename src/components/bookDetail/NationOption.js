import styled from "styled-components";

const Option = styled.option``;

const NationOption = () => {
  return (
    <>
      <Option value="국내만화">국내만화</Option>
      <Option value="일본만화">일본만화</Option>
      <Option value="미국만화">미국만화</Option>
    </>
  );
};

export default NationOption;
