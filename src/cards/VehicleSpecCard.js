import React from "react";
// reactstrap components
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Table
} from "reactstrap";
// core components

function VehicleSpecCard(vehicleSpecs) {
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
                {Object.entries(vehicleSpecs).map(([key, value]) => {
                  if (typeof value === 'string') {
                    return (
                      <tr key={key}>
                        <th scope="row">{key}</th>
                        <td>{value}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </Table>
          </CardText>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default VehicleSpecCard;
