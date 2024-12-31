import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [

  ];

  return (
    <>
      <div className="col-lg-12 col-xl-12">
        <div className="about_content">

          <div className="row">
            <div className="col-lg-3 col-xl-3 prof-photo">
            </div>
            <div className="col-lg-8 col-xl-8 founder">
              <h3> Our Founder</h3>
              <hr></hr>
              <p>
                Michael Carr Michael Carr's roots in Illinois run deep. As a resident who has witnessed the evolving landscape and community dynamics over the years, Michael possesses a unique and invaluable understanding of the Illinois real estate market. His vision for GMC Realty was simple yet powerful: to create a real estate firm that doesn't just sell properties but transforms the way individuals find and secure their dream homes. And these qualities are profoundly reflected in all of his agents.
              </p>
            </div> </div>


          <h2 class="color-brand-1 mb-20 mt-15 text-center">What Sets Us Apart</h2>
          <div className="row">

            <div class="col-lg-6">
              <div class="card-testimonial-list">
                <div class="d-flex align-items-center">
                  <div class="box-author mb-10">
                    Local Expertise
                  </div>
                </div>
                <p class="font-md">Our deep-seated knowledge of Illinois neighborhoods,<br></br> market trends,
                  and community dynamics ensures <br></br>you receive the most accurate and valuable insights.
                </p>
              </div>


              <div class="card-testimonial-list1">
                <div class="d-flex align-items-center">
                  <div class="box-author mb-10">
                    Personalized Service
                  </div>
                </div>
                <p class="font-md">We believe in tailoring our approach to your unique <br></br>needs. No two clients are the same, and your real estate <br></br>journey should reflect that.
                </p>
              </div>

            </div>



            <div class="col-lg-6 bg-testimonials position-relative">
              <div class="card-testimonial-list2">
                <div class="d-flex align-items-center">
                  <div class="box-author mb-10">
                    Innovation & Technology
                  </div>
                </div>
                <p class="font-md">Carr Realty Group stays at the forefront of industry <br></br>technology, using cutting-edge tools and resources to <br></br>streamline transactions and enhance the client experience.
                </p>
              </div>


              <div class="card-testimonial-list3">
                <div class="d-flex align-items-center">
                  <div class="box-author mb-10">
                    Community Engagement
                  </div>
                </div>
                <p class="font-md">We are more than just a real estate firm; we are active <br></br>members of the Illinois community. Giving back and <br></br>supporting local causes is an integral part of our identity.
                </p>
              </div>

            </div>
          </div>









          <h2 class="color-brand-1 mb-20 mt-15 text-center">Join the GMC Realty Family</h2>

          <p>GMC Realty is more than a real estate firm; it's a family dedicated to helping you find your place in the Illinois community. Whether you are a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate journey seamless and rewarding.
          </p>
          <p>Explore our website to learn more about our team, our listings, and our commitment to elevating real estate in Illinois. When you are ready to take the next step, contact us to experience the GMC Realty difference firsthand. Welcome home.
          </p>


          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>

      </div>

      <section class="inner_page_breadcrumb inner_page_breadcrumb-mission">
        <div class="container"><div class="row">
          <div class="col-xl-8"><div class="breadcrumb_content">
            <h1 class="breadcrumb_title1">Our Mission</h1>
            <h4> At GMC Realty, we are driven by a mission to deliver unparalleled service, <br></br>foster lasting relationships,
              and empower our clients with the knowledge they need <br></br>to make informed real estate decisions.
              Whether you are buying, selling, <br></br>or investing in Illinois real estate, we are here to guide
              you every step of the way.</h4></div></div></div></div>
      </section>
      {/* End .col */}


    </>
  );
};

export default OurMission;