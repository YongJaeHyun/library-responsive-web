import { Link } from "react-router-dom";
import styled from "styled-components";

const BookBox = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  padding: 1rem;
  border-bottom: 1.5px solid #c8c8c8;
  &:last-child {
    border-top: 2px solid black;
  }
`;

const ImgBox = styled.div`
  width: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const BookImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.6rem;
  position: relative;
`;

const DefaultBox = styled.div`
  padding: 0.2rem 0;
`;

const AfterWord = styled.span`
  font-size: 0.8rem;
  word-break: keep-all;
  &::after {
    content: "|";
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
`;
const NationGenreCategoryBox = styled(DefaultBox)``;
const Nation = styled(AfterWord)``;
const Genre = styled(AfterWord)``;
const Category = styled.span`
  font-size: 0.8rem;
  word-break: keep-all;
`;

const TitleBox = styled(DefaultBox)``;
const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`;

const WriterBox = styled(DefaultBox)``;
const Writer = styled.p``;

const PriceBox = styled(DefaultBox)``;
const Price = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  bottom: 2.2rem;
`;

const InsertDateBox = styled.div``;
const InsertDate = styled.span`
  font-size: 0.9rem;
  position: absolute;
  bottom: 0.8rem;
`;

const Item = (props) => {
  const { book_id, src, nation, genre, category, title, writer, price, insert_date } = props;
  return (
    <BookBox>
      <ImgBox>
        <BookLink to={`/book/${book_id}`}>
          <BookImg src={src} />
        </BookLink>
      </ImgBox>
      <InfoBox>
        <NationGenreCategoryBox>
          <Nation>{nation.slice(0, 2)}</Nation>
          <Genre>{genre}</Genre>
          <Category>{category}</Category>
        </NationGenreCategoryBox>
        <TitleBox>
          <Title>{title}</Title>
        </TitleBox>
        <WriterBox>
          <Writer>{writer}</Writer>
        </WriterBox>
        <PriceBox>
          <Price>{`${price.toLocaleString("ko-KR")}원`}</Price>
        </PriceBox>
        <InsertDateBox>
          <InsertDate>{new Date(insert_date).toLocaleString("ko-KR")}</InsertDate>
        </InsertDateBox>
      </InfoBox>
    </BookBox>
  );
};

export default Item;
