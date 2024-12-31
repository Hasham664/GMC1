import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import { useRouter } from 'next/router';
import Iframe from 'react-iframe'; // Import the react-iframe library

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />





      {/* <!-- About Text Content --> */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                {/* Mortgage Calculator */}
                <section className="mortgage-calculator">
                  <Iframe
                    url="https://www.mortgagecalculator.org/webmasters/?downpayment=50000&homevalue=300000&loanammount=250000&interestrate=4&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0"
                    width="100%"
                    height="1050px"
                    frameBorder="0"
                  />
                </section>
              </div>
            </div>
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
