import Categorie from "../listing/Categorie";
import FilterPatnersSearch from "./FilterPatnersSearch";

const SidebarListings = ({filterDataPartners , vendorlist}) => {
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="mb25">Find Patner</h4>
          <FilterPatnersSearch filterDataPartners= {filterDataPartners} vendorlist={vendorlist}/>
        </div>
      </div>
      {/* End filter and search area */}

     
    </div>
  );
};

export default SidebarListings;
