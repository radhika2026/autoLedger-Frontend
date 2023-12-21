import React from "react";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import { Container, Col, Row } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

import VehicleInsuranceInfoCard from "cards/VehicleInsuranceInfoCard";
import VehicleOwnerInfoCard from "cards/VehicleOwnerInfo";
import VehicleServiceHistoryCard from "cards/VehicleServiceHistoryCard";
import VehicleSpecCard from "cards/VehicleSpecCard";

var carData = {
  data: {
    getCarTransaction: {
      chassisNo: "SV30-0169266",
      engineNo: "PJ12345U123456P",
      manufacturer: "PORSCHE",
      manufacturingDate: "12-08-2021",
      numberPlate: "ABC123",
      registerDate: "15-08-2021",
      ownerHistory: [
        {
          ownerName: "John Doe",
          ownershipStartDate: "01-01-2021",
          ownershipEndDate: "10-08-2021",
        },
        {
          ownerName: "Jane Doe",
          ownershipStartDate: "10-08-2021",
          ownershipEndDate: "15-08-2021",
        },
        {
          ownerName: "Alice Smith",
          ownershipStartDate: "12-08-2021",
          ownershipEndDate: "",
        },
      ],
      drivingLicense: "DL123456",
      color: "Blue",
      seating: "5",
      transmission: "Automatic",
      wheelBase: "2.80 meters",
      groundClearance: "150 mm",
      driveType: "Front-wheel drive",
      fuelType: "Petrol",
      carClass: "Sedan",
      model: "911",
      insuranceNo: "INS553201",
      insuranceProvider: "ABC Insurance",
      policyEndDate: "15-08-2022",
      insuranceHistory: [
        {
          date: "12-10-2021",
          cost: "3000",
          description:
            "The car is involved in an accident at the intersection of Street A and Street B. There are visible dents and scratches on the front side.",
        },
        {
          date: "10-04-2018",
          cost: "1000",
          description:
            "A minor collision occured with another vehicle at Intersection X causing minor dents for the car bumper",
        },
      ],
      mileage: "10 km/l",
      odometerReading: "5000 km",
      servicingHistory: [
        {
          serviceCenter: "AutoCare Service Center",
          serviceDate: "01-09-2022",
          serviceDescription: "Oil change, filter replacement",
        },
      ],
    },
  },
};

function VehicleInformationPage() {
  return (
    <>
      <ExamplesNavbar />
      <div className="clear-filter" filter-color="blue">
      <Container>
      <Row>
        <Col md="12">
        <VehicleOwnerInfoCard ownerData={carData.data.getCarTransaction.ownerHistory}/>
        </Col>
      </Row>
      <Row>
        <Col md="12">
        <VehicleInsuranceInfoCard insuranceDetails={carData.data.getCarTransaction.insuranceHistory}/>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <VehicleServiceHistoryCard serviceHistory={carData.data.getCarTransaction.servicingHistory}/>
        </Col>
      </Row>
      <Row>
        <Col md="12">
        <VehicleSpecCard vehicleSpecs = { carData.data.getCarTransaction}/>
        </Col>
      </Row>
    </Container>
        <TransparentFooter />
      </div>
    </>
  );
}
export default VehicleInformationPage;
