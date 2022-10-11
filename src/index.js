import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/error/Page404";
import Logement from "./pages/logement/Logement";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  rootElement
);
