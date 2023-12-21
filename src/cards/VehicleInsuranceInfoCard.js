import React from "react";
// reactstrap components
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
// core components

import "assets/css/vehicleinfo.css";

function VehicleInsuranceInfoCard(insuranceDetails) {
  console.log("Insurance", insuranceDetails)
  console.log("InsuranceLength", insuranceDetails.length)
  const cardMargin = 10 + insuranceDetails.length * 5;
  // const insuranceDetails = [
  //   {
  //     date: "12-10-2021",
  //     cost: "3000",
  //     description: "The car is involved in an accident at the intersection of Street A and Street B. There are visible dents and scratches on the front side."
  //   },
  //   {
  //     date: "10-04-2018",
  //     cost: "1000",
  //     description: "A minor collision occurred with another vehicle at Intersection X causing minor dents for the car bumper."
  //   }
  // ];

  return (
    <>
      <Card className="clear-filter" filter-color="blue" >
        <CardImgOverlay>
          <CardTitle tag="h4">Vehicle Insurance Details</CardTitle>
          {insuranceDetails.insuranceDetails.map((detail, index) => (
            <CardText key={index}>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="bg-transparent border-0">
                  <strong>Date:</strong> {detail.date}
                </ListGroupItem>
                <ListGroupItem className="bg-transparent border-0">
                  <strong>Cost:</strong> {detail.cost}
                </ListGroupItem>
                <ListGroupItem className="bg-transparent border-0">
                  <strong>Description:</strong> {detail.description}
                </ListGroupItem>
              </ListGroup>
            </CardText>
          ))}
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default VehicleInsuranceInfoCard;
