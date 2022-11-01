import { Footer, Header } from "./components";
import { Backstage, Hero } from "./sections";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Backstage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
