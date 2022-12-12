import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Layout } from "./layout/Layout";
import { HomePage } from "./pages/HomePage";
import { Donation } from "./sections";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="donate" element={<Donation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
