const Form = () => {
  return (
    <form className="contact_form" action="#">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_name"
              name="form_name"
              className="form-control"
              required="required"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_email"
              name="form_email"
              className="form-control required email"
              required="required"
              type="email"
              placeholder="email"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_phone"
              name="form_phone"
              className="form-control required phone"
              required="required"
              type="phone"
              placeholder="Phone"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_bedroom"
              name="form_bedroom"
              className="form-control required"
              required="required"
              type="text"
              placeholder="Bedroom"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_bathroom"
              name="form_bathroom"
              className="form-control required"
              required="required"
              type="text"
              placeholder="Bathroom"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_area"
              name="form_area"
              className="form-control required"
              required="required"
              type="text"
              placeholder="Area Sft."
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              id="form_message"
              name="About this home"
              className="form-control required"
              rows="4"
              required="required"
              placeholder="About this home"
            ></textarea>
          </div>
          {/* End .col */}

          <div className="form-group mb0">
            <button type="submit" className="btn btn-lg btn-thm">
              Sell Now
            </button>
          </div>
          {/* End button submit */}
        </div>
      </div>
    </form>
  );
};

export default Form;
