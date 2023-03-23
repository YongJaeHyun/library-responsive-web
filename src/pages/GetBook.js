import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import Book from "../components/bookDetail";
import CRUDBtn from "../components/CRUDBtn";
import LinkBtnOnSection from "../components/LinkBtnOnSection";
import PageHelmet from "../components/PageHelmet";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

const GetBook = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const getBookByBookIdAsync = useCallback(async () => {
    const bookInfo = await api.getBookByBookId(bookId);
    // 해당 하는 책이 없을 경우, home으로 redirect
    JSON.stringify(bookInfo) === "{}" && navigate("/");
    setBook(bookInfo);
  }, [bookId, navigate]);

  const deleteBookAsync = async () => {
    await api.deleteBook(bookId);
    return navigate("/");
  };

  useEffect(() => {
    getBookByBookIdAsync();
  }, [getBookByBookIdAsync]);

  return (
    <>
      <PageHelmet title={book?.title} />
      <SectionContainer>
        <SectionTitle>상세 페이지</SectionTitle>
        <Book for="get" book={book} />
        <LinkBtnOnSection title="책 수정" to={`/book/${bookId}/update`} />
        <CRUDBtn title="책 삭제" onClick={deleteBookAsync} />
      </SectionContainer>
    </>
  );
};

export default GetBook;
