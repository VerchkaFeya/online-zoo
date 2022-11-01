import { Footer, Header } from "./components";
import { Backstage, Hero, PickAndFeed, Testimonials } from "./sections";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Backstage />
        <PickAndFeed />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
