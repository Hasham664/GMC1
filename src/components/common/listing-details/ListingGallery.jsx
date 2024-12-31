import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import config from "../../../data/config";

const ListingGallery = (props) => {
  const handleImgError = e => {
    e.target.src = "/assets/images/no-image.jpg"
  }
//   JSON.parse(obj?.jsonData)
// const width = props.item?.jsonData
  return (
    <>
      <Gallery>
          <div key={props.item?.ListingId}>
            <div className="row mb30">
              <div className="col-lg-7 col-xl-8">
                <div className="single_property_title mt30-767">
                  <h2>{props.item?.PropertyType}</h2>
                  <p>
                  {props.item?.StreetNumber} {props.item?.StreetDirPrefix} {props.item?.StreetName} {props.item?.StreetSuffix}, {props.item?.City}, {props.item?.StateOrProvince}, {props.item?.PostalCode} </p>
                   
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    <h2>
                    ${(props.item?.hasOwnProperty('ListPrice') && props.item?.ListPrice != 0) ?  props.item?.ListPrice?.toLocaleString() : props.item?.MRD_RP?.toLocaleString() || 0 }
                      {/* <small>/mo</small> */}
                    </h2>
                  </div>

                  {/* <div className="spss style2 mt20 text-end tal-400">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-transfer-1"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-heart"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-share"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-printer"></span>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  {/* End activity and social sharing */}
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                      <Item
                        original={`${config.adminUrl}assets/uploads/mlsgrid/images/${props.item?.Media[0]?.MediaURL?.split("/").pop()}`}
                        thumbnail={`${config.adminUrl}assets/uploads/mlsgrid/images/${props.item?.Media[0]?.MediaURL?.split("/").pop()}`}
                        width={752}
                        height={470}
                      >
                        {({ ref, open }) => (
                          <div role="button" ref={ref} onClick={open}>
                            <Image     
                              ref={ref}                            
                              onClick={open}                       
                              width={752}
                              height={480}
                              className="img-fluid w100 lds-1 cover"
                              src={`${config.adminUrl}assets/uploads/mlsgrid/images/${props.item?.Media[0]?.MediaURL?.split("/").pop()}`}
                              alt="Image"
                              onError={handleImgError}
                            />
                            
                          </div>
                        )}
                      </Item>
                      
                    </div>
                    {/* <small><b>{ props.item?.MlsStatus }</b></small>  */}

                  </div>
                </div>
              </div>
              {/* End .col-sm-7 .col-lg-8 */}

              <div className="col-sm-5 col-lg-4">
              <span  className="badge">{ props.item?.PhotosCount }</span> 
                <div className="row spls_full_gallery">
                  {props.item?.Media?.map((val, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item   
                         id={val?.MediaKey}                     
                          original={`${config.adminUrl}assets/uploads/mlsgrid/images/${val?.MediaURL?.split("/").pop()}`}
                          thumbnail={`${config.adminUrl}assets/uploads/mlsgrid/images/${val?.MediaURL?.split("/").pop()}`}
                          key={val?.MediaKey}
                          // width={1080}
                          // height={1080}
                          onError={handleImgError}
                          alt="Image"
                        >
                          {({ ref, open }) => (
                            <div role="button">
                              <Image  
                              ref={ref}                            
                              width={1080}
                              height={1080}
                             onClick={open}
                                key={val?.MediaKey}
                                className="img-fluid w100  cover"
                                src={`${config.adminUrl}assets/uploads/mlsgrid/images/${val?.MediaURL?.split("/").pop()}`}
                                onError={handleImgError}
                                alt="Image"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End  col-sm-5 col-lg-4 */}
            </div>
            {/* End .row */}
          </div>
      </Gallery>
    </>
  );
};

export default ListingGallery;
