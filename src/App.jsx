// import ScrollToTop from "../../hooks/ScrollToTop";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./containers/Navbar/Navbar";
import Footer from "./containers/Footer/Footer";
import PageHome from "./pages/PageHome/PageHome";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routes>
          <Route index element={<PageHome />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
