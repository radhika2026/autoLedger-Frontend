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

function VehicleServiceHistoryCard(){

    const serviceHistory = [
        {
            date: "2023-01-15",
            serviceType: "Oil Change",
            serviceCenter: "AutoWorks Center",
            remarks: "Regular maintenance"
        },
        {
            date: "2022-12-01",
            serviceType: "Tire Rotation",
            serviceCenter: "TyrePlus Service",
            remarks: "Winter tire installation"
        },
        // ... more history items
    ];
    
  return (
    <>
      <Card className="bg-dark">
        <CardImg
          alt="..."
          data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
        ></CardImg>
        <CardImgOverlay>
          <CardTitle tag="h4">Vehicle Service History</CardTitle>
          <CardText>
            <ListGroup className="list-group-flush">
                {serviceHistory.map((event, index) => (
                    <ListGroupItem key={index} className="bg-transparent border-0">
                        <strong>Date:</strong> {event.date} <br />
                        <strong>Service Type:</strong> {event.serviceType} <br />
                        <strong>Service Center:</strong> {event.serviceCenter} <br />
                        <strong>Remarks:</strong> {event.remarks}
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