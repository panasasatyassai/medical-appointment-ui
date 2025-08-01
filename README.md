# Healthcare Appointment Booking Interface
A simple and responsive React.js web application that allows users to view doctors, check their availability, and book appointments.

# Objective
To build a basic appointment booking platform where users can browse available doctors and schedule appointments using a clean, user-friendly interface.

# Live Demo
- Live Demo Link

# GitHub Repository
- GitHub Repo

# Tools & Libraries Used
React.js – For building user interfaces with components.

JavaScript (ES6) – Used for functionality and logic.

React Router DOM – For client-side routing/navigation.

CSS – For styling and layout.

JSONKeeper API – Used to fetch and mock doctor data.

# Features
- View a list of doctors with name, specialization, image, and availability.

- Search for doctors by name or specialization.

- View detailed doctor profile with appointment booking form.

- Book appointment with patient name, email, and preferred date/time.

- Data fetched from JSON API (https://jsonkeeper.com/b/XEHRE and https://jsonkeeper.com/b/DKAIV).

# Improvements with More Time
- Add form validation for better user input checking.

- Implement filter by specialization and availability.

- Add backend support using Node.js and Express for real-time appointments.

- Store appointment data persistently with localStorage or backend.

- Improve UI with frameworks like Tailwind CSS or Bootstrap.

# Technical Constraints Followed
Functional Components with React Hooks (useState, useEffect)

Used local state management

No external state libraries or frameworks

Used only JavaScript and CSS, no TypeScript

# Challenges Faced and Solutions
1. Routing between pages
Initially used <a href> which caused full page reloads.

- Replaced with Link from react-router-dom for smooth routing.

2. Fetching Data from APIs
Faced CORS issues when testing with some fake APIs.

- Resolved by switching to JSONKeeper which supports direct fetch without CORS issues.

3. Conditional Rendering of Doctor Data
Had trouble showing selected doctor’s profile dynamically.

- Solved using route parameters and conditional checks based on doctor ID.

# Acknowledgements
JSONKeeper for free JSON data hosting.

