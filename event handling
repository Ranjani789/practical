import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appointmentDate: "",
    doctor: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // Validate single field
  const validateField = (name, value) => {
    let error = "";
    if (name === "name" && value.trim() === "") error = "Name is required";
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Invalid email format";
    }
    if (name === "appointmentDate" && !value)
      error = "Appointment date is required";
    if (name === "doctor" && value === "") error = "Please select a doctor";

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) newErrors[field] = "This field is required";
      else validateField(field, formData[field]);
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Appointment booked successfully!");
      console.log("Form Data:", formData);
      setFormData({ name: "", email: "", appointmentDate: "", doctor: "" });
      setTimeout(() => setSuccessMessage(""), 4000);
    }
  };

  return (
    <div className="form-container">
      <style>{`
  body {
    margin: 0;
    padding: 0;
  }

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(to right, #74ebd5, #acb6e5);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .form-card {
    background: #fff;
    padding: 30px 40px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 450px;
  }

  h2 {
    text-align: center;
    margin-bottom: 25px;
    color: #333;
  }

  .form-group {
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 5px;
    font-weight: 600;
  }

  input, select {
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 15px;
    transition: border 0.3s;
  }

  input:focus, select:focus {
    border-color: #6c63ff;
    outline: none;
  }

  .input-error {
    border-color: #ff4d4f;
  }

  .error {
    color: #ff4d4f;
    font-size: 13px;
    margin-top: 3px;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #6c63ff;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .submit-btn:hover {
    background-color: #574fd6;
  }

  .success-message {
    margin-top: 15px;
    color: #28a745;
    font-weight: 600;
    text-align: center;
  }

  @media (max-width: 500px) {
    .form-card {
      padding: 20px;
    }
  }
`}</style>

      <div className="form-card">
        <h2>Book Your Medical Appointment</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Appointment Date</label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className={errors.appointmentDate ? "input-error" : ""}
            />
            {errors.appointmentDate && (
              <span className="error">{errors.appointmentDate}</span>
            )}
          </div>

          <div className="form-group">
            <label>Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className={errors.doctor ? "input-error" : ""}
            >
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Ranjani</option>
              <option value="Dr. Johnson">Dr. Ramsree</option>
              <option value="Dr. Lee">Dr. Priya</option>
            </select>
            {errors.doctor && <span className="error">{errors.doctor}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
