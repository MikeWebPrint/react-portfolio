// import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import InfoFooter from './components/Footer'
import AboutPage from './pages/AboutPage';
import Portfolio from './pages/PortfolioPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage'

import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <main>
        <Routes>
          <Route
            path = '/react-portfolio/Contact'
            element= {<ContactPage />}>
          </Route>
          <Route
            path = '/react-portfolio'
            element= {<AboutPage />}>
          </Route>
          <Route
          path='/react-portfolio/Portfolio'
          element={<Portfolio />}>

          </Route>
        </Routes>
        </main>
        <InfoFooter />

      </div>
    </Router>
  );
}

export default App;
