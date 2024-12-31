import Categorie from "../listing/Categorie";
import FeaturedListings from "../listing/FeaturedListings";
import FeatureProperties from "../listing/FeatureProperties";
import FilterSearch from "./FilterSearch";

const SidebarListings = ({ filterDataPartners , languagesList , statesList, agentType}) => {
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="mb25">Find Agent</h4>
          <FilterSearch filterDataPartners={filterDataPartners} agentType={agentType} languagesList={languagesList} statesList={statesList} />
        </div>
      </div>
      {/* End filter and search area */}

     
    </div>
  );
};

export default SidebarListings;