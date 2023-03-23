import BookForPost from "./post";
import BookForGet from "./get";
import BookForUpdate from "./update";

const BookDetail = (props) => {
  return (
    <>
      {props.for === "post" && <BookForPost />}
      {props.for === "get" && <BookForGet book={props.book} />}
      {props.for === "update" && <BookForUpdate book={props.book} />}
    </>
  );
};

export default BookDetail;
