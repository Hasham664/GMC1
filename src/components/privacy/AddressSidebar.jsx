import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contact Us</h4>
     
      <div className="content_list">
        <h5>Address</h5>
        <p>
          2301 Ravenswood Rd Madison, <br />
          WI 53711
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>(315) 905-2321</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>info@gmcrealty.com</p>
      </div>
      <div className="content_list">
        <h5>Skype</h5>
        <p>GMCRealty.com</p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
