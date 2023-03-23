import styled from "styled-components";
import Item from "./Item";

const BookContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Books = (props) => {
  const books = props.books;
  return (
    <>
      <BookContainer>
        {books?.map((book) => (
          <Item
            key={book.book_id}
            book_id={book.book_id}
            src="http://www.sigongsa.com/filedata/book/SB007270/detail_SB007270.jpg"
            nation={book.nation.slice(0, 2)}
            category={book.category}
            insert_date={book.insert_date}
            title={book.title}
            genre={book.genre}
            writer={book.writer}
            price={book.price}
          />
        ))}
      </BookContainer>
    </>
  );
};

export default Books;
