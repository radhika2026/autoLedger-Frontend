import React from "react";
// reactstrap components
import{
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText, 
  Table
} from "reactstrap";
// core components

function VehicleSpecCard(){

    const vehicleSpecs = {
        Engine: "V8 Turbo",
        VIN: "1HGBH41JXMN109186",
        ChasisNumber: "MN109186S",
        Seats: 5,
        TypeOfDrive: "AWD",
        FuelType: "Petrol",
        ClassOfVehicle: "SUV",
        ModelName: "X5",
        CarMake: "BMW",
        Year: 2021
      };
    
  return (
    <>
      <Card className="bg-dark">
        <CardImg
          alt="..."
          data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
        ></CardImg>
        <CardImgOverlay>
          <CardTitle tag="h4">Vehicle Specifications</CardTitle>
          <CardText>
            <Table dark bordered responsive>
              <tbody>
                {Object.entries(vehicleSpecs).map(([key, value]) => (
                  <tr key={key}>
                    <th scope="row">{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardText>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default VehicleSpecCard