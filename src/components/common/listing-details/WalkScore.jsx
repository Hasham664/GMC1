import Image from "next/image";

const WalkScore = (props) => {
  return (
    <>
      <h3 className="mb30"> <span className="flaticon-front-of-bus mr15"></span>
        Transportation{" "}
        <span className="float-end fs-14 fw-300">
          Data provided by {props.item?.OriginatingSystemName}
        </span>
      </h3 >           
      <div className="iba_container">
        <div className="icon_box_area">
          <div className="score">
            {/* <span>2.4/5</span> */}
          </div>
          <div className="details">
            <h5>Directions</h5>
            <p>{props.item?.Directions}</p>
          </div>
        </div>
        <div className="icon_box_area">
          <div className="score">
            {/* <span>3.5/5</span> */}
          </div>
          <div className="details">
            <h5>Instruction</h5>
            <p>{props.item?.ShowingInstructions}</p>           
          </div>
        </div>
      </div>       
    </>
  );
};

export default WalkScore;
