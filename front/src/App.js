
import './App.css';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import Loginpage from './pages/loginpage';
import Cart from './pages/cart';
import Prodpage from './pages/prodpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registerpage from './pages/registerpage';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/progpage" element={<Prodpage />} />
      </Routes>
      <Routes>
        <Route path="/Register" element={<Registerpage />} />
      </Routes>


    </Router>
  );
}

export default App;
