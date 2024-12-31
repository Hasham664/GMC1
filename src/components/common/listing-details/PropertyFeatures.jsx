const PropertyFeatures = (props) => {
  let propertyFeatures = [];
  if(props.item?.ExteriorFeatures){
    propertyFeatures = [...propertyFeatures,...props.item.ExteriorFeatures]
  }
  if(props.item?.LotFeatures){
    propertyFeatures = [...propertyFeatures,...props.item.LotFeatures]
  }
  if(props.item?.InteriorFeatures){
    propertyFeatures = [...propertyFeatures,...props.item.InteriorFeatures]
  }
    return (
    <>
      {propertyFeatures.map((val, i) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={i}>
          <ul className="order_list list-inline-item">
          <li key={i}>
                <span className="flaticon-tick"></span>
                {val}
              </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
