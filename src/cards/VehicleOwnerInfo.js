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

function VehicleOwnerInfoCard(ownerData) {
  console.log("ownerData", ownerData.ownerData);
  // Sample ownerData array
  const data =  ownerData.ownerData;
  return (
    <>
      <Card className="bg-dark">
        <CardImg
          alt="..."
          data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
        ></CardImg>
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
