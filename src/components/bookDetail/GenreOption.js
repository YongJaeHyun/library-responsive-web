import styled from "styled-components";
import { jpGenres, krGenres, usGenres } from "../../GenresByNation";

const Option = styled.option``;

const GenreOption = (props) => {
  const selectedNation = props.selectedNation;
  return (
    <>
      {selectedNation === "국내만화"
        ? krGenres.map((genre) => (
            <Option key={genre} value={genre}>
              {genre}
            </Option>
          ))
        : selectedNation === "일본만화"
        ? jpGenres.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))
        : selectedNation === "미국만화"
        ? usGenres.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))
        : null}
      ;
    </>
  );
};

export default GenreOption;
