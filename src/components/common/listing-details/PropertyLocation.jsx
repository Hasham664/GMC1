import Image from "next/image";
import config from "../../../data/config";

const PropertyLocation = (props) => {
  return (
    <>
      <div className="thumb">
        <div className="h400" id="map-canvas">
          <div className="gmap_canvas ">
            <iframe
              title="map"
              className="gmap_iframe"
              src={`https://www.google.com/maps/embed/v1/place?key=${config.googleMapsApiKey}
    &q=${props.place}&zoom=9`}
            
            ></iframe>
          </div>
        </div>
        <div className="overlay_icon">
          <a href="#">
            <Image
              width={40}
              height={45}
              className="map_img_icon"
              src="/assets/images/header-logo.png"
              alt="header-logo.png"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default PropertyLocation;
