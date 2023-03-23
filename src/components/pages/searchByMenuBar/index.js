import CategoryNav from "./CategoryNav";
import SearchByNation from "./SearchByNation";
import SearchByGenre from "./SearchByGenre";

const SearchedBooks = (props) => {
  return (
    <>
      <CategoryNav nation={props.nation} genre={props.genre} />
      {props.genre ? (
        <SearchByGenre nation={props.nation} genre={props.genre} />
      ) : (
        <SearchByNation nation={props.nation} />
      )}
    </>
  );
};

export default SearchedBooks;
