import React from 'react'
import SearchComponent from './SearchComponent'

import {
    Container,
    Col
  } from "reactstrap";


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";


function SearchPage() {
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
    }    

export default SearchPage