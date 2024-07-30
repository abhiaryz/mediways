import "./App.css";
import { Navbar } from "./components";
import { Specialities, Carousel, NewsLetter, Footer, BLS } from "./sections";
import DemoServices from "./sections/demo-services";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Specialities />
      <DemoServices />
      <BLS />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
