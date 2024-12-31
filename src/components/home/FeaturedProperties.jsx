import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import config from "../../data/config";
import Image from "next/image";
import axios from "axios";
import React from "react";
import Router from "next/router";
import Spinner from '../../components/common/Spinner'; 

const FeaturedProperties = () => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const [loading, setLoading] = React.useState(true);
  const [listProperties, setProperties] = React.useState([]);


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { 'Authorization': config.token };
        const baseURL = config.adminUrl;
        const mrdStatus = ['Active','New',];
        await axios.get(`${baseURL}dashboard/main/getMlsFeatured`).then((response) => {
        //  console.log(response?.data?.data);
          let resp = response?.data?.data;
          //console.log(resp);
            // resp = resp.filter(obj =>{
            //   //  let mData = JSON.parse(obj?.jsonData);
            //   //   console.log(mData)
            // if(mrdStatus.includes(obj.MRD_ACTUALSTATUS) &&  obj?.MediaURL)
            // {
            // return true;
            // }
            // });
          resp = resp.filter(obj=>obj?.MRD_PROPERTY_OFFERED !== 'For Rent Only' && obj?.ListPrice != 0 );   
          resp = resp.slice(0, 6);
          resp = resp.sort((a, b) => 
          {
           a = JSON.parse(a?.jsonData)?.ModificationTimestamp;        
           b = JSON.parse(b?.jsonData)?.ModificationTimestamp;        
          return new Date(b) - new Date(a);         
     });
         // resp = resp.filter(obj=> obj.hasOwnProperty('ListPrice'));
          //resp = resp.sort((a, b) => new Date(JSON.parse(b?.jsonData?.ModificationTimestamp)) - new Date(JSON.parse(a?.jsonData?.ModificationTimestamp)));
  
          setProperties(resp);
         setLoading(false); 
  
        });
        // Handle the response data here
      } catch (error) {
       setLoading(false);
        // Handle errors here
      }
    };
    fetchData();   
  }, []);

  const handleImgError = e => {
    e.target.src = "/assets/images/no-image.jpg"
  }
  const priceChange = (elem) => {
    let price = parseFloat(elem);
    return price.toLocaleString() || 0;
  }
  const handleClick = (elem) => {

    window.localStorage.setItem('items', JSON.stringify(elem));
    Router.push(`/listing-details-v1?property=${elem.ListingId}`);
  };
  let content = listProperties?.map((item) => {
    let jsonData = JSON.parse(item.jsonData);
    return(
    <div className="item" key={item.ListingId}>
      <div className="feat_property">
        <div className="thumb" style={{ cursor: 'pointer' }} onClick={() => handleClick(jsonData)}>

           <Image
            width={343}
            height={220}
            className="img-whp w-100 h-100 cover"
            src={`${config.adminUrl}${item.MediaURL}`}
            onError={handleImgError}
            alt="Image"
          />
          <div className="thmb_cntnt">
          <ul className="tag mb0">
          <li className="list-inline-item" key={item.ListingId && item.StandardStatus}>
          {item.StandardStatus}          
          </li>     
          {/* <li className="list-inline-item" key={item.ListingId && item.MRD_PROPERTY_OFFERED || 'Sale'}>
          {item.MRD_PROPERTY_OFFERED || 'Sale'  }          
          </li> */}
          
          </ul>
            {/* <ul className="tag mb0">
              {item.saleTag.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">{val}</a>
                </li>
              ))}
            </ul> */}
            {/* End .tag */}

            {/* <ul className="icon mb0">
             
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li>
            </ul> */}
            {/* End .icon */}

           
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
           <h3> 
           <b style={{ cursor: 'pointer' }} onClick={() => handleClick(jsonData)}> ${priceChange(item?.ListPrice || item?.MRD_RP || 0)   }</b>           
              </h3>
            <h4
             >{jsonData?.title}
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {jsonData?.StreetNumber} {jsonData?.StreetDirPrefix} {jsonData?.StreetName} {jsonData?.StreetSuffix} {jsonData?.UnitNumber && <span>Unit# {jsonData?.UnitNumber}</span>}, {jsonData?.City}, {jsonData?.StateOrProvince}, {jsonData?.PostalCode}
            </p>

            {/* <ul className="prop_details mb0">
              {item.itemDetails.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">
                    {val.name}: {val.number}
                  </a>
                </li>
              ))}
            </ul> */}
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
          <span>Bedrooms Total : {jsonData?.BedroomsTotal}</span>
        ) : (
          jsonData?.PropertyType
        )} 
&nbsp;&nbsp;&nbsp;
{jsonData?.BathroomsFull ? (
          <span>Bathrooms Full : {jsonData?.BathroomsFull}</span>
        ) : (
          ''
        )}
&nbsp;
{jsonData?.MRD_LSZ ? (
          <span>{jsonData?.MRD_LSZ}(Lot)</span>
        ) : (
          ''
        )}
              </li>
            </ul>
            <div className="fp_pdate float-end">Listing by  {item.ListOfficeName}</div>
          </div>
          {/* End .fp_footer */}
        </div>
        {/* End .details */}
      </div>
    </div>
  )});

  return (
    <>
    {loading &&<Spinner loading={loading} />}

      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
