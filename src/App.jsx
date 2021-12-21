import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './reset.css';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to="/" />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
