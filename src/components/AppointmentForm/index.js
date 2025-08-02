import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

import './index.css'
 

const AppointmentForm = () => {
    const storedUsers = JSON.parse(localStorage.getItem("bookedUsers")) || []; 
    const [name , setName ] = useState("")
    const [email , setEmail] = useState("")
    const [dateTime , setDateTime] = useState("")
    const [submited , setSubmited] = useState(false)
    const navigate = useNavigate()
   const [patientsList, setPatientsList] = useState(storedUsers);

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeDateTime = (event) => {
        setDateTime(event.target.value)
    }

    const formatDateTime = (input) => {
    const dateObj = new Date(input);

    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = dateObj.getFullYear();

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' should be '12'

    return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
  };

    const onSubmitForm = (event) => {
        event.preventDefault()  
        const formatedDateTime = formatDateTime(dateTime) 
            const newPatient = {
                id : uuidv4() ,
                name , email ,  dateTime : formatedDateTime
            }
            console.log(newPatient)

        if (name === "" && email === "" && dateTime === ""){
            alert("Enter Patient Name , Email ,  Date Time ")
        } else if (name === "") {
            alert("Enter Patient Name")
        } else if (email === ""){
            alert("Enter Patient Email")
        } else if (dateTime === "") {
            alert("Enter Date Time")
        } else { 
            setPatientsList((prevPatientList) => [...prevPatientList , newPatient])  
            setSubmited(true)
             setName("")
             setEmail("")
             setDateTime("")
        }
          
         
    }

        useEffect(() => {
            if (submited){
                navigate("/thank-you", { replace: true });
                localStorage.setItem("bookedUsers", JSON.stringify(patientsList))
            }
    console.log("Updated List:", patientsList);
    }, [submited, navigate]);

    return (
        <div className="form-container">
             <h1 className='heading2'>Book Appointment</h1>
             <form className='form-container' onSubmit={onSubmitForm} >
                <label className='user-label' htmlFor='name' >Patient Name : </label>
                <input value={name} className='user-box' placeholder='Enter Patient Name' onChange={onChangeName}   type="text" id='name' /> <br/>
                <label className='user-label' htmlFor='user-mail'>Enter Email : </label>
                <input value={email} placeholder='Enter Email adress' className='user-box' onChange={onChangeEmail}  type="email" id='user-mail'/> <br/>
                <label className='user-label'  htmlFor='user-date'>Choose Date : </label>
                <input value={dateTime} className='date-box' onChange={onChangeDateTime} type="datetime-local" id='user-date' /> <br/>
                 <div className='btn-container'>
                     <button className='btn2'  type='submit'>Submit</button>
                 </div>
             </form>
        </div>
    )
}

export default AppointmentForm