import  { useState , useEffect} from "react"; 
import DoctorCard from "../../components/DoctorCard";
import { Oval } from 'react-loader-spinner';
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorsList , setDoctersList] = useState([])
  const [apiStatus , setApiStatus] = useState(apiStatusConstants.initial)
  useEffect(()  => {
    const getDoctersData = async () => {
        setApiStatus(apiStatusConstants.inProgress)
        const apiUrl = "https://jsonkeeper.com/b/XEHRE"
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(response)
         if (response.ok){
            setDoctersList(data) 
            setApiStatus(apiStatusConstants.success)                       
         } else {
            setApiStatus(apiStatusConstants.failure)
         }
        
    }
    getDoctersData()
  }, [])
  const filteredDoctors = doctorsList.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderLoader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <Oval
        height={80}
        width={85}
        color="rgba(59, 23, 186, 1)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="rgba(1, 4, 3, 1)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
    )
  }

  const renderFailureImage = () => {
    return (
        <div>
            <img src="https://static.vecteezy.com/system/resources/previews/008/568/886/non_2x/website-page-not-found-error-404-worried-robot-character-with-magnifying-glass-in-hand-site-crash-on-technical-work-eps-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg" alt="failure" className="failue-image" />
        </div>
    )
  }

  const renderDoctersData = () => {
    return (
        <div  >
        {filteredDoctors.length ? (
            <div className="doctor-list">
          {filteredDoctors.map((doctor) => (
             <DoctorCard doctor={doctor}  key={doctor.id}/>
          ))} </div>
        ) : (
          <p>No doctors found.</p>
        )}
     
      <section id="about" style={{ padding: '50px 20px',color:"white" , backgroundColor: 'transperent' }}>
      <h2>About Us</h2>
      <p>
        We connect patients with expert doctors instantly. Our platform helps you view
        doctor profiles, check availability, and book appointments easily.
      </p>
    </section>

    <section id="contact" className="contact" style={{ padding: '50px 20px',  backgroundColor: '#e9e9e9'  }}>
      <h2>Contact Us</h2>
      <p>Email: contact@healthcare.com</p>
      <p>Phone: +91-9876543210</p>
    </section>
      </div>
    )
  }
  const renderAllDoctersData = () => {
    
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoader()
      case apiStatusConstants.success:
        return renderDoctersData()
      case apiStatusConstants.failure:
        return renderFailureImage()
      default:
        return null;
    }
  }

  return (
    <div className="home-container">
        <div className="user-container">  
      <h1 className="title">OUR DOCTOR'S</h1>

      <input
        type="text"
        placeholder="Search doctor by name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
       
       <div>
        {renderAllDoctersData()}
       </div>
       
    </div>
  );
};

export default Home;
