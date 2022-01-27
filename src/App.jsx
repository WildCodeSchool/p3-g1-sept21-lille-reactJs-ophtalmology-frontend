import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Glaucoma from './components/Glaucoma';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import CommentsArea from './components/CommentsArea';
import Contact from './components/Contact';
import About from './components/About';
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
          <Route path="/glaucomaSectionZero" element={<Glaucoma state={0} />} />
          <Route path="/glaucomaSectionOne" element={<Glaucoma state={1} />} />
          <Route path="/glaucomaSectionTwo" element={<Glaucoma state={2} />} />
          <Route
            path="/glaucomaSectionThree"
            element={<Glaucoma state={3} />}
          />
          <Route path="/glaucomaSectionFour" element={<Glaucoma state={4} />} />
          <Route path="/glaucomaSectionFive" element={<Glaucoma state={5} />} />
          <Route path="/glaucomaSectionSix" element={<Glaucoma state={6} />} />
          <Route
            path="/glaucomaSectionSeven"
            element={<Glaucoma state={7} />}
          />
          <Route
            path="/glaucomaSectionEight"
            element={<Glaucoma state={8} />}
          />
          <Route path="/glaucomaSectionNine" element={<Glaucoma state={9} />} />
          <Route path="/cataractSectionZero" element={<Cataract state={0} />} />
          <Route path="/cataractSectionOne" element={<Cataract state={1} />} />
          <Route path="/cataractSectionTwo" element={<Cataract state={2} />} />
          <Route
            path="/cataractSectionThree"
            element={<Cataract state={3} />}
          />
          <Route
            path="/refractiveSectionZero"
            element={<Refractive state={0} />}
          />
          <Route
            path="/refractiveSectionOne"
            element={<Refractive state={1} />}
          />
          <Route
            path="/refractiveSectionTwo"
            element={<Refractive state={2} />}
          />
          <Route
            path="/refractiveSectionThree"
            element={<Refractive state={3} />}
          />
          <Route
            path="/refractiveSectionFour"
            element={<Refractive state={4} />}
          />
          <Route
            path="/refractiveSectionFive"
            element={<Refractive state={5} />}
          />
          <Route
            path="/refractiveSectionSix"
            element={<Refractive state={6} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <CommentsArea />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
