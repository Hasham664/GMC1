import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contact Us</h4>
     
      <div className="content_list">
        <h5>Address</h5>
        <p>
          125 Fairfield Way Ste 100, Bloomingdale, <br />
          IL 60108
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>(630) 994-3200</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>contact@gmcrealtor.com</p>
      </div>
       <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
