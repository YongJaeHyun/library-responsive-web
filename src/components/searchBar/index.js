import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import IconBtn from "../IconBtn";

const SearchContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
`;

const SearchForm = styled.form`
  width: 35%;
  min-width: 25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 2px solid #c8c8c8;
  border-radius: 20px;
  &:focus-within {
    border-color: #9c88ff;
  }
`;

const SearchOption = styled.select`
  outline: none;
  border: 0;
  background: transparent;
  transition: all 0.2s ease-out;
  &:hover {
    color: #9c88ff;
  }
`;

const Option = styled.option.attrs({ required: true })``;

const SearchInput = styled.input.attrs({ required: true, autoComplete: "off" })`
  width: 100%;
  height: 35px;
  padding: 10px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const SeparateLine = styled.span`
  font-size: 23px;
  color: #c8c8c8;
  padding: 7px 10px 5px 2px;
`;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const ChangeInput = (e) => {
    const searchWord = e.target.value;
    setInputValue(searchWord);
  };
  const ChangeSelect = (e) => {
    const searchOption = e.target.value;
    setSelectValue(searchOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchOption = e.target[0].value;
    const searchWord = e.target[1].value;
    searchParams.set("searchOption", searchOption);
    searchParams.set("searchWord", searchWord);
    navigate({
      pathname: "/search",
      search: `?${createSearchParams(searchParams)}`,
    });
  };
  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchOption value={selectValue} onChange={ChangeSelect}>
          <Option value="title">제목으로 검색</Option>
          <Option value="category">카테고리로 검색</Option>
          <Option value="price">가격 이하로 검색</Option>
        </SearchOption>
        {selectValue === "price" ? (
          <SearchInput
            type="number"
            name="searchWord"
            value={inputValue}
            onChange={ChangeInput}
          />
        ) : (
          <SearchInput
            type="search"
            name="searchWord"
            value={inputValue}
            onChange={ChangeInput}
          />
        )}
        <SeparateLine>|</SeparateLine>
        <IconBtn title="search" fontSize="25px" />
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;
