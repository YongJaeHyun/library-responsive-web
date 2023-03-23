import { useRef, useState } from "react";
import RowWithInput from "../RowWithInput";
import RowWithSelect from "./RowWithSelect";

const BookForPost = () => {
  const [selectedNation, setSelectedNation] = useState("");
  const genreRef = useRef(null);

  const changeNation = (e) => {
    const nation = e.target.value;
    genreRef.current.value = "";
    setSelectedNation(nation);
  };

  return (
    <>
      <RowWithInput id="title" title="제목" />
      <RowWithInput id="writer" title="저자" />
      <RowWithInput id="category" title="카테고리" />
      <RowWithSelect id="nation" title="국가" changeNation={changeNation} />
      <RowWithSelect id="genre" title="장르" selectedNation={selectedNation} ref={genreRef} />
      <RowWithInput id="price" title="가격" />
    </>
  );
};

export default BookForPost;
