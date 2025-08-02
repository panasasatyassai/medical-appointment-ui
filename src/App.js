// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';
import NotFound from './pages/NotFound';
//import SearchBar from './components/SearchBar';
import ThankYou from './components/ThankYou';
import Header from './components/Header';
import BookedUsers  from './components/BookedUsers';
import "./App.css"

const App = () => (
  <div className='background-container'> 
   <Header/>
    <Router>
      <Routes>
        <Route exact path="/"  Component={Home} /> 
        <Route exact path='/doctor/:id'  Component={DoctorProfile} />
        <Route exact path='/thank-you' Component={ThankYou} />
        <Route exact path='/booked-users' Component={BookedUsers} />
        <Route exact path="*"  Component={NotFound}/> 
      </Routes>
    </Router>
  </div>
     
)

export default App;
