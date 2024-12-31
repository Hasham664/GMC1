const PropertyItem = (props) => {
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{props.item?.PropertyType}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Beds: {props.item?.BedroomsPossible}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Baths: {props.item?.BathroomsTotalInteger} </a>
      </li>
      {/* <li className="list-inline-item">
        <a href="#">Size Dimension: {props.item?.LotSizeDimensions} </a>
      </li> */}
    </ul>
  );
};

export default PropertyItem;
