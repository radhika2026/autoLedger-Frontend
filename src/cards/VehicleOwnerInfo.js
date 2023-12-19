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

function VehicleOwnerInfoCard(){

    const ownerDetails = {
        Name: "John Doe",
        Address: "123 Main St, Anytown, USA",
        ContactNumber: "555-1234",
        Email: "john.doe@example.com",
        PurchaseDate: "2021-06-15"
    };
    
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
            <ListGroup className="list-group-flush">
                {Object.entries(ownerDetails).map(([key, value]) => (
                <ListGroupItem key={key} className="bg-transparent border-0">
                    <strong>{key}:</strong> {value}
                </ListGroupItem>
                ))}
            </ListGroup>
          </CardText>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default VehicleOwnerInfoCard