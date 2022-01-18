import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import CommentsArea from './components/CommentsArea';
import Contact from './components/Contact';
import About from './components/About';
import Glaucoma from './components/Glaucoma';
import Cataract from './components/Cataract';
import Refractive from './components/Refractive';
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
          <Route path="/glaucoma" element={<Glaucoma />} />
          <Route path="/cataract" element={<Cataract />} />
          <Route path="refractive" element={<Refractive />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <CommentsArea />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
