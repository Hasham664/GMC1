
/* global google */
import { GoogleMap, Marker, useLoadScript, Polygon, InfoBox } from "@react-google-maps/api";
import config from "../../../data/config";
import { useRouter } from 'next/router'
import { Loader } from "@googlemaps/js-api-loader"
import React,{ useState, useEffect, useRef  } from "react";
import Image from "next/image";
import Router from "next/router";

// import "./App.css";

const Map = (props) => {
  let markers = [];
  const router = useRouter();
  const [defaultLocation, setLocations] = useState(null);
  const [loading, setLoading] = React.useState(true); 
  const [infoBoxOpen, setInfoBoxOpen] = useState(null);
  const infoBoxRef = useRef(null);

  const baseURL = config.adminUrl;
  const handleImgError = e => {
    e.target.src = "/assets/images/no-image.jpg"
  }
  const handleInfoBoxOpen = () => {
    setInfoBoxOpen(true);
  }

  const closeInfoBox = () => {
    setInfoBoxOpen(null);
  }

  useEffect(() => {
    try {
      const locations = router.query.lat ? JSON.parse(router.query.lat) : null ;
      onLoad();
      setLocations(locations);
      setLoading(false);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }, [loading]);

  useEffect(() => {
    // Add a click event listener to the window
    const handleWindowClick = (e) => {
      if (infoBoxOpen && infoBoxRef.current && !infoBoxRef.current.contains(e.target)) {
        closeInfoBox();
      }
    };

    window.addEventListener('click', handleWindowClick);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [infoBoxOpen]);
// console.log(props);
   markers = props.resp;

  // const polygonCoords = [
  //   { lat: 37.772, lng: -122.214 },
  //   { lat: 21.291, lng: -157.821 },
  //   { lat: -18.142, lng: 178.431 },
  //    { lat: 41.9444387, lng: -88.05484310000001 },

  // ];
  //console.log(markers); 


  // let polygonCoords = markers?.map(elem => (      
  //   {

  //     lat: parseFloat(elem?.lat),
  //     lng: parseFloat(elem?.lng)
  //   } 
  // ));
  const handleClick = (elem) => {
    window.localStorage.setItem('items', JSON.stringify(elem));
    Router.push(`/listing-details-v1?property=${elem.ListingId}`);
  };
 const convertToK = (price) => {
    if (price >= 1000) {
      const kValue = price / 1000;
      return kValue.toFixed(1) + 'K';
    }
    return price.toString();
  };
  let polygonCoords = markers?.filter((item) => item.lat !== null && item.lat !== undefined &&  item.lat !== 'NaN');
  let priceMarkers = polygonCoords?.map(item => { 
    let price = convertToK((item?.ListPrice == '0' || item?.ListPrice == null)?   parseFloat(item?.MRD_RP) :  parseFloat(item?.ListPrice) ||  parseFloat(item?.MRD_RP));   
    let jsonData = JSON.parse(item.jsonData);
    let place = `${jsonData?.StreetNumber || ''} ${jsonData?.StreetName || ''} ${jsonData?.StreetSuffix || ''} ${jsonData?.UnitNumber|| ''} && Unit# ${jsonData?.UnitNumber|| ''}, ${jsonData?.City}, ${jsonData?.StateOrProvince}, ${jsonData?.PostalCode}
    `;

    return {

      changeLat: parseFloat(item?.lat),
      changeLng: parseFloat(item?.lng),
      changePrice:price,
      ...item,
      jsonData,
      place
      //image:`${baseURL}${item?.MediaURL}`,
      
    } 
});
  polygonCoords = polygonCoords?.map(elem => (      
    {

      lat: parseFloat(elem?.lat),
      lng: parseFloat(elem?.lng)
    } 
  ));


  //polygonCoords = [
 //{lat:41.8979889559727,lng:-88.1413318815889},
   //  {lat: 41.96852691415558, lng: -88.04676801790984},
// {"south":41.8979889559727,"west":-88.1413318815889…rth":41.96852691415558,"east":-88.04676801790984}'}
// {lat: 41.945386, lng: -88.069287},

// {lat: 41.948997, lng: -88.0745349},

// {lat: 41.951934, lng: -88.106592},
// { lat: 40.7128, lng: -74.0060 },
//       { lat: 40.7128, lng: -73.9360 },
//       { lat: 40.6828, lng: -73.9360 },
//  ];


 // const search = searchParams.get('place');
  //const params = useParams();
  //console.log(searchParams);
  //const locations = router.query.lat ? JSON.parse(router.query.lat) : null ;
  // const defaultLocation = locations;


  const style = {
    width: "100%",
    height: "110vh",
   // overflowX: "hidden",
   // position:"inherit",
   // overflowY: "hidden"
   };   
    const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.googleMapsApiKey,
    mapTypeId: 'satellite'
  });
  
  const customMapStyles = [
    {
      featureType: 'all',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{ color: '#ff0000' }],
    },
  ];
  const onLoad = (map) => {
    // console.log(map)
//     const bounds = new google.maps.LatLngBounds(defaultLocation);
//  //  markers?.forEach(({ lat, lng }) => bounds.extend(setZoom));
//    // map.LatLng(45.4555729, 9.169236);
//    //bounds.extend(defaultLocation);
//    //map.zoom(6);
//     map.fitBounds(bounds);

  };
  const image = {
    url: '/assets/images/gmap-icon.svg',
    // This marker is 35 pixels wide by 35 pixels high.
    size: (window.google && window.google.maps) ? new window.google.maps.Size(60, 37): null,
    // // The origin for this image is (0, 0).
    // origin: new google.maps.Point(0, 0),
    // // The anchor for this image is the base of the flagpole at (0, 32).
     //anchor: new google.maps.Point(0, 35)
  };
  const handleMarkerClick = (elem) => {
    console.log(elem);
    // Handle the marker click event here
    //alert('Marker clicked!');
   setInfoBoxOpen(elem); // Open the InfoBox when the marker is clicked
    console.log(infoBoxOpen)

  };
  const handleInfoWindowClose = () => {
    console.log('elem');

    setInfoBoxOpen(null);
  };
  return (
    <div className="map">
      {!isLoaded ? (
        <h5>Loading...</h5>
      ) : (
        <GoogleMap   mapContainerStyle={style}  options={{ MapTypeId:'terrain'}} center={defaultLocation} zoom={13} onLoad={onLoad} >
          {/* <Polygon
          paths={polygonCoords}
          // options={{
          // strokeColor: '#FF0000', // Set the color of the boundary
          // strokeOpacity: 1.0, // Set the opacity
          // strokeWeight: 2 // Set the line width
          // }}
          options={{
            fillColor: 'blue', // Fill color of the polygon
            fillOpacity: 0.1, // Opacity of the fill color
            strokeColor: 'black', // Border color of the polygon
            strokeOpacity: 1, // Opacity of the border color
            strokeWeight: 1.2, // Thickness of the border
          }}
        /> */}
          {priceMarkers.map((elem,index) => (
            <Marker key={index} maxZoom={4} 
            onClick={() => handleMarkerClick(elem)}
            animation={window.google.maps.Animation.DROP} 
            icon= {image}
    label= {{
      text: elem?.changePrice || '0 K',
      color: 'white',
      fontSize: '9px',
      fontWeight: '12px',
    }}
            position={{ lat: elem.changeLat, lng: elem.changeLng }} title={elem?.changePrice}/>
            
          ))}
          {(infoBoxOpen != null ) && (
        <InfoBox
          position={{ lat: infoBoxOpen.lat, lng: infoBoxOpen.lng }}
          options={{ pixelOffset: new window.google.maps.Size(-68, 0) }}
         >
                  <div
        className={`col-7 list_map feature-list`}
        key={1}
      >
  
        <div
          className={`feat_property home7 style4 d-flex align-items-center}`}
          style={{ 'min-height': '25vh'}}
        >
          <div className="thumb" style={{ cursor: 'pointer' }} onClick={() => handleClick(infoBoxOpen.jsonData)}
>
          <Image
              width={343}
              height={220}
            className="img-whp w-100 h-100 cover"
            src={`${config.adminUrl}${infoBoxOpen.MediaURL}`}
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
                   {infoBoxOpen?.MlsStatus}
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
            <p className="text-thm" style={{'text-align': 'end', 'font-size': '20px'}}  onClick={handleInfoWindowClose}>  
                ×
             </p>
            
             <h3> <b style={{ cursor: 'pointer' }}
                className="fp_price"
                onClick={() => handleClick(infoBoxOpen.jsonData)}
              >
                ${ (infoBoxOpen?.ListPrice == '0' || infoBoxOpen?.ListPrice == null)?   parseFloat(infoBoxOpen?.MRD_RP).toLocaleString() :  parseFloat(infoBoxOpen?.ListPrice).toLocaleString() ||  parseFloat(infoBoxOpen?.MRD_RP).toLocaleString() }
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
               {infoBoxOpen?.place}
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
              {infoBoxOpen?.jsonData?.BedroomsTotal ? (
          <span>Beds: {infoBoxOpen?.jsonData?.BedroomsTotal}</span>
        ) : (
          <span>Beds: 0 </span>
        )} 
&nbsp;&nbsp;&nbsp;
{infoBoxOpen?.jsonData?.BathroomsFull ? (
          <span>Full Baths: {infoBoxOpen?.jsonData?.BathroomsFull}</span>
        ) : (
          <span>Full Baths: 0</span>
        )}
&nbsp;&nbsp;&nbsp;
{infoBoxOpen?.jsonData?.BathroomsHalf ? (
          <span>Half Baths: {infoBoxOpen?.jsonData?.BathroomsHalf}</span>
        ) : (
          <span>Half Baths: 0</span>
        )}
      <br></br>
{infoBoxOpen?.jsonData?.LivingArea ? (
          <span>Sq Ft: {infoBoxOpen?.jsonData?.LivingArea.toLocaleString()}</span>
        ) : (
          ''
        )}
              </li>
              </ul>
              <br></br>
              <br></br>
               <div className="fp_pdate float-left">List Office Name : {infoBoxOpen?.ListOfficeName}</div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
          {/* <div style={{ background: 'white', padding: '10px' }}>
            <div>${infoBoxOpen.price}</div>
          </div> */}
        </InfoBox>
      )}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
