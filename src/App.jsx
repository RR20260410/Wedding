import Header from './components/Header';
import Hero from './components/Hero';
import HowWeMet from './components/HowWeMet';
import Wedding from './components/Wedding';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <HowWeMet />
        <Gallery />
        <Wedding />
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
