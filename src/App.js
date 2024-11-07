import './App.css';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <>
      <Header />
      
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="register">
        <Register />
      </Element>

      <Element name="gallery">
        <PhotoGallery />
      </Element>
    </>
  );
}

export default App;
