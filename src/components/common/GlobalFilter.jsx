import Router from "next/router";
import config from "../../data/config";

import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import React, { useState } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";

const placesLibrary = ["places"];

const GlobalFilter = ({ className = "" }) => {
  // submit handler
  const submitHandler = () => {
    const place = searchResult.getPlace();
    if (place) {
    const place = searchResult.getPlace();
    let postalCode = place.address_components.find((component) => {
      return component.types.includes("postal_code");
    });
    let state = place.address_components.find((component) => {
      return component.types.includes("administrative_area_level_1");
    });
    let boundary = place.geometry.viewport.toJSON();

    Router.push(`/listing-map-v4?adress=${place.formatted_address}&place=${place.name}&lat=${JSON.stringify(place?.geometry?.location)}&postalCode=${postalCode?.long_name}&state=${state?.short_name}&boundary=${JSON.stringify(boundary)}`);
    }
    else{
    alert("Please enter place");
    return false;
    }
  };
  const [searchResult, setSearchResult] = useState("Result: none");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.googleMapsApiKey,
    libraries: placesLibrary
  });

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult?.getPlace();
      const name = place.name;
      let boundary = place.geometry.viewport.toJSON();
      // boundary = boundary.toJSON();
      // console.log(`Formatted Address: ${boundary}`);
      //console.log('Location Boundary:', boundary.toJSON());
      let postalCode = place?.address_components?.find((component) => {
        return component.types.includes("postal_code");
      });
      let state = place.address_components.find((component) => {
        return component.types.includes("administrative_area_level_1");
      });
      //console.log();
     // const status = place.business_status;
      const formattedAddress = place.formatted_address;
    // console.log(place);
      //console.log(`Name: ${postalCode}`);
     // console.log(`Business Status: ${status}`);
      console.log(`Formatted Address: ${formattedAddress}`);
      Router.push(`/listing-map-v4?adress=${place.formatted_address}&place=${place.name}&lat=${JSON.stringify(place?.geometry?.location)}&postalCode=${postalCode?.long_name}&state=${state?.short_name}&boundary=${JSON.stringify(boundary)}`);
      //  console.log(JSON.stringify(place?.geometry?.location));
    } else {
      alert("Please enter place");
      return false;

    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!searchResult) {
    return <div><h6 style={{color: "red"}}>Please Enter Address, City, ZIP</h6></div>;
  }


  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        

       

        <li className="list-inline-item">
          <div className="form-group">
          <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
            <input
              type="text"
              className="form-control"
              placeholder="Address, City, ZIP"
             // onChange={(e) => dispatch(addLocation(e.target.value))}
            />
            </Autocomplete>
            
            
          </div>
        </li>
        {/* End li */}



        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
