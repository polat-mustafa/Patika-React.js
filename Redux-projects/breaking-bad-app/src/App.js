import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./components/Character";
import Quote from "./components/Quote";
import QuoteDetail from "./components/QuoteDetail";
import CharacterDetail from "./components/CharacterDetail";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/character/:char_id" element={<CharacterDetail />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/quote/:quote_id" element={<QuoteDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
