import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import agents from "../../../data/agents";
import { addAgentItemLength } from "../../../features/agent/agentSlice";
import Image from "next/image";
import config from "../../../data/config";
import axios from "axios";

const Team = ({ item }) => {
   const dispatch = useDispatch();
  // name
  const nameHandler = (item) =>
    item.name.toLowerCase().includes(name.toLowerCase());

  // category
  const categoryHandler = (item) =>
    item.type.toLowerCase().includes(category.toLowerCase());
    if (!item) {
      // Handle the case when data is undefined or null
      return <div>Loading...</div>;
    }
    const handleImgError = e => {
      e.target.src = "/assets/images/user.png"
    }
  // city
  const cityHandler = (item) =>
    item.city.toLowerCase().includes(city.toLowerCase());
  let content = item
    // .slice(7, 16)
    // .filter(nameHandler)
    // .filter(categoryHandler)
    // .filter(cityHandler)
    // .filter((item) =>
    //   item.noOfListings.toLowerCase().includes(listen.toLowerCase())
    //)
    ?.map((item) => (
      <div className="col-lg-12" key={item.user_id}>
        <div className="feat_property feat_property-agents list style2 agent">
          <div className="thumb">
            <Link href={`/agent-details/${item.user_id}`}>
              <Image
                width={286}
                height={220}
                className="img-whp"
                src={`${config?.adminUrl}${item?.user_photo}`}
                key={item?.user_id}
                onError={handleImgError}
                alt="image"
              />
            </Link>
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item dn"></li>
               
              </ul>
            </div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <h4>
                {item.user_full_name}
              </h4>
              <p className="text-thm">{item.user_type}</p>
              <ul className="prop_details mb0">
                <li>
                  <a href="#">Office: {item.user_address}</a>
                </li>
                <li>
                  <a href="#">Mobile: {item.user_phone}</a>
                </li>
                <li>
                  <a
                  href={item.user_email}
                  target="_blank"
                  rel="noopener noreferrer"
                  >Email: {item.user_email}</a>
                </li>
                <li>
                <a
                      href={item.user_website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >Website: {item.user_website}</a>
                </li>
                <li>
                <a
                    href="#"
                    >Bio: {item.user_desc}</a>
                </li>
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item" key={1+item?.user_id}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa fa-facebook`}></i>
                    </a>
                  </li>
                  <li className="list-inline-item" key={2+item?.user_id}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa fa-twitter`}></i>
                    </a>
                  </li>
                  <li className="list-inline-item" key={3+item?.user_id}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa fa-instagram`}></i>
                    </a>
                  </li>
                  <li className="list-inline-item" key={4+item?.user_id}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa fa-pinterest`}></i>
                    </a>
                  </li>
                  <li className="list-inline-item" key={5+item?.user_id}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa fa-dribbble`}></i>
                    </a>
                  </li>
              </ul>
              <div className="fp_pdate float-end ">
                
                {/* <a href={`/agent-details/${item.user_id}`} className="text-thm">
                  View Profile <i className="fa fa-angle-right"></i>
                </a> */}
              </div>
            </div>
            {/* End .fp_footer */}
          </div>
          
        </div>
      </div>
    ));

  // agent item length
  useEffect(() => {
    dispatch(addAgentItemLength(content.length));
  }, [dispatch, content]);
  return <>{content}</>;
};

export default Team;
