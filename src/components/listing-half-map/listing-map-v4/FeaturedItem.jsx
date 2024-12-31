import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";
import config from "../../../data/config";
import Image from "next/image";
import axios from "axios";
import React,{ useState } from "react";
import { useRouter } from 'next/router'
import Router from "next/router";

const FeaturedItem = (props) => {
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );  
  const [loading, setLoading] = React.useState(true); 

  const dispatch = useDispatch();
  const listProperties = props.items;   
  if(loading)
  {
    setLoading(false);
  }

  const keywordHandler = (item) =>
    item.title.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    return item.location.toLowerCase().includes(location.toLowerCase());
  };

  // status handler
  const statusHandler = (item) =>
    item.type.toLowerCase().includes(status.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item.type.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item.price < price?.max && item.price > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.itemDetails[1].number == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.itemDetails[0].number == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.itemDetails[2].number) > area.min &&
          parseInt(item.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item.amenities.toLowerCase())
      );
    }
    return true;
  };
  const handleImgError = e => {
    e.target.src = "/assets/images/no-image.jpg"
  }
  const handleClick = (elem) => {
    window.localStorage.setItem('items', JSON.stringify(elem));
    Router.push(`/listing-details-v1?property=${elem.ListingId}`);
  };
  const priceChange = (elem) => {
    let price = parseFloat(elem);
    return price.toLocaleString() || 0;
  }
  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item.featured === featured;
    }
    return true;
  };

  if (!listProperties) return "<p>Loading...</p>"

  // status handler
  let content = listProperties
    // ?.slice(0, 8)
    // ?.filter(keywordHandler)
    // ?.filter(locationHandler)
    // ?.filter(statusHandler)
    // ?.filter(propertiesHandler)
    // ?.filter(priceHandler)
    // ?.filter(bathroomHandler)
    // ?.filter(bedroomHandler)
    // ?.filter(garagesHandler)
    // ?.filter(builtYearsHandler)
    // ?.filter(areaHandler)
    // ?.filter(advanceHandler)
    // ?.sort(statusTypeHandler)
    // ?.filter(featuredHandler)
    .map((item,index) => 
    {
      let jsonData = JSON.parse(item.jsonData);
    return (
      <div
        className={`${
          isGridOrList ? "col-12 list_map feature-list" : "col-md-6 col-lg-6"
        } `}
        key={index}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb" style={{ cursor: 'pointer' }} onClick={() => handleClick(jsonData)}>
          <Image
            width={343}
            height={220}
            className="img-whp w-100 h-100 cover"
            src={`${config.adminUrl}${item.MediaURL}`}
            onError={handleImgError}
            alt="Image"
          />

  
            {/* <Image
              unoptimized
              width={332}
              height={220}
              className="img-whp w-100 h-100 cover"
              src={
                item?.Media[0]?.MediaURL}
              key={item?.Media[0]?.MediaKey}
              alt="fp1.jpg"
            /> */}
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                {/* <li className="list-inline-item">
                  <a href="#">{item.ListingId}</a>
                </li>  */}
                <li className="list-inline-item">
                  <p  className="text-capitalize">
                    {item.MlsStatus}
                  </p>
                </li>
              </ul>
              <ul className="icon mb0">
                {/* <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li> */}
                {/* <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li> */}
              </ul>

            
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              {/* <p className="text-thm">{item.type}</p> */}

             <h3> <b style={{ cursor: 'pointer' }} onClick={() => handleClick(jsonData)}
                className="fp_price"
              >
                ${ (item?.ListPrice == '0' || item?.ListPrice == null)?   parseFloat(item?.MRD_RP).toLocaleString() :  parseFloat(item?.ListPrice).toLocaleString() ||  parseFloat(item?.MRD_RP).toLocaleString() }
                {/* ${priceChange(item?.ListPrice) }
                 { item?.MRD_RP  && <small>/mo</small> } */}
              </b> </h3>

              {/* <h5>
                <Link href={`/listing-details-v1?property=${item.ListingId}&item=${JSON.stringify(item)}`}>
                  {item.PrivateRemarks}
                </Link>
              </h5> */}
              
              <p>
                <span className="flaticon-placeholder"></span>
                {jsonData?.StreetNumber} {jsonData?.StreetDirPrefix} {jsonData?.StreetName} {jsonData?.StreetSuffix} {jsonData?.UnitNumber && <span>Unit# {jsonData?.UnitNumber}</span>}, {jsonData?.City}, {jsonData?.StateOrProvince}, {jsonData?.PostalCode}
              </p>

              <ul className="prop_details mb0">
                 {/* {item.Rooms.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.RoomType}: {val.RoomType}
                    </a>
                  </li>
                ))}  */}
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                {/* <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <Image
                      width={40}
                      height={40}
                      src={item.posterAvatar}
                      alt="pposter1.png"
                    />
                  </Link>
                </li> */}
           <li className="list-inline-item">
              {jsonData?.BedroomsTotal ? (
          <span>Beds: {jsonData?.BedroomsTotal}</span>
        ) : (
          <span>Beds: 0 </span>
        )} 
&nbsp;&nbsp;&nbsp;
{jsonData?.BathroomsFull ? (
          <span>Full Baths: {jsonData?.BathroomsFull}</span>
        ) : (
          <span>Full Baths: 0</span>
        )}
&nbsp;&nbsp;&nbsp;
{jsonData?.BathroomsHalf ? (
          <span>Half Baths: {jsonData?.BathroomsHalf}</span>
        ) : (
          <span>Half Baths: 0</span>
        )}
      <br></br>
{jsonData?.LivingArea ? (
          <span>Sq Ft: {jsonData?.LivingArea.toLocaleString()}</span>
        ) : (
          ''
        )}
              </li>
              </ul>
              <br></br>
              <br></br>
               <div className="fp_pdate float-left">List Office Name : {item?.ListOfficeName}</div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    )});



    // return <>{content}</>;
  // add length of filter items
  useEffect(() => {
   // if(loading){
        //fetchData();
       // }
   dispatch(addLength(content.length));
  }, [dispatch, content]);

  return <>{!loading && content}</>;
 };



export default FeaturedItem;
