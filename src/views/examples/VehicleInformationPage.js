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
    <Container>
      <Row className="md-12" style={{ marginBottom: "5rem" }}>
        <ExamplesNavbar />
      </Row>
      <Row className="md-12" style={{ marginBottom: "18rem" }}>
        <VehicleOwnerInfoCard
          ownerData={carData.data.getCarTransaction.ownerHistory}
        />
      </Row>
      <Row className="md-12" style={{ marginBottom: "18rem" }}>
        <VehicleInsuranceInfoCard
          insuranceDetails={carData.data.getCarTransaction.insuranceHistory}
        />
      </Row>
      <Row className="md-12" style={{ marginBottom: "20rem" }}>
        <VehicleServiceHistoryCard serviceHistory={carData.data.getCarTransaction.servicingHistory}/>
      </Row>
      <Row className="md-12" style={{ marginBottom: "5rem" }}>
        <VehicleSpecCard vehicleSpecs = { carData.data.getCarTransaction}/>
      </Row>
      <Row className="md-12">
        <TransparentFooter />
      </Row>
    </Container>
  );
}
export default VehicleInformationPage;
