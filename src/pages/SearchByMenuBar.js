import { useParams } from "react-router-dom";

import PageHelmet from "../components/PageHelmet";
import SearchedBooks from "../components/pages/searchByMenuBar";
import SectionContainer from "../components/SectionContainer";

const SearchByMenuBar = () => {
  const { nation, genre } = useParams();
  return (
    <>
      <PageHelmet title={`Book24 - /${nation}${genre ? "/" + genre : ""}`} />
      <SectionContainer>
        <SearchedBooks nation={nation} genre={genre} />
      </SectionContainer>
    </>
  );
};

export default SearchByMenuBar;
