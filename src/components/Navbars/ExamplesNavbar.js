import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse, 
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";


var isLoggedIn = true;
var userRole = "Owner"; 

function ExamplesNavbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userRole, setUserRole] = useState("");
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            AutoLedger
          </NavbarBrand>
          <button
            className="navbar-toggler"
            id="navbarNavDropdown"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
            <Nav navbar className="w-100">
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              {/* Conditional links */}
              {isLoggedIn ? (
                <>
                  <NavItem>
                    <NavLink to="/search" tag={Link}>
                      Search
                    </NavLink>
                  </NavItem>
                  {userRole === 'DMV' && (
                    <NavItem>
                      <NavLink to="#DMV-Page" tag={Link}>
                        DMV
                      </NavLink>
                    </NavItem>
                  )}
                  {userRole === 'Service Center' && (
                    <NavItem>
                      <NavLink to="#service-center" tag={Link}>
                        Service Center
                      </NavLink>
                    </NavItem>
                  )}
                  {userRole === 'Insurance' && (
                    <NavItem>
                      <NavLink to="/insurance" tag={Link}>
                        Insurance
                      </NavLink>
                    </NavItem>
                  )}
                  <div className="ml-auto" style={{ display: 'flex' }}>
                  <NavItem>
                    <NavLink to="#profile-page" tag={Link}>
                      Profile
                    </NavLink>
                  </NavItem>
                  </div>
                </>
              ) : (
                <>
                  <div className="ml-auto" style={{ display: 'flex' }}>
                  <NavItem>
                    <NavLink to="/login-page" tag={Link} >
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/signup-page" tag={Link}>
                      Signup
                    </NavLink>
                  </NavItem>
                  </div>
                </>
              )}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
