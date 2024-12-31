import Pagination from "../../common/blog/Pagination";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar2 from "../../common/listing/FilterTopBar2";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing2 from "../../common/listing/SidebarListing2";
import PopupSignInUp from "../../common/PopupSignInUp";
import FeaturedItem from "./FeaturedItem";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import Map from './map';
import config from "../../../data/config";
import axios from "axios";
import Router,{ useRouter } from 'next/router'
import React,{ useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../../common/Spinner'; 
import { toast } from 'react-toastify';
import PricingRangeSlider from "../../../components/common/PricingRangeSlider";
const placesLibrary = ["places"];

const index = () => {
  const router = useRouter();
  const postalCode = router.query.postalCode || null;
  const address = router.query.adress || null; 
  const place = router.query.place || null; 
  const boundary = router.query.boundary || null;
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true); 
  const [allData, setAllData] = useState([]); 
  const state = router.query.state || null;
  const [listProperties, setProperties] = React.useState([]);
  const [addresses, setAddresses] = React.useState([]); // Array of batches
  const [results, setResults] = React.useState([]); // Array to store geocoding results
  const headers = { 'Authorization': config.token };
  const [getPropertiesType, setPropertiesType] = useState('all');
  const [getBathroom, setBathroom] = useState(null);
  const [getPlace, setPlace] = useState(null);
  const baseURL = config.adminUrl;
  const mrdStatus = ['Active','New','Price Change','Re-activated','Auction','Active (Private)','Contingent','Contingent (Private)','Temporarily No Showings'];
  const [getBedroom, setBedroom] = useState(null);
  const offerType = window.localStorage.getItem('offerType');
  const [searchResult, setSearchResult] = useState("Result: none");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.googleMapsApiKey,
    libraries: placesLibrary
  });

    useEffect(() => {
    // if(postalCode || address)
    // {
    fetchData();
    setPlace(place);
    // }
    }, [loading]);
  
     // Define a filter function

  const filterData = (filterText) => {
    if(filterText == '1')
    {
    const filteredData = listProperties.sort((a, b) => 
    {
    a = JSON.parse(a?.jsonData)?.ModificationTimestamp;        
    b = JSON.parse(b?.jsonData)?.ModificationTimestamp;        
    return new Date(b) - new Date(a);         
    });
    setProperties(filteredData);  
    return false;
    }
    if(filterText == '2')
    {
    const filteredData = listProperties.sort((a, b) => 
    {
    a = (a?.ListPrice == '0' || a?.ListPrice == null)?   parseFloat(a?.MRD_RP):  parseFloat(a?.ListPrice) ||  parseFloat(a?.MRD_RP);        
    b = (b?.ListPrice == '0' || b?.ListPrice == null)?   parseFloat(b?.MRD_RP) :  parseFloat(b?.ListPrice) ||  parseFloat(b?.MRD_RP);     
    return b - a;         
    });
    setProperties(filteredData);  
    return false;
    }
    if(filterText == '3')
    {
    const filteredData = listProperties.sort((a, b) => 
    {
    a = (a?.ListPrice == '0' || a?.ListPrice == null)?   parseFloat(a?.MRD_RP):  parseFloat(a?.ListPrice) ||  parseFloat(a?.MRD_RP);        
    b = (b?.ListPrice == '0' || b?.ListPrice == null)?   parseFloat(b?.MRD_RP) :  parseFloat(b?.ListPrice) ||  parseFloat(b?.MRD_RP);     
    return a - b;         
    });
    setProperties(filteredData);  
    return false;
    }
    if(filterText == '4')
    {
    const filteredData = listProperties.sort((a, b) => 
    {
    a = JSON.parse(a?.jsonData)?.LivingArea;        
    b = JSON.parse(b?.jsonData)?.LivingArea;        
    return b - a;         
    });
    setProperties(filteredData);  
    return false;
    }
    if(filterText == '5')
    {
    const filteredData = listProperties.sort((a, b) => 
    {
    a = JSON.parse(a?.jsonData)?.YearBuilt;        
    b = JSON.parse(b?.jsonData)?.YearBuilt;        
    return b - a;         
    });
    setProperties(filteredData);  
    return false;
    }
    if(filterText == '6')
    {
    const filteredData = listProperties.sort((a, b) => 
    {
    a = JSON.parse(a?.jsonData)?.YearBuilt;        
    b = JSON.parse(b?.jsonData)?.YearBuilt;        
    return a - b;         
    });
    setProperties(filteredData);  
    return false;
    }
    const filteredData = allData.filter(obj=>obj?.MRD_PROPERTY_OFFERED == filterText);  
    setProperties(filteredData);
  };

  const filterPopertyType = (filterText) => {
    if(filterText == 'all')
    {
    setProperties(allData);
    return false;
    }
    if(offerType == 'For Sale Only')
    {
    const filteredData = allData.filter(obj=>obj?.PropertyType  != 'For Rent Only');  
    setProperties(filteredData);
    return false; 
    }
    const filteredData = allData.filter(obj=>obj?.PropertyType == filterText);  
    setProperties(filteredData);
  };

  const filterDataStatus = (filterText) => {
  let allResult;
    if(offerType == 'For Rent Only')
    {
    allResult = allData.filter(obj=>obj?.MRD_PROPERTY_OFFERED != 'For Sale Only'  && !obj?.PropertyType?.includes('Sale') && !JSON.parse(obj?.jsonData)?.BuyerAgencyCompensationType?.includes('Sale'));      
    }
    if(offerType == 'For Sale Only')
    {
    allResult = allData.filter(obj=>obj?.MRD_PROPERTY_OFFERED != 'For Rent Only' && !obj?.PropertyType?.includes('Lease') && !JSON.parse(obj?.jsonData)?.BuyerAgencyCompensationType?.includes('Lease'));      
    }
    if(filterText == 'all')
    {
    setProperties(allResult);
    return false;
    }
    const filteredData = allResult.filter(obj=>obj?.MRD_ACTUALSTATUS == filterText);  
    setProperties(filteredData);
  };




  const filterDataShowFilter = (filterText) => {
    let allResult;
    if(offerType == 'For Rent Only')
    {
    allResult = allData.filter(obj=>obj?.MRD_PROPERTY_OFFERED != 'For Sale Only'  && !obj?.PropertyType?.includes('Sale') && !JSON.parse(obj?.jsonData)?.BuyerAgencyCompensationType?.includes('Sale'));      
    }
    if(offerType == 'For Sale Only')
    {
    allResult = allData.filter(obj=>obj?.MRD_PROPERTY_OFFERED != 'For Rent Only' && !obj?.PropertyType?.includes('Lease') && !JSON.parse(obj?.jsonData)?.BuyerAgencyCompensationType?.includes('Lease'));      
    }   
    setAllData(allResult);
      if(filterText?.priceMin && filterText?.priceMax)
      {
        console.log('priceMin','priceMax');
       
        const filteredData = allResult.filter((item) => {
          const itemPrice = (item?.ListPrice == '0' || item?.ListPrice == null)?   parseFloat(item?.MRD_RP) :  parseFloat(item?.ListPrice) ||  parseFloat(item?.MRD_RP);   
          return itemPrice >= filterText?.priceMin && itemPrice <= filterText?.priceMax;
        });
        setProperties(filteredData);

      }

      else if(filterText?.priceMin)
      {

        const filteredData = allResult.filter((item) => {
          const itemPrice = (item?.ListPrice == '0' || item?.ListPrice == null)?   parseFloat(item?.MRD_RP) :  parseFloat(item?.ListPrice) ||  parseFloat(item?.MRD_RP);   
          return itemPrice >= filterText?.priceMin;
        });
        setProperties(filteredData);

      }
      else if(filterText?.priceMax)
      {

        const filteredData = allResult.filter((item) => {
          const itemPrice = (item?.ListPrice == '0' || item?.ListPrice == null)?   parseFloat(item?.MRD_RP) :  parseFloat(item?.ListPrice) ||  parseFloat(item?.MRD_RP);   
          return itemPrice <= filterText?.priceMax;
        });
        setProperties(filteredData);

      }
      //area
      if(filterText?.areaMin == 0 && filterText?.areaMax == 0)
      {
       setProperties(allResult);
      }

      if(filterText?.areaMin && filterText?.areaMax)
      {
        const filteredData = allResult.filter(obj=>JSON.parse(obj?.jsonData)?.LivingArea >= filterText?.areaMin && JSON.parse(obj?.jsonData)?.LivingArea <= filterText?.areaMax);       
       setProperties(filteredData);
      }

      if(filterText?.areaMin)
    {
    const filteredData = allResult.filter(obj=>JSON.parse(obj?.jsonData)?.LivingArea >= filterText?.areaMin);      
    setProperties(filteredData);
    return false;
    }
    if(filterText?.areaMax)
    {
    const filteredData = allResult.filter(obj=>JSON.parse(obj?.jsonData)?.LivingArea <= filterText?.areaMax);      
    setProperties(filteredData);
    return false;
    }


      if(filterText?.keyword)
      {
        const filteredData = allResult.filter(obj=>obj?.location?.toLowerCase().includes(filterText?.keyword.toLowerCase()) || obj?.ListOfficeName?.toLowerCase().includes(filterText?.keyword?.toLowerCase()));      
        setProperties(filteredData);

      }
      if(filterText?.location)
      {
        const filteredData = allResult.filter(obj=>obj?.location?.toLowerCase().includes(filterText?.location.toLowerCase()) || obj?.PostalCode?.toLowerCase().includes(filterText?.location?.toLowerCase()));      
        setProperties(filteredData);

      }
      if(filterText?.PropertyType)
      {
        if(filterText?.PropertyType == 'all')
        {
        setProperties(allResult);
        return false;
        }
        allResult = allData.filter(obj=>obj?.PropertyType?.toLowerCase().includes(filterText?.PropertyType.toLowerCase()));      
        setProperties(allResult);

      }
      if(filterText?.BuiltYear)
      {
        if(filterText?.BuiltYear == 'all')
        {
        setProperties(allData);
        return false;
        }
        const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.YearBuilt >= filterText?.BuiltYear);      
        setProperties(filteredData);

      }

      if(filterText?.BuiltYear)
      {
        if(filterText?.BuiltYear == 'all')
        {
        setProperties(allData);
        return false;
        }
        const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.YearBuilt == filterText?.BuiltYear);      
        setProperties(filteredData);

      }
      if(filterText?.Bathroom)
      {
        if(filterText?.Bathroom == 'all')
        {
        setProperties(allData);
        return false;
        }
        const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.BathroomsTotalInteger >= filterText?.Bathroom);      
        setProperties(filteredData);

      }

      if(filterText?.Bedroom)
      {
        if(filterText?.Bedroom == 'all')
        {
        setProperties(allData);
        return false;
        }
        const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.BedroomsTotal >= filterText?.Bedroom);      
        setProperties(filteredData);

      }
      if(filterText?.Garage)
      {
        if(filterText?.Garage == 'all')
        {
        setProperties(allData);
        return false;
        }
        const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.GarageSpaces >= filterText?.Garage);      
        setProperties(filteredData);
      }    

      if(filterText?.Stories)
      {
      if(filterText?.Stories == 'all')
      {
      setProperties(allData);
      return false;
      }
      const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.MRD_TPE >= filterText?.Stories);      
      setProperties(filteredData);
      }    
      if(filterText?.feature)
      {
        const data = filterText?.feature?.map((ele) => {
            if (ele.isChecked) {
        if(ele.name == 'Air Conditioning')
        {
          const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.Cooling?.length > 0);      
          setProperties(filteredData);
        }
        if(ele.name == 'Forced air' || ele.name == 'Natural Gas')
        {
          const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.Heating?.includes(ele?.name));      
          setProperties(filteredData);
        } 
        
        if(ele.name == 'Waterfront')
        {
          const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.WaterfrontYN == true);      
          setProperties(filteredData);
        }
        if(ele.name == 'Fireplace')
        {
          const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.FireplacesTotal > 0);      
          setProperties(filteredData);
        }

        if(ele?.name == 'Elevator' || ele?.name == 'Pool'|| ele?.name == 'Gym' || ele?.name == 'Sauna' ||  ele?.name == 'Party Room')
        {
          const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.AssociationAmenities?.includes(ele?.id));      
          setProperties(filteredData);
        }
        if(ele?.name =='Spa or hot tubs')
        {
          const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.AssociationAmenities?.includes('Spa/Hot Tub'));      
          setProperties(filteredData);
        }
        if(ele?.name =='Dining')
        {
          const filteredData = allData.filter(obj=>JSON.parse(obj?.jsonData)?.InteriorFeatures?.includes('Separate Dining Room'));      
          setProperties(filteredData);
        }
        
        
        
       
    }
    if(ele.isChecked == false)
    {
      setProperties(allData);
    }  
  });
      }

      if(filterText?.reset == true)
      {
        setProperties(allResult);
      }
    
      
  
    };
    const formatNumber = (num) => {
      if (num >= 1000) {
        // If the number is 1000 or greater, format it with 'K'
        return (num / 1000).toFixed(1) + 'K';
      } else {
        // If the number is less than 1000, display it as is
        return num?.toString();
      }
    };
  const fetchData = async () => {
let allResult=[]; 
    try {
      let resp=[];
      const postalCodes = (postalCode !== 'undefined') ? postalCode : null;

      let getResult =   await axios.post(`${baseURL}dashboard/main/getMlsByPostal`,{ PostalCode: postalCodes, address: address || null, place, });    
      allResult= getResult?.data?.data;
    
          setAllData(allResult);
          if(offerType == 'For Rent Only')
          {
          allResult = allResult.filter(obj=>obj?.MRD_PROPERTY_OFFERED != 'For Sale Only'  && !obj?.PropertyType?.includes('Sale') && !JSON.parse(obj?.jsonData)?.BuyerAgencyCompensationType?.includes('Sale'));      
          }
          if(offerType == 'For Sale Only')
          {
          allResult = allResult.filter(obj=>obj?.MRD_PROPERTY_OFFERED != 'For Rent Only' && !obj?.PropertyType?.includes('Lease') && !JSON.parse(obj?.jsonData)?.BuyerAgencyCompensationType?.includes('Lease'));      
          }
         allResult = allResult.sort((a, b) => 
         {
          a = JSON.parse(a?.jsonData)?.ModificationTimestamp;        
          b = JSON.parse(b?.jsonData)?.ModificationTimestamp;        
         return new Date(b) - new Date(a);         
    });

        //  allResult = allResult.filter(obj=>mrdStatus.includes(obj.MRD_ACTUALSTATUS));
          // allResult
          // toast.success(`fetched ${allResult.length} records`, {
          //   position: 'top-right',
          //   autoClose: 3000,
          // });
          setProperties(allResult);
          setLoading(false);
        // let mapResp = allResult; 
        // const allAddress = mapResp.slice(0, 10).map(elem => (
        //   {
        //     res: `${elem?.StreetNumber} ${elem?.StreetName} ${elem?.StreetSuffix}, ${elem?.City}, ${elem?.StateOrProvince}, ${elem?.PostalCode}`,
        //     price: formatNumber(elem.ListPrice),

        //   } 
        // ));        
       // console.log(allAddress);

        const batchResults = [];
      //  if(allAddress){
      //   // Perform geocoding for addresses in the current batch
      //   for (const address of allAddress) {
      //     try {
      //       const response = await axios.get(
      //         `https://maps.googleapis.com/maps/api/geocode/json?address=${
      //           encodeURIComponent(address?.res)
      //         }&key=${config.googleMapsApiKey}`
      //       );
            

      //       if (response.data.results) {
      //         const data = response.data;
      //        // console.log(data);

      //         if (data.results && data.results.length > 0) {
      //           const { lat, lng } = data.results[0].geometry.location;
      //           batchResults.push({address, lat, lng });
      //         }
      //       } else {
      //         console.error(`Failed to geocode address: ${address}`);
      //       }
      //     } catch (error) {
      //       console.error(`Error geocoding address: ${address}`, error);
      //     }
      //   }

      //  setResults(batchResults);
      // }
      // Handle the response data here
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSelectChange = (event) => {
    const PropertyType = event.target.value;
    setPropertiesType(PropertyType);
    filterDataShowFilter(
    {
    PropertyType : PropertyType,     
    }
    );
  };
  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }


  const onPlaceChanged = async () => {
    if (searchResult != null) {
      const place = searchResult?.getPlace();
      const name = place.name;
      //setPlace(name);
      let boundary = place.geometry?.viewport?.toJSON();
      // boundary = boundary.toJSON();
      // console.log(`Formatted Address: ${boundary}`);
      //console.log('Location Boundary:', boundary.toJSON());
      let postalCode = place?.address_components?.find((component) => {
        return component.types.includes("postal_code");
      });
      let state = place?.address_components?.find((component) => {
        return component.types.includes("administrative_area_level_1");
      });
      const formattedAddress = place.formatted_address;
      console.log(formattedAddress);
      setPlace(formattedAddress);
      let allResult=[]; 
      //const pageData = ['1000'];
            Router.push(`/listing-map-v4?adress=${place.formatted_address}&place=${place.name}&lat=${JSON.stringify(place?.geometry?.location)}&postalCode=${postalCode?.long_name}&state=${state?.short_name}&boundary=${JSON.stringify(boundary)}`);

      
      // try {
      //   let result = await axios.get('/get')
      //   this.setState({ result: result })
      // } catch (error) {
      //   this.setState({ message: error.message })
      //}
          try {
            let resp=[];
            const postalCodes = (postalCode !== 'undefined') ? postalCode?.long_name : null;
      
            let getResult =   await axios.post(`${baseURL}dashboard/main/getMlsByPostal`,{ PostalCode: postalCodes, address: address || null, place:place.name, });    
            allResult= getResult?.data?.data;
          
                setAllData(allResult);
                if(offerType == 'For Rent Only')
                {
                allResult = allResult.filter(obj=>obj?.MRD_PROPERTY_OFFERED != 'For Sale Only'  && !obj?.PropertyType?.includes('Sale') && !JSON.parse(obj?.jsonData)?.BuyerAgencyCompensationType?.includes('Sale'));      
                }
                if(offerType == 'For Sale Only')
                {
                allResult = allResult.filter(obj=>obj?.MRD_PROPERTY_OFFERED != 'For Rent Only' && !obj?.PropertyType?.includes('Lease') && !JSON.parse(obj?.jsonData)?.BuyerAgencyCompensationType?.includes('Lease'));      
                }
               allResult = allResult.sort((a, b) => 
               {
                a = JSON.parse(a?.jsonData)?.ModificationTimestamp;        
                b = JSON.parse(b?.jsonData)?.ModificationTimestamp;        
               return new Date(b) - new Date(a);         
          });      
   
        setProperties(allResult);
        setLoading(false);
     
          } catch (error) {
            console.log(error);
            setLoading(false);
          }


    } else {
      alert("Please enter place");
      return false;

    }
  }
  const setSearchBedroom = (elem) => {
    const keyword = elem.target.value;
    setBedroom(keyword);
    filterDataShowFilter({Bedroom : keyword }
    );
  };
  const setSearchBathroom = (elem) => {
    const keyword = elem.target.value;
    setBathroom(keyword);
    filterDataShowFilter({Bathroom : keyword }
    );
  };
  const priceRange = (elem) => {
//  console.log(elem);
  // // setpriceRange(elem);
  filterDataShowFilter(
    {
      priceMin : elem?.min,
      priceMax :  elem?.max,
    }
  );
    };
  if (!isLoaded) {
    return <div> {loading &&<Spinner loading={loading} />}</div>;
  }
  if (!searchResult) {
    return <div><h6 style={{color: "red"}}>Please Enter Address, City, ZIP</h6></div>;
  }  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section
        id="feature-property"
        className="our-listing our-listing_map2 bgc-f7 pt0 pb0  mt85 md-mt0"
      >

<div className="grid_list_search_result1">
          <div className="row align-items-left">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <Autocomplete onPlaceChanged={onPlaceChanged}  onLoad={onLoad}>
            <input
              type="text"
              className="form-control"
              placeholder="Address, City, ZIP"
              onChange={(e) => setPlace(e.target.value)}
              value={getPlace}
            />
            </Autocomplete> 
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-2" style= {{'width': '176px'}}>
              <select
               onChange={handleSelectChange}
              className="selectpicker w100 show-tick form-select"
               value={getPropertiesType}
              >
                <option value="all">Property Type</option>
                <option value="Residential">Residential</option>
                <option value="BusinessOpportunity">Business Opportunity</option>
                <option value="CommercialLease">Commercial Lease</option>
                <option value="Residential">Residential</option>
                <option value="Land">Land</option>
                <option value="Commercial Sale">Commercial Sale</option>
                <option value="Farm">Farm</option>
                <option value="ResidentialIncome">Residential Income</option>
                <option value="Lease">Residential Lease</option>
              </select>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-2" style= {{'width': '176px'}}>
              <select
                onChange={setSearchBedroom}
                className="selectpicker w100 show-tick form-select"
               value={getBedroom}
              >
                <option value="all">Bedrooms</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
                <option value="6">6+</option>
              </select>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-2" style= {{'width': '176px'}}>
              <select
                onChange={setSearchBathroom}
                className="selectpicker w100 show-tick form-select"
                value={getBathroom}
              > 
                <option value="all">Bathrooms</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
                <option value="6">6+</option>
              </select>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-2" style= {{'width': '180px'}}>
              <div
                id="prncgs2"
                className="price-range btn dd_btn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >            
                 <span>Price Range</span>
                <label htmlFor="prncgs2">
                  <span className="fa fa-angle-down"></span>
                </label>
              </div>
              <div className="small_dropdown2">

                <div className="dd_content2 style2 dropdown-menu">

                  <div className="pricing_acontent ">

                    <PricingRangeSlider priceRange ={priceRange}/>
                  </div>
                </div>
              </div>
            </div>
           
          

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-1">
            <div className="sidebar_switch style2 text-right dn-991 visible-filter filter-let-top">
                <ShowFilter />
              </div>

            </div>

         
          </div>
        </div>
                 



        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sidebar_switch mobile_style dn db-991 mt30 mb0">
                {" "}
                <ShowFilter />
              </div>
              {/* sidebar switch */}

              <div
                className="offcanvas offcanvas-end offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Advanced Search</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End .offcanvas-heade */}

                <div className="offcanvas-body">
                  <SidebarListing2 data={listProperties} filterData={filterPopertyType} filterDataShowFilter={filterDataShowFilter}/>
                </div>
              </div>
              {/* End mobile sidebar listing  */}
            </div>
            {/* End .col */}
            <div className="col-lg-12 p20"></div>
            {/* <div className="col-lg-12 p20"> dropdown section </div> */}
            {/* <div className="col-xxl-7 col-xl-6  p0 position-relative"></div>  */}
            <div className="col-xxl-6 col-xl-6  p0 position-relative">
              <div className="sidebar_switch style2 text-right dn-991 visible-filter filter-let-top">
                {/* <ShowFilter /> */}
              </div>
              {/* filter switch */}
              <div className="col-md-12">
                  <div className="grid_list_search_result ">
                    <div className="row align-items-center">
                      <FilterTopBar2 data={allData} filterData={filterData} filterDataStatus={filterDataStatus} />
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row custom-scroll">
                  {loading &&<Spinner loading={loading} />}

                  {!loading && <FeaturedItem items={listProperties}/>}
                  </div>
                  {/* End .row */}

                  {/* <div className="row">
                    <div className="col-lg-12 mt20">
                      <div className="mbp_pagination">
                        <Pagination />
                      </div>
                    </div>
                  </div> */}
                  {/* End .row */}
                </div>
            </div>
            {/* End .col */}

            <div className="col-xxl-6 col-xl-6 ">
              <div className="half_map_area_content">
                {/* <div className="listing_list_style listing-map-style m0 mb50">
                  <GridListButton />
                </div> */}
                {/* GridListButton */}


                <div className="home_two_map style2 half_map_area">
                <div className="gmap_canvas map-canvas half_style">
                <Map resp={listProperties} boundary={boundary}/>         
               </div>
              </div>

       
                {/* End  page conent */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
