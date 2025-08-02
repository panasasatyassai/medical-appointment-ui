import './index.css'

const BookedUsers = () => {
    const bookUsers = localStorage.getItem("bookedUsers")
    const allUsers = JSON.parse(bookUsers) 
    return (
        <div className="table-container">
    <h2>Booked Appointments</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.dateTime}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
    )
}

export default BookedUsers