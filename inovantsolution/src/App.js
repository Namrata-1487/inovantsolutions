// App.js
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Influencer from './Pages/Infulencer';
import Favourite from './Pages/Favourite';
import Cart from './Pages/Cart';
import AllCousins from './Pages/AllCousins';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/influencer" element={<Influencer />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all-cousins" element={<AllCousins />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
