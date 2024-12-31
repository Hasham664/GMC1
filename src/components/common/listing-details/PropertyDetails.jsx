const PropertyDetails = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property ID : <span>{props.item?.ListingId?.replace(/[^0-9]/g, '')}</span>
            </p>
          </li>
          <li>
            <p>
              Price :<span>${(props.item?.hasOwnProperty('ListPrice') && props.item?.ListPrice != 0) ?  props.item?.ListPrice?.toLocaleString() : props.item?.MRD_RP?.toLocaleString() || 0 }
           </span> </p>
          </li>
          <li>
            <p>
              Property Size : <span>{props.item?.LivingArea}</span>
            </p>
          </li>
          <li>
            <p>
            Build Date: <span>{props.item?.YearBuilt}</span>
            </p>
          </li>
          <li>
            <p>
            Property Type: <span>{props.item?.PropertyType}</span>
            </p>
          </li>
          {/* <li>
            <p>
            CompensationType: <span>{props.item?.BuyerAgencyCompensationType}</span>
            </p>
          </li> */}
   
          
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Bedrooms : <span>{props.item?.BedroomsTotal}</span>
            </p>
          </li>
          <li>
            <p>
              Bathrooms : <span>{props.item?.BathroomsTotalInteger}</span>
            </p>
          </li>
          <li>
            <p>
              Garage : <span>{props.item?.GarageSpaces} </span>
            </p>
          </li>
          <li>
            <p>
            Property taxes : <span> {props.item?.TaxAnnualAmount}</span>
            </p>
          </li>
          <li>
            <p>
            Compensation: <span>{props.item?.BuyerAgencyCompensation}</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property Type : <span> {props.item?.PropertyType}</span>
            </p>
          </li>
          <li>
            <p>
              Property Age : <span> {props.item?.MRD_AGE}</span>
            </p>
          </li>
          <li>
            <p>
              Property Status : <span>{props.item?.MRD_ACTUALSTATUS}</span>
            </p>
          </li>

          <li>
            <p>
            HOA dues : <span>${props.item?.AssociationFee}</span>
            </p>
          </li>

          
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
