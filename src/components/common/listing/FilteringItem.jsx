import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  addYearBuilt,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const FilteringItem = ({data, filterData , filterDataShowFilter }) => {
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const minInputAreaRef = useRef(null);
  const maxInputAreaRef = useRef(null);

  // input state
  const [getKeyword, setKeyword] = useState(null);
  const [getLocation, setLocation] = useState(null);
  const [getStatus, setStatus] = useState(status);
  const [getPropertiesType, setPropertiesType] = useState('all');
  const [getBathroom, setBathroom] = useState(null);
  const [getBedroom, setBedroom] = useState(null);
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(null);
  const [getAreaMax, setAreaMax] = useState(area.max);

  const [getArea, setArea] = useState({
    min:'',max:''
  });

  const [getpriceRange, setpriceRange] = useState(null);
  const [getStories, setStories] = useState(null);

  const [showFilterData, setshowFilterData] = useState(null);

  const [getKeywords, setKeywords] = useState('');

  
  // advanced state
  const [getAdvanced, setAdvanced] = useState([
    { id: uuidv4(), name: "Air Conditioning" },
    { id: uuidv4(), name: "Forced Air" },    
    { id: uuidv4(), name: "Natural Gas" },
    { id: uuidv4(), name: "Waterfront" },
    { id: uuidv4(), name: "Fireplace" },
    { id:'Elevator(s)', name: "Elevator" },
    { id:'Pool', name: "Pool" },
    { id: uuidv4(), name: "Spa or hot tubs" },
    { id: 'Exercise Room', name: "Gym" },
    { id: uuidv4(), name: "Dining" },
    { id: 'Sauna', name: "Sauna" },
    { id: 'Party Room', name: "Party Room" },
    // { id: uuidv4(), name: "Washer" },
    // { id: uuidv4(), name: "Laundry" },
    // { id: uuidv4(), name: "Outdoor Shower" },
    // { id: uuidv4(), name: "Window Coverings" },
  ]);


  const handleSelectChange = (event) => {
    const PropertyType = event.target.value;
    setPropertiesType(PropertyType);
    filterDataShowFilter(
    {
    PropertyType : PropertyType,     
    }
    );
  };
  const dispath = useDispatch();

  const Router = useRouter();

  // keyword
  useEffect(() => {
    dispath(addKeyword(getKeyword));
  }, [dispath, getKeyword]);

  // location
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, getLocation]);

  // status
  useEffect(() => {
    dispath(addStatus(getStatus));
  }, [dispath, getStatus]);

  // properties type
  // useEffect(() => {
  //   dispath(addPropertyType(getPropertiesType));
  // }, [dispath, getPropertiesType]);

  // bathroom
  useEffect(() => {
    dispath(addBathrooms(getBathroom));
  }, [dispath, getBathroom]);

  // bedroom
  useEffect(() => {
    dispath(addBedrooms(getBedroom));
  }, [dispath, getBedroom]);

  // garages
  useEffect(() => {
    dispath(addGarages(getGarages));
  }, [dispath, getGarages]);

  // built years
  useEffect(() => {
    dispath(addYearBuilt(getBuiltYear));
  }, [dispath, getBuiltYear]);

  // area min
  // useEffect(() => {
  //   dispath(dispath(addAreaMin(getAreaMin)));
  // }, [dispath, getAreaMin]);

  // // area max
  // useEffect(() => {
  //   dispath(dispath(addAreaMax(getAreaMax)));
  // }, [dispath, getAreaMax]);

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
    filterDataShowFilter(
      {
      'reset' : true,     
      });
  };
  const priceRange = (elem) => {
  //  console.log(elem.value);
// setpriceRange(elem);
filterDataShowFilter(
  {
    priceMin : elem?.value?.min,
    priceMax :  elem?.value?.max,
  }
);
  };

    const setSearch = (elem) => {
      const keyword = elem.target.value;
      //console.log("keyword",keyword);
      setKeywords(keyword);
      filterDataShowFilter(

        {
          keyword : keyword.trim(),
          // location : getLocation,
          // PropertiesType : getPropertiesType,
          // Bathroom : getBathroom,
          // Bathroom : getBathroom,
          // garages : getGarages,
          // BuiltYear : getBuiltYear,
          // priceMin : getAreaMin,
          // priceMax : getAreaMax,
          // priceRange : getpriceRange,
          // advanced : getAdvanced
    
        }
      );
  };

  const handleAreaChange = () => {
    const minValue = minInputAreaRef?.current?.value;
    const maxValue = maxInputAreaRef?.current?.value;
    setArea({ max : maxValue,  min : minValue  });
    filterDataShowFilter({ areaMax : maxValue || 0 , areaMin : minValue || 0 });

  };
  
  const setSearchlocation = (elem) => {
    const keyword = elem.target.value;
    //console.log("keyword",keyword);
    setLocation(keyword);
    filterDataShowFilter(

      {
        //keyword : keyword.trim(),
        location : keyword,
        // PropertiesType : getPropertiesType,
        // Bathroom : getBathroom,
        // Bathroom : getBathroom,
        // garages : getGarages,
        // BuiltYear : getBuiltYear,
        // priceMin : getAreaMin,
        // priceMax : getAreaMax,
        // priceRange : getpriceRange,
        // advanced : getAdvanced
  
      }
    );
};

const setSearchYear = (elem) => {
  const keyword = elem.target.value;
  setBuiltYear(keyword);
  filterDataShowFilter({BuiltYear : keyword }
  );
};
const setSearchBathroom = (elem) => {
  const keyword = elem.target.value;
  setBathroom(keyword);
  filterDataShowFilter({Bathroom : keyword }
  );
};

const setSearchBedroom = (elem) => {
  const keyword = elem.target.value;
  setBedroom(keyword);
  filterDataShowFilter({Bedroom : keyword }
  );
};
const setSearchGarages = (elem) => {
  const keyword = elem.target.value;
  setGarages(keyword);
  filterDataShowFilter({Garage : keyword }
  );
};

const setSearchStories = (elem) => {
  const keyword = elem.target.value;
  setStories(keyword);
  filterDataShowFilter({Stories : keyword }
  );
};





  const clearAllFilters = () => {
    setKeyword("");
    setLocation("");
    setStatus("");
    setPropertiesType("");
    dispath(addPrice({ min: 10, max: 200000 }));
    setBathroom("");
    setBedroom("");
    setBedroom("");
    setGarages("");
    setBuiltYear("");
    //setAreaMin("");
    setAreaMax("");
    dispath(resetAmenities());
    dispath(addStatusType(""));
    dispath(addFeatured(""));
    clearAdvanced();
  };

  // clear advanced
  const clearAdvanced = () => {
    const changed = getAdvanced.map((item) => {
      item.isChecked = false;
      return item;
    });
    setAdvanced(changed);
  };

  // add advanced
  const advancedHandler = (id) => {
    const data = getAdvanced.map((feature) => {
      if (feature.id === id) {
        if (feature.isChecked) {
          feature.isChecked = false;
        } else {
          feature.isChecked = true;
        }
      }
      return feature;
    });
    filterDataShowFilter({feature : data });
    setAdvanced(data);
  };
  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index);

  

  return (
    <ul className="sasw_list mb0" key="filter">
       <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="keyword"
            onChange={setSearch}
            value={getKeywords}
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li> 
      {/* End li */}

      {/* <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Location"            
            value={getLocation}
            onChange={setSearchlocation}
          />
          <label htmlFor="exampleInputEmail">
            <span className="flaticon-maps-and-flags"></span>
          </label>
        </div>
      </li> */}
      {/* End li */}
{/* 
      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getStatus}
            >
              <option value="">LISTING STATUS</option>
              <option value="apartment">Pending</option>
              <option value="ActiveUnderContract">Under Contract</option>
            </select>
          </div>
        </div>
      </li> */}
      {/* End li */}

      {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
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
        </div>
      </li> */}
      {/* End li */}

      {/* <li>
        <div className="small_dropdown2">
          <div
            id="prncgs2"
            className="btn dd_btn"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <span>Price Range</span>
            <label htmlFor="prncgs2">
              <span className="fa fa-angle-down"></span>
            </label>
          </div>
          <div className="dd_content2 style2 dropdown-menu">
            
            <div className="pricing_acontent ">
              
              <PricingRangeSlider priceRange ={priceRange}/> 
            </div>
          </div>
        </div>
      </li> */}
      {/* End li */}

      {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={setSearchBathroom}
              className="selectpicker w100 show-tick form-select"
              value={getBathroom}
            >
              <option value="all">Bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li> */}
      {/* End li */}

      {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={setSearchBedroom}
              className="selectpicker w100 show-tick form-select"
              value={getBedroom}
            >
              <option value="all">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li> */}
      {/* End li */}

      <li key="Garages">
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
               onChange={setSearchGarages}
              className="selectpicker w100 show-tick form-select"
              value={getGarages}
            >       
              <option value="all">Garages</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>
      </li>


      {/* <li key="Stories">
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
               onChange={setSearchStories}
              className="selectpicker w100 show-tick form-select"
              value={getStories}
            >       
              <option value="all">Stories</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="10">10+</option>
              <option value="15">15+</option>
              <option value="20">20+</option>
            </select>
          </div>
        </div>
      </li> */}
      
      {/* End li */}

      <li  key="year">
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={setSearchYear}
              className="selectpicker w100 show-tick form-select"
              value={getBuiltYear}
            >
              <option value="all">Year built</option>
              {years.map((year) => (
              <option value={year}>{year}+</option>
              ))}      
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li  key="AreaMin" className="min_area list-inline-item">
        <div className="form-group mb-4">
          <input
            type="number"
            className="form-control"
            id="exampleInputName2"
            placeholder="Min Area"
            value={getArea.min}
            defaultValue='0' 
            ref={minInputAreaRef} 
            name="areaMin"
            onChange={handleAreaChange}
          />
        </div>
      </li>
      {/* End li */}

      <li key="AreaMax" className="max_area list-inline-item">
        <div className="form-group mb-4">
          <input
            type="number"
            className="form-control"
            id="exampleInputName3"
            placeholder="Max Area"
            value={getArea.max}
            defaultValue='0' 
            onChange={handleAreaChange}
            ref={maxInputAreaRef} 
            name="areaMax"
          />
        </div>
      </li>
      {/* End li */}

      <li key="adavanceFeature">
        <div id="accordion" className="panel-group">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#panelBodyRating"
                  className="accordion-toggle link"
                  data-bs-toggle="collapse"
                  data-bs-parent="#accordion"
                >
                  <i className="flaticon-more"></i> Home Features
                </a>
              </h4>
            </div>
            {/* End .panel-heading */}

            <div id="panelBodyRating" className="panel-collapse collapse">
              <div className="panel-body row">
                <div className="col-lg-12">
                  <ul className="ui_kit_checkbox selectable-list fn-400">
                    {getAdvanced?.map((feature) => (
                      <li key={feature.id}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                            value={feature.name}
                            checked={feature.isChecked || false}
                            onChange={(e) =>
                              dispath(addAmenities(e.target.value))
                            }
                            onClick={() => advancedHandler(feature.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* End li */}

      {/* <li key="adavanceFeaturesLot">
        <div id="accordionlot" className="panel-group">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#lotFeatures"
                  className="accordion-toggle link"
                  data-bs-toggle="collapse"
                  data-bs-parent="#accordionlot"
                >
                  <i className="flaticon-more"></i> Lot Features
                </a>
              </h4>
            </div> */}
            {/* End .panel-heading */}
{/* 
            <div id="lotFeatures" className="panel-collapse collapse">
              <div className="panel-body row">
                <div className="col-lg-12">
                  <ul className="ui_kit_checkbox selectable-list fn-400">
                    {getAdvanced?.map((feature) => (
                      <li key={feature.id}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                            value={feature.name}
                            checked={feature.isChecked || false}
                            onChange={(e) =>
                              dispath(addAmenities(e.target.value))
                            }
                            onClick={() => advancedHandler(feature.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li> */}
      {/* End li */}

      {/* <li key="adavanceFeaturesCommunity">
        <div id="accordionlot" className="panel-group">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#CommunityFeatures"
                  className="accordion-toggle link"
                  data-bs-toggle="collapse"
                  data-bs-parent="#accordionCommunity"
                >
                  <i className="flaticon-more"></i> Community Features
                </a>
              </h4>
            </div> */}
            {/* End .panel-heading */}

            {/* <div id="CommunityFeatures" className="panel-collapse collapse">
              <div className="panel-body row">
                <div className="col-lg-12">
                  <ul className="ui_kit_checkbox selectable-list fn-400">
                    {getAdvanced?.map((feature) => (
                      <li key={feature.id}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                            value={feature.name}
                            checked={feature.isChecked || false}
                            onChange={(e) =>
                              dispath(addAmenities(e.target.value))
                            }
                            onClick={() => advancedHandler(feature.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li> */}
      {/* End li */}

      <li>
        <div className="search_option_button">
          <button
            onClick={clearHandler}
            type="button"
            className="btn btn-block w-20"
          >
            Clear Filters
          </button>

          <button
          style={{'float':'right'}}
          data-bs-dismiss="offcanvas"
            type="button"
            className="btn btn-block btn-thm w-20"
          >
            View {data?.length} Properties
          </button>
        </div>
      </li>

      
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
