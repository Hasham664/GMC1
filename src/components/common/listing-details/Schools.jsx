import Image from "next/image";

const Schools = (props) => {
  return (
    <>
      <h3 className="mb30">  <span className="flaticon-college-graduation mr15"></span>
        Schools{" "}
        <span className="float-end fs-14 fw-300">
          Data provided by {props.item?.OriginatingSystemName}
        </span>
      </h3 >
      <div className="iba_container">
        <div className="icon_box_area">          
          <div className="details">
            <h5>Middle Or JuniorSchool</h5>                      
          </div>
          <div className="details">
            {/* Grade (9 - 12) */}
          </div>
          <div className="details">
            {props.item?.MiddleOrJuniorSchool}
          </div>
        </div>     
      </div>

<hr></hr>
      <div className="iba_container">
        <div className="icon_box_area">
          <div className="details">
            <h5>High School</h5>
          </div>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;


          <div className="details">
            {/* Grade (9 - 12) */}
          </div>
          <div className="details">
          &nbsp;&nbsp;&nbsp;{props.item?.HighSchool}
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="iba_container">
        <div className="icon_box_area">
          <div className="details">
            <h5>Elementary School</h5>
          </div>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <div className="details">
            {/* Grade (9 - 12) */}
          </div>
          <div className="details">
          {props.item?.ElementarySchool }
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Schools;
