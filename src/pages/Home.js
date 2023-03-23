import { useEffect, useState } from "react";
import api from "../api";
import Books from "../components/books";
import Carousel from "../components/pages/home/carousel";
import PageHelmet from "../components/PageHelmet";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import LinkBtnOnSection from "../components/LinkBtnOnSection";

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);

  const getAllBooksAsync = () => {
    setTimeout(async () => {
      const books = await api.getAllBooks();
      setAllBooks(books);
    }, 200);
  };

  useEffect(() => {
    getAllBooksAsync();
  }, []);

  return (
    <>
      <PageHelmet title="Book24" />
      <SectionContainer>
        <SectionTitle>최근 들어온 책</SectionTitle>
        <Carousel />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>전체 목록</SectionTitle>
        <Books books={allBooks} />
        <LinkBtnOnSection title="책 추가" to="/insert" />
      </SectionContainer>
    </>
  );
};

export default Home;
