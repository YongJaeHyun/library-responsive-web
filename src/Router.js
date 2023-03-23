import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";
import MenuBar from "./components/menuBar";
import SearchBar from "./components/searchBar";
import GetBook from "./pages/GetBook";
import Home from "./pages/Home";
import InsertBook from "./pages/InsertBook";
import SearchByMenuBar from "./pages/SearchByMenuBar";
import SearchBySearchBar from "./pages/SearchBySearchBar";
import UpdateBook from "./pages/UpdateBook";

const Container = styled.div`
  width: 80vw;
  height: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  width: 70vw;
  height: 100%;
  margin: 0 auto;
`;

const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Header />
            <SearchBar />
            <MenuBar />
            <Container>
              <MainContainer>
                <Outlet />
              </MainContainer>
            </Container>
            <Footer />
          </>
        }
      >
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<GetBook />} />
        <Route path="/book/:bookId/update" element={<UpdateBook />} />
        <Route path="/:nation" element={<SearchByMenuBar />} />
        <Route path="/:nation/:genre" element={<SearchByMenuBar />} />
        <Route path="/search" element={<SearchBySearchBar />} />
        <Route path="/insert" element={<InsertBook />} />
      </Route>
    </Routes>
  );
};

export default Router;
