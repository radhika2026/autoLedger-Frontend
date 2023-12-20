import React from "react";
// reactstrap components
import{
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText, 
  ListGroup,         // Add this line
  ListGroupItem      // Add this line
} from "reactstrap";
// core components

function VehicleServiceHistoryCard(serviceHistory){

  return (
    <>
      <Card className="bg-dark">
        <CardImgOverlay>
          <CardTitle tag="h4">Vehicle Service History</CardTitle>
          <CardText>
            <ListGroup className="list-group-flush">
                {serviceHistory.serviceHistory.map((event, index) => (
                    <ListGroupItem key={index} className="bg-transparent border-0">
                        <strong>Date:</strong> {event.serviceDate} <br />
                        <strong>Service Center:</strong> {event.serviceCenter} <br />
                        <strong>Remarks:</strong> {event.serviceDescription}
                    </ListGroupItem>
                ))}
            </ListGroup>
          </CardText>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default VehicleServiceHistoryCard