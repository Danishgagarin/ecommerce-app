import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import required components from react-router-dom
import Navbar from './components/Navbar';
import Home from './components/Home';
import HomeProducts from './components/HomeProducts';
import Add from './components/Add';
import Manage from './components/Manage';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component will render at '/' */}
        <Route path="/products" element={<HomeProducts />} /> {/* HomeProducts component will render at '/products' */}
        <Route path="/add" element={<Add />} /> 
        <Route path="/manage" element={<Manage />} /> 
      </Routes>
    </>
  );
}

export default App;
