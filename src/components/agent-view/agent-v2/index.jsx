import SidebarListings from "../../common/agent-view/SidebarListings";
import TopFilterBar from "../../common/agent-view/TopFilterBar";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import GridListButton from "../../common/listing/GridListButton";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import Team from "./Team";
import Pagination from "../../common/blog/Pagination";
import Footer from "../../common/footer/Footer";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import config from "../../../data/config";
import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
    const [listAgents, setListAgents] = useState([]);
    const [allList, setAllList] = useState([]);
    const [languagesList, setLanguages] = useState([]);
    const [statesList, setStatesList] = useState([]);
    const [agentType, setagentType] = useState([]);


    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const baseURL = config.adminUrl;
          await axios.get(`${baseURL}main`,{}).then((response) => {
            let resp = response?.data?.agents;   
            setListAgents(resp);
            setAllList(resp);  
            setStatesList(response?.data?.states);
            setLanguages(response?.data?.language);
            setagentType(response?.data?.userType);
          });
          // Handle the response data here
        } catch (error) {
         // setLoading(false);
          // Handle errors here
        }
      };
      fetchData();   
    }, []);
    const filterDataPartners = (filterText) => {
        if(filterText?.keyword)
      {
        const filteredData = allList.filter(obj=>obj?.user_full_name?.toLowerCase().includes(filterText?.keyword.toLowerCase()) || obj?.user_email?.toLowerCase().includes(filterText?.keyword?.toLowerCase()));      
        setListAgents(filteredData);
        return false;

      }
      if(filterText?.category)
      {
        const filteredData = allList.filter(obj=>obj?.user_type == filterText?.category);      
        setListAgents(filteredData);
        return false;

      }

      if(filterText?.language)
      {
        const filteredData = allList.filter(obj=>{          
         const check =obj?.languages?.filter(ele => ele.language_id == filterText?.language);
         if(check.length)
         {
           return obj;
         }         
        });
        setListAgents(filteredData);
        return false;
      }

      if(filterText?.city)
      {
        const filteredData = allList.filter(obj=>{          
         const check =obj?.states?.filter(ele => ele.state_id == filterText?.city);
         if(check.length)
         {
           return obj;
         }         
        });
        setListAgents(filteredData);
        return false;
      }
      
      
      setListAgents(allList);
      };
    return (
        <>
            {/* <!-- Main Header Nav --> */}
            <Header />

            {/* <!--  Mobile Menu --> */}
            <MobileMenu />

            {/* <!-- Modal --> */}
            <PopupSignInUp />

            {/* <!-- Listing Grid View --> */}
            <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <BreadCrumb2 />
                        </div>
                        {/* End .col */}

                        <div className="col-lg-6 position-relative">
                            <div className="listing_list_style tal-991">
                                {/* <GridListButton /> */}
                            </div>
                            {/* End list grid */}
                        </div>
                        {/* End .col filter grid list */}
                    </div>
                    {/* End .row */}

                    <div className="row">
                        <div className="col-lg-4 col-xl-4">
                            <SidebarListings filterDataPartners={filterDataPartners} agentType={agentType} languagesList={languagesList} statesList={statesList}/>
                        </div>
                        {/* End sidevar .col */}

                        <div className="col-md-12 col-lg-8">
                            <div className="row">
                                <TopFilterBar />
                            </div>
                            {/* End .row */}

                            <div className="row">
                            <Team item={listAgents} />
                            </div>
                            {/* End .row */}

                            <div className="row">
                                <div className="col-lg-12 mt20">
                                    <div className="mbp_pagination">
                                        {/* <Pagination /> */}
                                    </div>
                                </div>
                                {/* End paginaion .col */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End content .col */}
                    </div>
                    {/* End .row */}
                </div>
            </section>

            {/* <!-- Our Footer --> */}
            <section className="footer_one">
                <div className="container">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </section>

            {/* <!-- Our Footer Bottom Area --> */}
            <section className="footer_middle_area pt40 pb40">
                <div className="container">
                    <CopyrightFooter />
                </div>
            </section>
        </>
    );
};

export default index;
