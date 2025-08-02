#  Healthcare Appointment Booking App

A fully client-side React application for booking appointments with doctors. Users can fill in their name, email, and preferred date/time, and their appointments are stored in the browser's `localStorage`. The application also includes routing and a separate page to view all booked appointments.

---

##  Live Demo

- [View Live on Vercel](https://your-vercel-deployment-url.vercel.app)

---

##  GitHub Repository

- [GitHub Repo](https://github.com/panasasatyassai/medical-appointment-ui)

---

##  Tech Stack

- **React.js**
- **React Router DOM**
- **UUID** (v4) – For generating unique appointment IDs
- **localStorage** – For storing appointment data
- **CSS** – Custom styles (no frameworks)
- **Vercel** – Deployment platform

---

## 🔧 Features

-  Book an appointment (Name, Email, Date/Time)
-  Unique ID for every booking
-  Persistent data using `localStorage`
-  Doctor profile route with dynamic `id` (sample)
-  Thank You page upon booking confirmation
-  List of all booked appointments (`/booked-users`)
-  404 Not Found route

---

## 🗂 Folder Structure

src/
├── components/
│ ├── AppointmentForm/
│ ├── BookedUsers/
│ ├── DoctorCard/
│ ├── Header/
│ ├── ThankYou/
│
├── pages/
│ ├── DoctorProfile/
│ ├── Home/
│ ├── NotFound/
│
├── App.js
├── index.js
├── index.css

# Installation & Running Locally
1 Clone the Repository
 
git clone https://github.com/panasasatyassai/medical-appointment-ui
-cd healthcare-appointment-app

2. Install Dependencies 
-npm install

3. Install UUID 
-npm install uuid

4. Run the App 
-npm start
-The app runs at: http://localhost:3000

# Routing Overview

| Path            | Description                         |
| --------------- | ----------------------------------- |
| `/`             | Home page with appointment form     |
| `/doctor/:id`   | Sample doctor profile               |
| `/thank-you`    | Shown after a successful submission |
| `/booked-users` | Lists all booked appointments       |
| `*`             | 404 Not Found                       |

# Improvements With More Time
-Add backend (Firebase or Express) for real database storage

-Include doctor selection from available list

-Form validation and error display improvements

-Add cancel/delete option for appointments

-Responsive UI with better design using Tailwind or Bootstrap

# Challenges Faced
-Handling dynamic routes for doctor profiles

-Ensuring form validation and conditional rendering

-Managing localStorage updates and ensuring data is reactive

## 📃 License
-This project is created as part of the NxtWave Job Assessment and is intended for educational and evaluation purposes only.

# Developed By 
-Panasa Satya Sai
-- GitHub: @panasasatyassai