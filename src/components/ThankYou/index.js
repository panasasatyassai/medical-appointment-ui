import { useNavigate } from 'react-router-dom'
import './index.css'

const ThankYou = () => {
    const navigate = useNavigate()

    const onClickToHome = () => {
        navigate("/")
    }
    return (
        <div className='thank-you-contaner'>
            <div className='img-container'> 
            <img src='https://t3.ftcdn.net/jpg/08/67/87/90/240_F_867879054_mzDqmr6mND75P2Pg0XpINIsLvkDe4LUD.jpg'
             alt='thank-you' className='img1' />
             <div> 
            <h1 className='greeting'>Appointment Booked Successfully!</h1>
            <p className='support-message'>Thank you for choosing HealthCare+. We’ll contact you with further details.</p>
            </div>
             </div> 
             <button className='back-home-btn' onClick={onClickToHome} >Back to Home</button>
        </div>
    )
}

export default ThankYou 