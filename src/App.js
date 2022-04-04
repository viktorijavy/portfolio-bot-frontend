import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';

import Navbar from './components/Navbar';
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
      
      
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/customize">
            <Customizer />
          </Route> */}
          <Route path='/' element={<HomePage />} />
       
      
    </Routes>
</Router>    
    </div>
  );
}

export default App;
