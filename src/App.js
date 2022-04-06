
import HomePage from './pages/HomePage';
import Customizer from './components/Customizer';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>


       
          <Route path='/' element={<HomePage />} />
          <Route path='/customizer' element={<Customizer />}   
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
