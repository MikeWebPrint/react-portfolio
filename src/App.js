import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About';
import Contact from './components/Contact'
import Graphics from './components/Graphics'
import Print from './components/Print'
import Development from './components/Development';
import './index.css'

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <About />
        <Development />
        <Graphics />
        <Print />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
