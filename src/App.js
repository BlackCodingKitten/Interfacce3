
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import MobileSignUp from './routes/MobileSignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/MOBILEsignup" element={<MobileSignUp/>}/>
      </Routes>     
    </div>
  );
}

export default App;
