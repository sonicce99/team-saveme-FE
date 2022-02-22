import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Compare from "./components/compare/Compare";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
      {/* react-query 브라우저 디버깅 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </BrowserRouter>
  );
}

export default App;
