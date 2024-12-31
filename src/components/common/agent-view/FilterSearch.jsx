import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addCity,
  addListen,
  addName,
} from "../../../features/agent/agentSlice";

const FilterSearch = ({ filterDataPartners , languagesList , statesList, agentType}) => {
  const { name, category, city } = useSelector((state) => state.agent) || {};

  const [getName, setName] = useState(name);
  const [getCategory, setCategory] = useState(category);
  const [getCity, setCity] = useState(city);
  const [isSelected, setSelected] = useState(false);

  const dispatch = useDispatch();

  // name
  useEffect(() => {
    dispatch(addName(getName));
  }, [dispatch, getName]);

  // category
  useEffect(() => {
    dispatch(addCategory(getCategory));
  }, [dispatch, getCategory]);

  // city
  useEffect(() => {
    dispatch(addCity(getCity));
  }, [dispatch, getCity]);

  const clearHandler = () => {
    setName("");
    setCategory("");
    setCity("");
    dispatch(addListen(""));
  };
  const setSearch = (elem) => {
    const keyword = elem.target.value;
    setName(keyword);
    filterDataPartners({keyword : keyword });
  };

  const setSearchCategory = (elem) => {
    const keyword = elem.target.value;
    setCategory(keyword);
    filterDataPartners({category : keyword });
  };
  const setSearchLanguages = (elem) => {
    const keyword = elem.target.value;
    setCategory(keyword);
    filterDataPartners({language : keyword });
  };
  const setSearchCities = (elem) => {
    const keyword = elem.target.value;
    setCategory(keyword);
    filterDataPartners({city : keyword });
  };
  return (
    <ul className="sasw_list mb0">
      <li className="search_area" key="name">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="Enter Agent Name"
            onChange={setSearch}
            value={getName}
          />
        </div>
      </li>
      {/* End .search_area */}

      <li key="Category">
        <div className="search_option_two mb-3">
          <div className="candidate_revew_select">
            <select
              onChange={setSearchCategory}
              className="selectpicker w100 show-tick form-select"
            >
              <option value="">All Agents</option>
              {agentType?.map((item) => (
                <option value={item.userTypeId}>{item.user_type}</option>
      ))}
            </select>
          </div>
        </div>
      </li>
      {/* End Categories search_area */}

      <li key="languages">
        <div className="search_option_two mb-3">
          <div className="candidate_revew_select">
            <select
              onChange={setSearchLanguages}
              className="selectpicker w100 show-tick form-select"
            >
              <option value="">All Languages</option>

              {languagesList?.map((item) => (
                <option value={item.language_id}>{item.language_name}</option>
      ))}
              {/* <option>Atlanta</option>
              <option>Florida</option>
              <option>Los Angeles</option>
              <option>Miami</option>
              <option>New York</option>
              <option>Orlando</option> */}
            </select>
          </div>
        </div>
      </li>

      <li key="city">
        <div className="search_option_two mb-3">
          <div className="candidate_revew_select">
            <select
            onChange={setSearchCities}
              className="selectpicker w100 show-tick form-select"
            >
              <option value="">All Cities</option>

              {statesList?.map((item) => (
                <option value={item.state_id}>{item.state_name}</option>
      ))}
              {/* <option>Atlanta</option>
              <option>Florida</option>
              <option>Los Angeles</option>
              <option>Miami</option>
              <option>New York</option>
              <option>Orlando</option> */}
            </select>
          </div>
        </div>
      </li>
      {/* End City search_area */}

      <li>
        <div className="search_option_button">
          <button
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            Find
          </button>
        </div>
      </li>
      {/* End submit serch button */}
    </ul>
  );
};

export default FilterSearch;
