import { useCallback, useEffect, useRef, useState } from "react";
import RowWithInput from "../RowWithInput";
import RowWithSelectForNation from "./RowWithSelectForNation";
import RowWithSelectForGenre from "./RowWithSelectForGenre";

const BookForUpdate = (props) => {
  const { title, writer, nation, category, genre, price } = props.book;
  const [selectedNation, setSelectedNation] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const genreRef = useRef(null);

  const changeNation = (e) => {
    const nation = e.target.value;
    genreRef.current.value = "";
    setSelectedNation(nation);
  };

  const changeGenre = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
  };

  const initState = useCallback(() => {
    setSelectedNation(nation);
    setSelectedGenre(genre);
  }, [nation, genre]);

  useEffect(() => {
    initState();
  }, [initState]);

  return (
    <>
      <RowWithInput id="title" title="제목" defaultValue={title} />
      <RowWithInput id="writer" title="저자" defaultValue={writer} />
      <RowWithInput id="category" title="카테고리" defaultValue={category} />
      <RowWithSelectForNation
        id="nation"
        title="국가"
        changeNation={changeNation}
        defaultValue={selectedNation}
      />
      <RowWithSelectForGenre
        id="genre"
        title="장르"
        changeGenre={changeGenre}
        ref={genreRef}
        selectedNation={selectedNation}
        defaultValue={selectedGenre}
      />
      <RowWithInput id="price" title="가격" defaultValue={price} />
    </>
  );
};

export default BookForUpdate;
