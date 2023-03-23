import PageHelmet from "../components/PageHelmet";
import SectionTitle from "../components/SectionTitle";
import SectionContainer from "../components/SectionContainer";
import { useNavigate } from "react-router-dom";
import BookDetail from "../components/bookDetail";
import styled from "styled-components";
import CRUDBtn from "../components/CRUDBtn";
import api from "../api";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InsertBook = () => {
  const navigate = useNavigate();

  const insertBookAsync = async (e) => {
    e.preventDefault();
    const elements = e.target;
    const data = {};
    for (let element of elements) {
      const key = element.name;
      const value = element.value;
      data[key] = value;
    }
    await api.insertBook(JSON.stringify(data));
    return navigate("/");
  };
  return (
    <>
      <PageHelmet title="Book24 - 책 추가" />
      <SectionContainer>
        <SectionTitle>책 추가</SectionTitle>
        <Form onSubmit={insertBookAsync}>
          <BookDetail for="post" />
          <CRUDBtn title="전송" />
        </Form>
      </SectionContainer>
    </>
  );
};

export default InsertBook;
