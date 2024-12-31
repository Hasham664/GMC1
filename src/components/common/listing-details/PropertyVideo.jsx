import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import config from "../../../data/config";

const PropertyVideo = ({ item }) => {
  let channel = 'custom';
  const [isOpen, setOpen] = useState(false);
  const isYouTubeUrl = (url) => {
    // Regular expression pattern for YouTube video URLs
    const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
  
    // Test if the URL matches the pattern
    return youtubeUrlPattern.test(url);
  };
  const isYouTube = isYouTubeUrl(item?.VirtualTourURLUnbranded);
  if(isYouTube)
  {
    channel= "youtube";
  }
   const handleImgError = e => {
    e.target.src = "/assets/images/no-image.jpg"
  }
  return (
    <>
      <ModalVideo
        channel= {channel}
        url= {item?.VirtualTourURLUnbranded}
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {/* <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
          >
            Property video
          </a>
        </li> */}
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#listing"
            role="tab"
          >
            Virtual Tour
          </a>
        </li>
      </ul>
      {/* End .nav-tabs */}

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Image
                width={692}
                height={390}
                className="pro_img  w100 w-100 cover"
             src={`${config.adminUrl}assets/uploads/mlsgrid/images/${item?.Media[0]?.MediaURL?.split("/").pop()}`}
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={() => setOpen(true)}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="listing"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <Image
                width={692}
                height={390}
                className="pro_img  w100 w-100 cover"
                src={`${config.adminUrl}assets/uploads/mlsgrid/images/${item?.Media[0]?.MediaURL?.split("/").pop()}`}

               // src="/assets/images/background/7.jpg"
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={() => setOpen(true)}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .tab-conten */}
    </>
  );
};

export default PropertyVideo;
