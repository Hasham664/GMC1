// PropertyForm.js
import React, { useState } from 'react';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    garage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your server or handle it here
    // You can use a library like Axios to make an API request

    // Compose the email message
    const message = `
      Property Details:
      Address: ${formData.address}
      Area: ${formData.area}
      Bedrooms: ${formData.bedrooms}
      Bathrooms: ${formData.bathrooms}
      Garage: ${formData.garage}
    `;

    // Send the email
    const to = 'contact@gmcrealty.com';
    const subject = 'New Property Listing';

    // Create a POST request to your server to send the email
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, subject, message }),
    };

    fetch('/api/sendEmail', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('Email sent:', data);
        // Optionally, you can redirect the user or display a success message
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle errors here
      });
  };

  return (
    <div>
      <h1>Sell Your Property</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        /><br/><br/>

        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
        /><br/><br/>

        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        /><br/><br/>

        <label htmlFor="bathrooms">Bathrooms:</label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
        /><br/><br/>

        <label htmlFor="garage">Garage:</label>
        <input
          type="text"
          id="garage"
          name="garage"
          value={formData.garage}
          onChange={handleChange}
          required
        /><br/><br/>

        <input type="submit" value="Submit" 
        />
      </form>
    </div>
  );
};

export default PropertyForm;
