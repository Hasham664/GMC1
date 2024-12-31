import Link from "next/link";
import { useRouter } from "next/router";

const HeaderMenuContent = ({ float = "" }) => {
  const route = useRouter();
  const home = [];



  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <Link
          href="/"
          className={
            home.some((page) => page.routerPath === route.pathname) ? home.some((page) => page.routerPath === route.pathname) : undefined
               }
        >
          <span className="title">Home</span>
         
        </Link>
        {/* <!-- Level Two--> */}

      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <Link
          href="agent-v2"
          className={
            home.some((page) => page.routerPath === route.pathname) ? home.some((page) => page.routerPath === route.pathname) : undefined
          }
        >
          <span className="title">Agents</span>

        </Link>

      </li>


      <li className="dropitem">
        <Link
          href="partners"
          className={
            home.some((page) => page.routerPath === route.pathname) ? home.some((page) => page.routerPath === route.pathname) : undefined
          }
        >
          <span className="title">Preferred Partners</span>

        </Link>
      </li>


      <li className="dropitem">
        <Link
          href="about-us"
          className={
            home.some((page) => page.routerPath === route.pathname) ? home.some((page) => page.routerPath === route.pathname) : undefined
          }
        >
          <span className="title">About Us</span>

        </Link>
        {/* <!-- Level Two--> */}

      </li>
      {/* End .dropitem */}

     


      <li className="last">
        <Link
          href="/contact"
          className={route.pathname === "/contact" ? "ui-active" : undefined}
        >
          Talk To An Agent 
        </Link>
      </li>
      {/* End .dropitem */}

      {/* <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">Agent Login</span>
        </a>
      </li> */}
      {/* End .dropitem */}

     
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
