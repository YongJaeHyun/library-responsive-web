import RowWithDisabledInput from "../RowWithDisabledInput";

const BookForGet = (props) => {
  const { title, writer, nation, category, genre, price, insert_date } = props.book;
  return (
    <>
      <RowWithDisabledInput id="title" title="제목" value={title} />
      <RowWithDisabledInput id="writer" title="저자" value={writer} />
      <RowWithDisabledInput id="category" title="카테고리" value={category} />
      <RowWithDisabledInput id="nation" title="국가" value={nation} />
      <RowWithDisabledInput id="genre" title="장르" value={genre} />
      <RowWithDisabledInput id="price" title="가격" value={`${price} 원`} />
      <RowWithDisabledInput
        id="insert_date"
        title="입력 날짜"
        value={new Date(insert_date).toLocaleString()}
      />
    </>
  );
};

export default BookForGet;
