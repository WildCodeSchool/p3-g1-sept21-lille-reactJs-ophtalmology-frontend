import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
