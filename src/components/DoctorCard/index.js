import {Link} from 'react-router-dom'
import './index.css'
const DoctorCard = (props) => {
    const {doctor} = props
    
    return (
        <Link to={`/doctor/${doctor.id}`} className='link-card'> 
         <div key={doctor.id} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <p
                className={`availability ${
                  doctor.available ? "available" : "unavailable"
                }`}
              >
                {doctor.available ? "Available" : "Not Available"}
              </p>
            </div>

            </Link>
    )
}

export default DoctorCard