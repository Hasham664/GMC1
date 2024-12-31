import React, { useState, useEffect } from "react"; // Import React and the necessary hooks
import { useRouter } from 'next/router'
import config from "../../data/config";
import axios from "axios";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import ListingGallery from "../common/listing-details/ListingGallery";
import DetailsContent from "./DetailsContent";
import Sidebar from "./Sidebar";
import Iframe from 'react-iframe'; // Import the react-iframe library
import MortgageCalculator from "./MortgageCalculator"; // Import your MortgageCalculator component

//import React from "react";


const Index = () => {
  const router = useRouter();
  const [propertyDetails, setPropertyDetails] = useState(null);
  const propertyId = router.query?.property || null;
  const offerType = window.localStorage.getItem('offerType');
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const retrievedValue = window.localStorage.getItem('items') ;
        const parsedData =  retrievedValue ? JSON.parse(retrievedValue) : JSON.parse(retrievedValue) ;
        setPropertyDetails(parsedData);
            }
  

    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }, []);

  return ( 
    <>
      {/* Main Header Nav */}
      <Header />

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Modal */}
      <PopupSignInUp />

      {/* Listing Single Property */}
      <section className="listing-title-area mt85 md-mt0">
        <div className="container">
          <ListingGallery item={propertyDetails} />
        </div>
      </section>

      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent item={propertyDetails}/>
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <Sidebar/>
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </section>
      
      {/* Mortgage Calculator */}
      { (offerType == 'For Sale Only') &&
      <section className="mortgage-calculator">
        <Iframe

        url={`https://www.mortgagecalculator.org/webmasters/?downpayment=${((propertyDetails?.ListPrice) / 100) * 20}&homevalue=${propertyDetails?.ListPrice}&loanammount=250000&interestrate=7&loanterm=30&propertytax=${propertyDetails?.TaxAnnualAmount}&pmi=1&homeinsurance=1000&monthlyhoa=0`}
         // url="https://www.mortgagecalculator.org/webmasters/?downpayment=50000&homevalue=300000&loanammount=250000&interestrate=4&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0"
          width="100%"
          height="1120px"
          frameBorder="0"
        />
      </section>
}

      {/* Our Footer */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* Our Footer Bottom Area */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
} 

export default Index;