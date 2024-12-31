import ContactWithAgent from "../common/agent-view/ContactWithAgent";


const Sidebar = () => {
  return (
    <>
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <div className="sl_creator">
            <h4 className="mb25">I am Interested</h4>
          
          </div>
          {/* End .sl_creator */}
          <ContactWithAgent/>
        </div>
      </div>
      {/* End .sidebar_listing_list */}

    
    

      {/* <div className="sidebar_feature_listing">
        <h4 className="title">Recently Viewed</h4>
        <FeaturedListings />
      </div> */}
      {/* End .Recently Viewed */}
    </>
  );
};

export default Sidebar;
