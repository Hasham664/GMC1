import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyVideo from "../common/listing-details/PropertyVideo";
import WalkScore from "../common/listing-details/WalkScore";
import Schools from "../common/listing-details/Schools";
import PropertyHistory from "../common/listing-details/PropertyHistory";
import { useRouter } from 'next/router';
import React,{ useState, useEffect } from "react";
import config from "../../data/config";
import axios from "axios";

const DetailsContent = (props) => {
  try {
    const propertyDetails = props.item; 
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem item={propertyDetails}/>
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">Description</h4>
        <PropertyDescriptions desc={propertyDetails} />
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Property Details</h4>
          </div>
          <PropertyDetails item={propertyDetails}/>
        </div>
      </div>
      {/* End .additional_details */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Additional details</h4>
          </div>
          <AdditionalDetails item={propertyDetails}/>
        </div>
      </div>      

      {/* End .additional_details */}

      {/* <div className="property_attachment_area">
        <h4 className="mb30"> Association Fee Includes</h4>
        <div className="iba_container style2">
          <Attachments item={propertyDetails}/>
        </div>
      </div> */}
      {/* End .property_attachment_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb10">Features</h4>
          </div>
          {/* End .col */}
          <PropertyFeatures item={propertyDetails} />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">
          Location{" "}
          <small className="float-end">
          {propertyDetails?.StreetNumber} {propertyDetails?.StreetDirPrefix} {propertyDetails?.StreetName} {propertyDetails?.StreetSuffix}, {propertyDetails?.City}, {propertyDetails?.StateOrProvince}, {propertyDetails?.PostalCode}
          </small>
        </h4>
        <div className="property_video p0">
          <PropertyLocation place={`${propertyDetails?.StreetNumber} ${propertyDetails?.StreetDirPrefix} ${propertyDetails?.StreetName} ${propertyDetails?.StreetSuffix}, ${propertyDetails?.City}, ${propertyDetails?.StateOrProvince}, ${propertyDetails?.PostalCode}`}/>
        </div>
      </div>
      {/* End .location_area */}
      {propertyDetails?.Rooms?.length > 0 && 

      <div className="application_statics mt30">
        <h4 className="mb30">Floor plans</h4>
        <div className="faq_according style2">
          <FloorPlans item={propertyDetails}/>
  
        </div>
      </div>
  }
      {/* End .floor_plane */}
      {propertyDetails?.VirtualTourURLUnbranded && 
      <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo item={propertyDetails}/>
      </div>
  }
      {/* End property-video  */}

      {/* <div className="walkscore_area mt30">
        <WalkScore item={propertyDetails} />
      </div> */}
      {/* End walkscore_area */}

      <div className="walkscore_area mt30">
        <Schools item={propertyDetails} />
      </div>
      {/* End walkscore_area */}

      {/* <div className="whats_nearby mt30">
       
        <PropertyHistory item={propertyDetails}/>
      </div> */}

     
     
      {/* End review and comment area area */}
    </>
  );
    }
    catch (error) {
      console.error('Error parsing JSON:', error);
      // Handle the error gracefully, e.g., display an error message to the user
    }
};

export default DetailsContent;
