import { useCallback, useEffect, useState } from "react";
import api from "../../../api";
import Books from "../../books";

const SearchByNationAndGenre = (props) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const { nation, genre } = props;

  const getBooksByNationAndGenreAsync = useCallback(() => {
    setTimeout(async () => {
      const books = await api.getBooksByNationAndGenre(nation, genre);
      setSearchedBooks(books);
    }, 100);
  }, [nation, genre]);

  useEffect(() => {
    getBooksByNationAndGenreAsync();
  }, [getBooksByNationAndGenreAsync]);

  return (
    <>
      <Books books={searchedBooks} />
    </>
  );
};

export default SearchByNationAndGenre;
