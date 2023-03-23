import { useCallback, useEffect, useState } from "react";
import api from "../../../api";
import Books from "../../books";

const SearchByCategory = (props) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const nation = props.nation;

  const getBooksByNationAsync = useCallback(() => {
    setTimeout(async () => {
      const books = await api.getBooksByNation(nation);
      setSearchedBooks(books);
    }, 100);
  }, [nation]);

  useEffect(() => {
    getBooksByNationAsync();
  }, [getBooksByNationAsync]);

  return (
    <>
      <Books books={searchedBooks} />
    </>
  );
};

export default SearchByCategory;
