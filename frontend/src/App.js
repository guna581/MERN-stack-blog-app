import logo from './logo.svg';
import './App.css';
import Blog from './components/blog';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<Blog />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
