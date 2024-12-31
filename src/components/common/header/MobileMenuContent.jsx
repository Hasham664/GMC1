import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const home = [
  
];

const listing = [
  
];

const property = [
 
];

const blog = [
];

const pages = [
];

const MobileMenuContent = () => {
  const route = useRouter();
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            <Image
              width={180}
              height={60} 
              className="nav_logo_img img-fluid mt20"
              src="/assets/images/header-logo2.png"
              alt="header-logo.png"
            />
         
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        
        <Menu>        
          <MenuItem>
            <Link
              href="/"
              className={
                route.pathname === "/contact" ? "ui-active" : undefined
              }
            >
              Home
            </Link>
          </MenuItem>



          <MenuItem>
            <Link
              href="/agent-v2"
              className={
                route.pathname === "/agent-v2" ? "ui-active" : undefined
              }
            >
             Agents
            </Link>
          </MenuItem>

        
          
            <MenuItem>
            <Link
              href="/partners"
              className={
                route.pathname === "/partners"
              }
            >
              Prefered Partners
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              href="/about-us"
              className={
                route.pathname === "/contact" ? "ui-active" : undefined
              }
            >
             About Us
            </Link>
          </MenuItem>
          
          <MenuItem>
            <Link
              href="/contact"
              className={
                route.pathname === "/contact" ? "ui-active" : undefined
              }
            >
              Talk To An Agent
            </Link>
          </MenuItem>

          {/* <MenuItem>
            <Link
              href="/login"
              className={route.pathname === "/login" ? "ui-active" : undefined}
            >
              <span className="flaticon-user"></span> Agent Login
            </Link>
          </MenuItem> */}

        
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        {/* <Link
          href="/create-listing"
          className="btn btn-block btn-lg btn-thm circle"
        >
          <span className="flaticon-plus"></span> Create Listing
        </Link> */}
      </SidebarFooter>
    </ProSidebar>
  );
};

export default MobileMenuContent;
