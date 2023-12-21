import React from "react";
// reactstrap components
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
// core components

import "assets/css/vehicleinfo.css";

function VehicleOwnerInfoCard(ownerData) {
  const cardMargin = 5 + ownerData.length * 5;
  console.log("ownerData", ownerData.ownerData);
  console.log("ownerDataLength", ownerData.ownerData.length);
  // Sample ownerData array
  const data =  ownerData.ownerData;
  return (
    <>
      <Card className="clear-filter" filter-color="blue">
        <CardImgOverlay>
          <CardTitle tag="h4">Vehicle Owner History</CardTitle>
          <CardText>
            {data.map((owner, index) => (
              <ListGroup key={index} className="list-group-flush">
                <ListGroupItem className="bg-transparent border-0">
                  <strong>Owner Name:</strong> {owner.ownerName}
                </ListGroupItem>
                <ListGroupItem className="bg-transparent border-0">
                  <strong>Ownership Start Date:</strong> {owner.ownershipStartDate}
                </ListGroupItem>
                <ListGroupItem className="bg-transparent border-0">
                  <strong>Ownership End Date:</strong> {owner.ownershipEndDate}
                </ListGroupItem>
              </ListGroup>
            ))}
          </CardText>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default VehicleOwnerInfoCard;
