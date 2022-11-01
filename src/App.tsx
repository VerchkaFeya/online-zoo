import { Footer, Header } from "./components";
import { Backstage, Hero, PickAndFeed } from "./sections";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Backstage />
        <PickAndFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
