
import './App.css';
import './input.css';
import { Routes ,Route} from "react-router-dom";

import Narbar from './components/Navbar';
import Detail from './pages/DetailPage';
import Landing from './pages/LandingPage';

function App() {
  return (
  <div className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500'>
    <Narbar/>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
    </Routes>
  </div>
);
}

export default App;
