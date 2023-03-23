import CategoryNav from "./CategoryNav";
import SearchByNation from "./SearchByNation";
import SearchByNationAndGenre from "./SearchByNationAndGenre";

const SearchedBooks = (props) => {
  return (
    <>
      <CategoryNav nation={props.nation} genre={props.genre} />
      {props.genre ? (
        <SearchByNationAndGenre nation={props.nation} genre={props.genre} />
      ) : (
        <SearchByNation nation={props.nation} />
      )}
    </>
  );
};

export default SearchedBooks;
