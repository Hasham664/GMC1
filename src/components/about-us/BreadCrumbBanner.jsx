import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBanner = () => {
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="breadcrumb_content">
              {/* <BreadCrumb title="about us" /> */}
              <h1 className="breadcrumb_title">Welcome to GMC Realty</h1>
              <h4>Discover a new era in real estate with GMC Realty, founded by Bloomingdale, Illinois, native Michael Carr.
                Our journey began right here in the heart of Illinois, and from day one, our commitment to redefining the
                real estate experience has set us apart as a beacon of excellence in the industry.</h4>
            </div>
           
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
