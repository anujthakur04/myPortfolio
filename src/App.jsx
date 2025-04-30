import './App.css';
import Contact from './components/Contact Us/Contact';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
