
import '../assets/styles/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin.js';
import Profile from './pages/Profile';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
