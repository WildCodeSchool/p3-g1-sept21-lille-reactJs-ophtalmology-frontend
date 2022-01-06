import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import './reset.css';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
          <Route to="/" />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
