import Image from "next/image";

const PropertyHistory = (props) => {
  return (
    <>
    
      <h3 className="mb30">
        Property History for {props.item?.MRD_LACITY} {props.item?.MRD_LASTREETNAME}{" "}
      </h3 >
      <div className="iba_container">
        <table>
          <thead>
          <tr>
            <th>Date</th >
            <th>Source</th >
            <th>Details</th >
            <th>Price</th >
            </tr>
            </thead>
          
            <tbody>
          <tr>
            <td>{props.item?.OffMarketDate}</td>
            <td>{props.item?.OriginatingSystemName}</td>
            <td>{props.item?.ListingAgreement}</td>
            <td>${props.item?.OriginalListPrice}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
            <th></th >
            <th></th >
            <th></th >
            <th></th >
            </tr>
            </tfoot>
        </table>
      </div> 



     
    </>
  );
};

export default PropertyHistory;
