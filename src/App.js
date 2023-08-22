import "./App.css";
import { About, Contact, Home, Shop, ShopSingle } from "./pages/modules";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header, TopNav } from "./sections/modules";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop-single" element={<ShopSingle />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
