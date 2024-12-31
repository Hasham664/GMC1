const AdditionalDetails = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
          <li>
            <p>
            Possession : <span>{props.item?.Possession}</span>
            </p>
          </li>
          <li>
            <p>
            GarageSpaces : <span>{props.item?.GarageSpaces}</span>
            </p>
          </li>
          <li>
            <p>
            Sewer : <span>{props.item?.Sewer}</span>
            </p>
          </li>
          <li>
            <p>
            Water Source : <span>{props.item?.WaterSource}</span>
            </p>
          </li>
          <li>
            <p>
            Cooling : <span>{props.item?.Cooling}</span>
            </p>
          </li>
          <li>
            <p>
              Garage Type : <span> {props.item?.MRD_GARAGE_TYPE}</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
          <li>
            <p>
            Electric : <span>{props.item?.Electric}</span>
            </p>
          </li>
          <li>
            <p>
              Amenities : <span>{props.item?.Electric}</span>
            </p>
          </li>
          <li>
            <p>
            Basement : <span>{props.item?.Basement?.join(', ')}</span>
            </p>
          </li>
          <li>
            <p>
            NewConstruction : <span>{props.item?.NewConstructionYN}</span>
            </p>
          </li>
          <li>
            <p>
            Days On Market : <span>{props.item?.DaysOnMarket}</span>
            </p>
          </li>
          <li>
            <p>
            Community : <span>{props.item?.MRD_MANAGECOMPANY}</span>
            </p>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default AdditionalDetails;
