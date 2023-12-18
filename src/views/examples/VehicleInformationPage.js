import React from "react";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import { Container, Row } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
  

import VehicleInsuranceInfoCard from "cards/VehicleInsuranceInfoCard";
import VehicleOwnerInfoCard from "cards/VehicleOwnerInfo";
import VehicleServiceHistoryCard from "cards/VehicleServiceHistoryCard";
import VehicleSpecCard from "cards/VehicleSpecCard";

function VehicleInformationPage(){
    return(
        <Container>
            <Row className="md-12" style={{ marginBottom: '5rem' }}>
            <ExamplesNavbar/>
            </Row>
            <Row className="md-12" style={{ marginBottom: '18rem' }}>
                <VehicleOwnerInfoCard/>
            </Row>
            <Row className="md-12" style={{ marginBottom: '18rem' }}>
                <VehicleInsuranceInfoCard/>
            </Row>
            <Row className="md-12" style={{ marginBottom: '20rem' }}>
                <VehicleServiceHistoryCard/>
            </Row>
            <Row className="md-12" style={{ marginBottom: '5rem' }}>
                <VehicleSpecCard/>
            </Row>
            <Row className="md-12">
                <TransparentFooter/>
            </Row>
        </Container>
    );
}
export default VehicleInformationPage