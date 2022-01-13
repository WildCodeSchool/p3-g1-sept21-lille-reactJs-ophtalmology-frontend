import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Cataract from './components/Cataract';
import './reset.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cataract" element={<Cataract />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
