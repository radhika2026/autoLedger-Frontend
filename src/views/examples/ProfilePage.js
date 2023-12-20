import React from "react";
import Cookies from 'js-cookie';

// reactstrap components
import { Container } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  let pageHeader = React.createRef();

  const userName = "Radhika Gupta";
  const idNo = 12345;
  const email = "rkagupta@ucdavis.edu";
  const userRole = "DMV";
  const drivingLicense = "12345678";

  
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div
          className="page-header clear-filter page-header-small"
          filter-color="blue"
        >
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")",
            }}
            ref={pageHeader}
          ></div>
          <Container>
            <div className="photo-container">
              <img alt="..." src={require("assets/img/ryan.jpg")}></img>
            </div>
            <h3 className="title">{userName}</h3>
            <p className="category">{userRole}</p>
            <div className="social-description">
              <h2>{email}</h2>
            </div>
            <div className="social-description">
              <p>Driving License: {drivingLicense}</p>
            </div>
            <div className="social-description">
              <p>Additional Id: {idNo}</p>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
