
/* global google */
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import config from "../../../data/config";
import { useRouter } from 'next/router'

// import "./App.css";

const Map = () => {
  const router = useRouter();

 // console.log(router.query); 
 // const search = searchParams.get('place');
  //const params = useParams();
  //console.log(searchParams);
  const locations = router.query.lat ? JSON.parse(router.query.lat) : null ;
  const defaultLocation = locations;


  const style = {
    width: "671px",
    height: "671px",
   // overflowX: "hidden",
   // position:"inherit",
   // overflowY: "hidden"
   };   
    const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.googleMapsApiKey,
  });
  
  const markers = [defaultLocation
   // { lat: 18.5204, lng: 73.8567 },
    // { lat: 18.5314, lng: 73.8446 },
    // { lat: 18.5642, lng: 73.7769 },
  ];

  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds(defaultLocation);
 //  markers?.forEach(({ lat, lng }) => bounds.extend(setZoom));
   // map.LatLng(45.4555729, 9.169236);
   //bounds.extend(defaultLocation);
   map.setZoom(12);
    map.fitBounds(bounds);
  };

  return (
    <div className="map">
      {!isLoaded ? (
        <h5>Loading...</h5>
      ) : (
        <GoogleMap  mapContainerStyle={style} zoom={12} onLoad={onLoad} >
          {markers.map(({ lat, lng }) => (
            <Marker key="1" position={{ lat, lng }} />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
