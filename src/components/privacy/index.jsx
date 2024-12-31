import Image from "next/image";
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import AddressSidebar from "./AddressSidebar";
import BreadCrumbBanner from "./BreadCrumbBanner";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

   

      {/* <!-- Our Contact --> */}
      <section className="container mt30">
        <div className="row">
          <div className="col-lg-12 col-xl-12">
            <div className="terms_condition_grid">

              <div className="grids mb30">
                <h4>COPYRIGHT POLICY</h4>
                <p className="mb20">As a real estate company, GMC Realty LTD. ("GMC") understands the importance of property, especially intellectual property ("IP"). GMC does not tolerate the abuse of third parties' IP on GMC's systems, websites owned by GMC, and/or websites where GMC operates the website infrastructure. Our agreements with those that use and/or post content or material to GMC Sites specifically prohibit the uploading, posting, emailing, or transmission of content or material that infringes the IP of others. In order to enforce this policy and protect the IP of others, GMC provides a process for submitting complaints that content or material posted on a GMC site is in violation of U.S. copyright law.

                </p>
                <p>Pursuant to the Digital Millennium Copyright Act of 1998 (17 U.S.C. ? 512), the full text of which is available at http://www.copyright.gov/title17/92chap5.html#512, GMC has implemented procedures for receiving notices of claimed copyright infringement ("Notices") and has designated an agent to receive those Notices. GMC has also implemented procedures for submitting counter-notices should you receive a notice of copyright infringement you believe to be erroneous ("Counter-Notices"). Notices and Counter-Notices must be truthful and must be submitted under penalty of perjury. Submitting a false Notice or Counter-Notice could lead to personal liability. You may want to seek the advice of counsel prior to submitting a Notice or Counter-Notice.

                </p> <p>GMC reserves the right, in its sole discretion, to block or remove any objectionable content or material. Regardless of whether GMC removes or blocks content or material, GMC will make a good-faith effort to notify you if a copyright infringement complaint is made against you.
</p>
              </div>

              <div className="grids mb30">
                <h4>Notice of Copyright Infringement</h4>
                <p className="mb20">If you have a good-faith belief that content or material on a GMC Site infringes upon a copyright you own or the copyright of a person or entity for which you have been authorized to act on behalf of the owner, you may submit a Notice to GMC. The Notice must be in writing (email or letter) and must contain the following:
                </p>
                <ul>
                  <li>Your name and contact information (full name, email address, phone number, and mailing address). NOTE: GMC regularly forwards Notices (including personal information received) to the person that posted the allegedly infringing content. A description of the copyrighted work you claim has been infringed, including the name and contact information of the copyright owner if the owner is someone other than yourself. When available, please provide the registration number and date for the copyrighted work you claim has been infringed.
                  </li>
                  <li>A description of the content or material on a GMC Site you claim infringes your copyright. The best way to provide this information is to describe the content or material and provide the URL where the allegedly infringing content or material may be found. Computer screenshots depicting the allegedly infringing content or material and its location are welcomed, but not required.
                  </li>
                  <li>A statement by you that you have a good faith belief that use of the content or material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                  <li>A statement by you, made under penalty of perjury, that the information in the notification is accurate and that you are the copyright owner or authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. Your electronic or physical signature.</li>
                </ul>
              </div>



              <div className="grids mb30">
                <h4>Counter-Notice</h4>
                <p className="mb20">If you have a good-faith belief that a Notice of copyright infringement has been improperly submitted against you, you may submit a Counter-Notice pursuant to Sections 512(g)(2) and (3) of the Digital Millennium Copyright Act. The Counter-Notice must be in writing (email or letter) and must contain the following:
                </p>
                <ul>
                  <li>Your name and contact information (full name, email address, phone number, and mailing address). NOTE: GMC will forward your Counter-Notice (including personal information received) to the person or entity that originally submitted the Notice against you.
                  </li>
                  <li>A description of the content or material that has been removed or to which access has been disabled and the location at which the content or material appeared before it was removed or access to it was disabled. The best way to provide this information is to describe the content or material and provide the URL where the allegedly infringing content or material was located prior to being removed or to which access was disabled.
                  </li>
                  <li>A statement, made under penalty of perjury, that you have a good-faith belief that the content or material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.
                  </li>
                  <li>A statement that the you consent to the jurisdiction of Federal District Court for the judicial district in which the address you provide in the Counter-Notice is located, or if the address you provide is outside of the United States, the Federal District Court of the Western District of Texas, and that you will accept service of process from the person or entity who provided Notice to GMC or an agent of such person or entity.
                  </li>
                  <li>Your electronic or physical signature.
</li>
                </ul>
              </div>



              <div className="grids mb30">
                <h4>Delivery of Notices and Counter-Notices</h4>
                <p className="mb20">Notices and Counter-Notices may be sent to GMC's Designated Agent via email to contact@gmcrealtor.com or via mail to:
                </p>
                <p>GMC Realty LTD.
                  125 Fairfield Way Ste 100, Bloomingdale, IL 60108
                </p>
                <p>Only DMCA Notices and Counter-Notices should be sent to GMC?s DMCA Designated Agent.
</p>
               </div>

              <div className="grids mb30">
                <h4>GMC Procedure</h4>
                <p className="mb20">
                  When GMC receives a Notice, GMC will make a good-faith effort to forward the Notice to the person reasonably believed to be responsible for posting the allegedly infringing content or material. GMC will use the information in the Notice to determine whether to remove or disable the allegedly infringing content or material. If a Notice is incomplete, GMC is under no obligation to act. When GMC receives a Counter-Notice, GMC will forward the Counter-Notice to the person or entity that submitted the original Notice. If GMC does not receive notice of an action seeking a court order to restrain the allegedly infringing material within ten (10) business days of receiving a Counter-Notice, GMC may, in its sole discretion, reinstate the removed or disabled content or material. If GMC chooses to do so, GMC will do so within ten (10) and fourteen (14) business days of receiving a Counter-Notice. In some cases, GMC will not be able to reinstate removed or disabled content or material due to technical limitations. In such instances, GMC may choose to notify the person that filed the Counter-Notice that he or she may repost the content or material at his or her discretion.
  </p>
                <p>GMC is not an IP tribunal and has no obligation to adjudicate claims of infringement and is not responsible for determining the merits of such claims. The parties submitting Notices and Counter-Notices are encouraged to settle any disagreements amongst themselves. GMC may, in its sole discretion, use the information provided in Notices and Counter-Notices to determine whether to remove or disable content or material.
                </p>
                <p>Nothing herein is intended to constitute legal advice.
</p>
              </div>            

            </div>
          </div>
          {/* End .col */}


        </div>
        {/* End .container */}

       <br></br><br></br>
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
