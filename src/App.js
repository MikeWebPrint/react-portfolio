import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import InfoFooter from './components/Footer'
import About from './components/About';
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import Graphics from './components/Graphics'
import Print from './components/Print'
import Development from './components/Development';
import './index.css'

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
      <main>
        <About />
        <Development />
        <Graphics />
        <Print />
        <Contact />
        <ContactForm />
        <InfoFooter />
      </main>
    </div>
  );
}

export default App;
