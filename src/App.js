import "./App.css";
import { Container, Card } from "./Components/index";
import { Header, Hero, MostPopular, Footer } from "./Sections/index";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopular />
      </Container>
      <Footer />
    </>
  );
}

export default App;
