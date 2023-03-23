import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../api";
import BookDetail from "../components/bookDetail";
import CRUDBtn from "../components/CRUDBtn";
import PageHelmet from "../components/PageHelmet";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UpdateBook = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const getBookByBookIdAsync = useCallback(async () => {
    const bookInfo = await api.getBookByBookId(bookId);
    setBook(bookInfo);
  }, [bookId]);

  const updateBookAsync = async (e) => {
    e.preventDefault();
    const elements = e.target;
    const data = {};
    for (let element of elements) {
      const key = element.name;
      const value = element.value;
      data[key] = value;
    }
    await api.updateBook(bookId, JSON.stringify(data));
    return navigate("/");
  };

  useEffect(() => {
    getBookByBookIdAsync();
  }, [getBookByBookIdAsync]);

  return (
    <>
      <PageHelmet title="Book24 - 책 수정" />
      <SectionContainer>
        <SectionTitle>책 수정</SectionTitle>
        <Form onSubmit={updateBookAsync}>
          <BookDetail for="update" book={book} />
          <CRUDBtn title="수정" />
        </Form>
      </SectionContainer>
    </>
  );
};

export default UpdateBook;
