import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Glaucoma from './components/Glaucoma';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Cataract from './components/Cataract';
import Refractive from './components/Refractive';
import VideoPage from './components/VideoPage';
import './reset.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="glaucoma" element={<Glaucoma />} />
          <Route path="/cataract" element={<Cataract />} />
          <Route path="refractive" element={<Refractive />} />
          <Route path="/videos" element={<VideoPage />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
