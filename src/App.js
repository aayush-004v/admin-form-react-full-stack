import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import PersonalDetails from './components/PersonalDetails';
import Profile1 from './components/Profile1';
import Profile2 from './components/Profile2';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile1' element={<Profile1 />} />
          <Route path='/profile2' element={<Profile2 />} />
          <Route path='/personaldetails' element={<PersonalDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
