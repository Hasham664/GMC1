import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Us</h4>
          <p>
            Discover a new era in real estate with GMC Realty, founded by Bloomingdale, Illinois, native Michael Carr. Our journey began right here in the heart of Illinois, and from day one, our commitment to redefining the real estate experience has set us apart as a beacon of excellence in the industry.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/agent-v2">Agents</Link>
            </li>
              <li>
              <Link href="/partners">Preferred Partners</Link>
            </li>
            
             <li>
              <Link href="/contact">Talk To An Agent</Link>
            </li> 
            <li>
              <Link href="/agent-login">Agent Login</Link>
            </li>
            <li>
              <Link href="/terms">Privacy Policy</Link>
            </li> 
            <li>
              <Link href="/privacy">Terms & Conditions</Link>
            </li>

            {/* <li>
              <Link href="/mortgage">Mortgage Calculator</Link>
            </li> */}
            {/* <li>
              <Link href="/">Preferred Partners</Link>
            </li> */}
            {/* <li>
              <Link href="/">Privacy Policy
               </Link>
            </li>
            <li>
              <Link href="/">
                Terms & Conditions</Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
          
            <li>
              <a href="mailto:info@gmcrealty.com">info@gmcrealty.com</a>
            </li>
            <li>
             <p className="text-grey"> 125 Fairfield Way #100 </p>
            </li>
            <li>
              <p className="text-grey"> Bloomingdale, IL 60108 </p>
            </li>
            <li>
              <a href="tel:+630-994-3200">+ 630-994-3200</a>
            </li>
          
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
         
        </div>
      </div>
    </>
  );
};

export default Footer;
