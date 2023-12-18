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

function VehicleInsuranceInfoCard(){

    const insuranceDetails = {
        PolicyNumber: "POL1234567",
        Insurer: "Insurance Company Name",
        ExpiryDate: "2024-01-01",
        CoverageType: "Comprehensive",
        Premium: "$500 annually"
      };
    
  return (
    <>
      <Card className="bg-dark">
        <CardImg
          alt="..."
          data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
        ></CardImg>
        <CardImgOverlay>
          <CardTitle tag="h4">Vehicle Insurance Detals</CardTitle>
          <CardText>
          <ListGroup>
              {Object.entries(insuranceDetails).map(([key, value]) => (
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

export default VehicleInsuranceInfoCard