import { useEffect, useState, useRef } from "react";
import InputRange from "react-input-range";
import { useDispatch } from "react-redux";
import { addPrice } from "../../features/properties/propertiesSlice";

const RangeSlider = ({priceRange}) => {
  const minInputRef = useRef(null);
  const maxInputRef = useRef(null);

  const [price, setPrice] = useState({
    min: '',
    max: '',
  });
  const dispath = useDispatch();
  const handleInputChange = () => {
    const minValue = minInputRef?.current?.value;
    const maxValue = maxInputRef?.current?.value;
    setPrice({ max : maxValue  });
    setPrice({ min : minValue  });
    priceRange({ max : maxValue || 0 , min : minValue || 0 });

  };


  // useEffect(() => {
  //   dispath(
  //     addPrice({
  //       min: price.min,
  //       max: price.max,
  //     })
  //   );
  // }, [dispath, price]);

  return (
    <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
      <div className="nft__filter-price-inner d-flex align-items-center justify-content-between gap-s">
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            {/* <span>$ </span> */}
            <span>        <input type="number"  defaultValue='0' ref={minInputRef} name="min" value={price.min}  onChange={handleInputChange} className="form-control min-price"  placeholder="Min Price"/>
 {/* {price.value.min} */}
 </span>
          </div>
        </div>
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            {/* <span>$ </span> */}
            <span>
            <input type="number"   ref={maxInputRef}  defaultValue='0' value={price.max} name="max" onChange={handleInputChange} className="form-control max-price" placeholder="Max Price"/>
              {/* {price.value.max} */}
              </span>
          </div>
        </div>
      </div>

      {/* <InputRange
        formatLabel={(value) => ``}
        maxValue={2000000}
        minValue={10}
        value={price}
        onChange={(value) => handleOnChange(value)}
      /> */}


      <div className="slider-styled inside-slider" id="nft-slider"></div>
    </div>
  );
};

export default RangeSlider;
