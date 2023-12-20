import React from 'react'
import SearchComponent from './SearchComponent'
import Cookies from 'js-cookie';

import {
    Container,
    Col
  } from "reactstrap";


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";


function SearchPage() {
  const isLoggedIn = Cookies.get('isLoggedIn');

    if (isLoggedIn) {
      return (
        <>
          <ExamplesNavbar />
          <div className="page-header clear-filter" filter-color="blue">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/hero-bg.png") + ")",
              }}
            ></div>
            <div className="content">
              <Container>
                <Col className="ml-auto mr-auto" md="4">
                  <SearchComponent/>
                </Col>
              </Container>
            </div>
            <TransparentFooter />
          </div>
        </>
      );
    } else {
      <>
      <h1>Permission Denied</h1>
      </> 
    }
    }    

export default SearchPage