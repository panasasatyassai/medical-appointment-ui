 
import "./index.css"

const Header = () => {
  return (
    <header className="app-header">
       <div className="logo"> <a href="/"  className="heading">HealthCare+</a> </div>  
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/booked-users">Booked Appointments</a>
        <a href="#about">About</a> 
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default  Header;
