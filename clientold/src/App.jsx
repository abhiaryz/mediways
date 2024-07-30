import "./App.css";
import { Navbar } from "./components";
import BLS from "./components/BLS";
import {
  Specialities,
  Services,
  Carousel,
  NewsLetter,
  Footer,
} from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Specialities />
      <Services />
      <BLS/>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
