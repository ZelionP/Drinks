import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// All the pages
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import About from './pages/About';
import Drink from './pages/Drink';
import Error from './pages/Error';

function App() {
  return  (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/drink/:id" element={<Drink/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;
