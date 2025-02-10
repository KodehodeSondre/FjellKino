import React, { useState, useEffect } from "react";

const TicketModal = ({ movie, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
    time: movie.times[0],
  });

  const [totalPrice, setTotalPrice] = useState(movie.price);

  useEffect(() => {
    setTotalPrice((formData.tickets * movie.price).toFixed(2));
  }, [formData.tickets, movie.price]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `🎟️ Order Confirmed!\n\nMovie: ${movie.title}\nTickets: ${formData.tickets}\nTime: ${formData.time}\nTotal Price: $${totalPrice}\n📧 Tickets will be sent to: ${formData.email}`
    );
    setFormData({ name: "", email: "", tickets: 1, time: movie.times[0] });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>🎟️ Kjøp av billetter for {movie.title}</h2>

        <img src={movie.image} alt={movie.title} className="modal-movie-image" />

        <form onSubmit={handleSubmit}>
          <label>
            Fullt Navn:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email for Billett levering:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mengde Billetter:
            <input
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              min="1"
              required
            />
          </label>

          <label>
            Visningstid:
            <select name="time" value={formData.time} onChange={handleChange}>
              {movie.times.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </label>

          <p className="total-price">Total: <strong>${totalPrice}</strong></p>

          <button type="submit" className="btnstyle">Bekfreft Bestilling</button>
        </form>
      </div>
    </div>
  );
};

export default TicketModal;
