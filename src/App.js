
import HomePage from './pages/HomePage';
import Customizer from './components/Customizer';
import Portfolio from './pages/Portfolio';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/customizer' element={<Customizer />}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
