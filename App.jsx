import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    favAnime: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Please fill the details";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Please fill the details";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a correct email";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Please fill the details";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Favourite Anime
    if (!formData.favAnime.trim()) {
      newErrors.favAnime = "Please fill the details";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Registration Successful! Thank you for joining the Anime Club 🎉");

      setFormData({
        name: "",
        email: "",
        phone: "",
        favAnime: "",
      });
    } else {
      setSuccess("");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "auto" }}>
      <h2>Anime Club Registration Form</h2>

      <form onSubmit={handleSubmit}>
        
        <label>Name:</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <label>Email:</label>
        <input 
          type="text" 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <label>Phone:</label>
        <input 
          type="text" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.phone}</p>

        <label>Favourite Anime:</label>
        <input 
          type="text" 
          name="favAnime"
          value={formData.favAnime}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.favAnime}</p>

        <button type="submit">Register</button>
      </form>

      <h3 style={{ color: "green" }}>{success}</h3>
    </div>
  );
}

export default App;