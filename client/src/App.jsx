import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Compare from "./components/Compare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
