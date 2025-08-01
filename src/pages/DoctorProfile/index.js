import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  
  const onClickForm = () => {
     alert("ok")
  }
  useEffect(() => {
    fetch('https://jsonkeeper.com/b/DKAIV')
      .then(res => res.json())
      .then(data => {
        const found = data.find(doc => doc.id === parseInt(id));
        if (!found) navigate('/not-found');
        else setDoctor(found);
      })
      .catch(err => {
        console.error('Error fetching doctor:', err);
        navigate('/not-found');
      });
  }, [id, navigate]);

  if (!doctor) return <div className="loading">Loading...</div>;

  return (
    <div className="doctor-profile-container">
      <div className="doctor-card">
        <img src={doctor.image} alt={doctor.name} className="doctor-img" />
        <h2>{doctor.name}</h2>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p>
          <strong>Availability:</strong>{' '}
          <span className={doctor.available ? 'available' : 'unavailable'}>
            {doctor.available ? 'Available' : 'Not Available'}
          </span>
        </p>

        {doctor.schedule ? (
          <div className="schedule-info">
            <p><strong>Days:</strong> {doctor.schedule.days.join(', ')}</p>
            <p><strong>Time:</strong> {doctor.schedule.time}</p>
          </div>
        ) : (
          <p>No schedule available.</p>
        )}

        <button
          disabled={!doctor.available}
          onClick={onClickForm}
          className={`book-btn ${!doctor.available ? 'disabled' : ''}`}
        >
          {doctor.available ? 'Book Appointment' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
