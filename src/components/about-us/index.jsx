import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
import WhyChoose from "../common/WhyChoose";
import Testimonial from "../home-7/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Team from "./Team";
import OurMission from "./OurMission";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- About Text Content --> */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              {/* <div className="main-title text-center">
                <h1 className="mt0">Welcome to GMC Realty</h1>
              </div> */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <OurMission />
          </div>
          {/* End .row */}

          {/* <div className="row mt80">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div> */}
          {/* End .row */}
          <div className="row mt40">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Services</h2>

              </div>
            </div>
          </div>
          {<div className="row">
            <WhyChoose />
          </div>}
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