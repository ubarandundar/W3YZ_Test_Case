import './App.css';
import Carousels from './components/Carousel/Carousels';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Podcast from './components/Podcast/Podcast';
import VisitType from './components/VisitType/VisitType';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Carousels />
      <Podcast />
      <VisitType />
      <Footer />
    </>
  );
}

export default App;
