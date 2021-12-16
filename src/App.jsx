import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './reset.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to="/" />
          <Route to="/contact" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
