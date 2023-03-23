import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api";
import Books from "../components/books";
import PageHelmet from "../components/PageHelmet";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

const SearchBySearchBar = () => {
  const [searchedBooks, setSearchedBooks] = useState();
  const [searchParam] = useSearchParams();
  const searchWord = searchParam.get("searchWord");
  const searchOption = searchParam.get("searchOption");

  const searchBookByTitleAsync = useCallback(async () => {
    const books = await api.searchBookByTitle(searchWord);
    setSearchedBooks(books);
  }, [searchWord]);

  const searchBookByCategoryAsync = useCallback(async () => {
    const books = await api.searchBookByCategory(searchWord);
    setSearchedBooks(books);
  }, [searchWord]);

  const searchBookLessThanPriceAsync = useCallback(async () => {
    const books = await api.searchBookLessThanPrice(searchWord);
    setSearchedBooks(books);
  }, [searchWord]);

  useEffect(() => {
    if (searchOption === "title") {
      searchBookByTitleAsync();
    } else if (searchOption === "category") {
      searchBookByCategoryAsync();
    } else if (searchOption === "price") {
      searchBookLessThanPriceAsync();
    }
  }, [
    searchBookByTitleAsync,
    searchBookByCategoryAsync,
    searchBookLessThanPriceAsync,
    searchOption,
  ]);

  return (
    <>
      <PageHelmet title={`검색 결과 - ${searchWord}`} />
      <SectionContainer>
        <SectionTitle>{`검색 결과 > ${searchWord}`}</SectionTitle>
        <Books books={searchedBooks} />
      </SectionContainer>
    </>
  );
};

export default SearchBySearchBar;
