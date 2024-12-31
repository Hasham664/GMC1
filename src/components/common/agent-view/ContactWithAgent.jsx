import React, { useState } from 'react';
import axios from 'axios';
import config from "../../../data/config";
import { toast } from 'react-toastify';


const ContactWithAgent = () => {
  let message = '';
  let resp = '';

  if (typeof window !== 'undefined') {
    const retrievedValue = window.localStorage.getItem('items');
    resp =  retrievedValue ? JSON.parse(retrievedValue) : JSON.parse(retrievedValue);
    message = `${resp?.StreetNumber} ${resp?.StreetName} ${resp?.StreetSuffix}, ${resp?.City}, ${resp?.StateOrProvince}, ${resp?.PostalCode}`;
   }
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email:'',
    msg: `I am Interested in ${message}`,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle the form submission logic here, e.g., send data to a server.
    try {
      formData['popertyId']= resp?.ListingId;
      formData['address']= message;
      // Send a POST request with Axios
      const response = await axios.post(`${config.adminUrl}sendMailContact`, formData);

      toast.success('Inquiry submitted successfully', {
        position: 'top-right',
        autoClose: 3000,
      });

      // Clear the form or perform any other necessary actions
      setFormData({
        name: '',
        phone: '',
        email:'',
        msg: `I am Interested in ${message}`,
      });
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error:', error);
    }

  };
   return (
    <form action="#" onSubmit={handleSubmit}>
      <ul className="sasw_list mb0">
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="text"
              value={formData.name}
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name"
              onChange={handleInputChange}
              required
            />
          </div>
        </li>
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </li>{" "}
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </li>
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <textarea
              id="form_message"
              name="msg"
              className="form-control "
              rows="5"
              required
              placeholder="Your Message"
              onChange={handleInputChange}
              value={formData.msg}
            >

              </textarea>
          </div>
        </li>
        {/* End li */}
        <li>
          <div className="search_option_button">
            <button type="submit" className="btn btn-block btn-thm w-100">
              Send
            </button>     
          </div>
        </li>{" "}
        {/* End li */}
      </ul>
    </form>
  );
   
};

export default ContactWithAgent;
