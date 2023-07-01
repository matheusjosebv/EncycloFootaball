import ScrollToTop from "./hooks/ScrollToTop";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./containers/Navbar/Navbar";
import Footer from "./containers/Footer/Footer";
import PageHome from "./pages/PageHome/PageHome";
import PageAbout from "./pages/PageAbout/PageAbout";
import PageHistory from "./pages/PageHistory/PageHistory";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PageStatistics from "./pages/PageStatistics/PageStatistics";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/history" element={<PageHistory />} />
          <Route path="/statistics" element={<PageStatistics />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
