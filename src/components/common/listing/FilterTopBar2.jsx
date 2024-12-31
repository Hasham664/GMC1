import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";

const FilterTopBar2 = ({ data, filterData, filterDataStatus }) => {
  const offerType = window.localStorage.getItem('offerType');
  const { length } = useSelector((state) => state.properties);
  const { statusType, featured } = useSelector((state) => state.filter);
  const [getStatus, setStatus] = useState(statusType);
  const [getFeatured, setFeatured] = useState(offerType);

  const mrdStatus = ['Active','New','Price Change','Re-activated','Auction','Active (Private)','Contingent','Contingent (Private)','Temporarily No Showings'];

  const handleSelectChange = (event) => {
    const featureType = event.target.value;
    setFeatured(featureType);
    filterData(featureType);
    window.localStorage.setItem('offerType',featureType);
  };

  const handleSelectChangeStatus = (event) => {
    const statusType = event.target.value;
    setStatus(statusType);
    filterDataStatus(statusType)
  };
  

  const dispatch = useDispatch();

  // add status
  useEffect(() => {
    dispatch(addStatusType(getStatus));
  }, [dispatch, getStatus]);

  // add featured
  useEffect(() => {
    dispatch(addFeatured(getFeatured));
  }, [dispatch, getFeatured]);

  // clear filter
  useEffect(() => {
    statusType === "" && setStatus("");
    featured === "" && setFeatured("");
  }, [statusType, setStatus, featured, setFeatured]);

  return (
    <>
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <div className="left_area tac-xsd">
          { data?.length > 0 && 
          <p>
            <span className={length === 0 ? "text-danger" : undefined}>
              {/* {length}{" "} */}
            </span>
            {length !== 0 ? (
              `Showing ${length} Properties`
            ) : (
              <span className="text-danger">Not found results</span>
            )}
          </p>
          }
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-9">
        <div className="right_area text-end tac-xsd">
          <ul>
            <li className="list-inline-item">
              <span className="stts">Status:</span>
              <select
                className="selectpicker show-tick select-box"
                onChange={handleSelectChangeStatus}
                value={getStatus}
              >
              <option value="all">All Status</option>
              {mrdStatus?.map((mrdStatus, index) => (
              <option key={index} value={mrdStatus}>
              {mrdStatus}
              </option>
          ))}
              </select>
            </li>
            <li className="list-inline-item">
              <span className="shrtby">Sort by:</span>
              <select
                className="selectpicker show-tick select-box"
                onChange={handleSelectChange}
                value={offerType}              >
                <option value="1">Newest</option>
                <option value="2">Highest Price </option>
                <option value="3">Lowest Price</option>
                <option value="4">Largest SqFt</option>
                <option value="5">Year Built (Newest)</option>
                <option value="6">Year Built (Oldest)</option>                
              </select>
            </li>
          </ul>
      </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default FilterTopBar2;
