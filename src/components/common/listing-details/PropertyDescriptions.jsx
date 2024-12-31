import { useState } from "react";

const PropertyDescriptions = (props) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <p className="mb25">
    {props.desc?.PublicRemarks}
      </p>
      <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
      {props.desc?.PrivateRemarks}
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className="mt10 mb10">
          Listed by : {props.desc?.ListOfficeName}
          </p>
          <p className="mt10 mb10">
          {props.desc?.ListingAgreement}

          </p>
        </div>
      </div>
      <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          Show More <span className="flaticon-download-1 fz12"></span>
        </a>
      </p>
    </>
  );
};

export default PropertyDescriptions;
