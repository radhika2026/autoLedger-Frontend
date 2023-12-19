import React, { useState } from "react";
// reactstrap components
import {
  Form,
  FormGroup,
  Input,
  FormText,
  Button,
  Label,
  Container,
} from "reactstrap";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

import { FETCH_CAR, UPDATE_CAR } from "utils/resdb";
import { sendRequest } from "utils/resdbApi";

const metadata = {
  signerPublicKey: "HvNRQznqrRdCwSKn6R8ZoQE4U3aobQShajK1NShQhGRn",
  signerPrivateKey: "2QdMTdaNj8mJjduXFAsHieVmcsBcqeWQyW9v891kZEXC",
  recipientPublicKey: "HvNRQznqrRdCwSKn6R8ZoQE4U3aobQShajK1NShQhGRn",
};

var ownershipLenght = 0;

function CreateCarEntry() {
  const [carData, setCarData] = useState({});

  const handleCarDataChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name, value, carData);
    if (name === "ownerName") {
      setCarData((p) => {
        if ("ownerHistory" in p) {
          if (ownershipLenght == p.ownerHistory.length) {
            const updatedOwnership = [
              ...p.ownerHistory,
              {
                ownerName: value,
                ownershipEndDate: "",
                ownershipStartDate: new Date().toLocaleDateString(),
              },
            ];
            return { ...p, ownerHistory: updatedOwnership };
          } else {
            const updatedOwnership = [...p.ownerHistory];
            const updatedNode = {
              ...updatedOwnership[updatedOwnership.length - 1],
            };
            updatedNode.ownerName = value;
            updatedOwnership[updatedOwnership.length - 1] = updatedNode;
            return { ...p, ownerHistory: updatedOwnership };
          }
        }
      });
    }
    setCarData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: Validate Form logic(Aakash)
    const timestamp = Date.now();
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];

    var dataWithTimestamp = {
      ...carData,
      timestamp: timestamp,
      asset_type: "car",
    };

    var ownerMap = {};
    ownerMap.ownerName = dataWithTimestamp.ownerName;
    ownerMap.ownershipStartDate = formattedDate;
    ownerMap.ownershipEndDate = "";

    var ownerList = [];
    ownerList.push(ownerMap);
    dataWithTimestamp = {
      ...dataWithTimestamp,
      ownerHistory: ownerList,
    };
    const payload = JSON.stringify(dataWithTimestamp);
    console.log("payload", payload);
    // try {
    //   sendRequest(POST_TRANSACTION(metadata, payload)).then((res) => {
    //     //TODO: add alert to show successly added user and redirect to login page
    //     console.log("added successfully ", res);
    //   });
    // } catch (error) {
    //   //TODO: Internal server error toast/alert
    // }
  };

  return (
    <>
      <ExamplesNavbar />
      <div  filter-color="blue">
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/formBg1.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
          }}
        >
          <Container>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <label>License Plate</label>
                <Input
                  value={carData.numberPlate}
                  type="text"
                  name="numberPlate"
                  onChange={handleCarDataChange}
                  placeholder="Number Plate"
                />
              </FormGroup>
              <FormGroup>
                <label>Owner Name:</label>
                <Input
                  type="text"
                  name="ownerName"
                  value={carData.ownerName}
                  onChange={handleCarDataChange}
                ></Input>
              </FormGroup>
              <FormGroup className="mb-3">
                <label>Driving License Number:</label>
                <Input
                  type="text"
                  name="drivingLicense"
                  value={carData.drivingLicense}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              {/* Chasis Number */}
              <FormGroup className="mb-3">
                <label>Chasis Number:</label>
                <Input
                  type="text"
                  name="chassisNo"
                  value={carData.chassisNo}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              {/* Engine Number */}
              <FormGroup className="mb-3">
                <label>Engine Number:</label>
                <Input
                  type="text"
                  name="engineNo"
                  value={carData.engineNo}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              {/* Manufacturing Date */}
              <FormGroup className="mb-3">
                <Label>Manufacturing Date:</Label>
                <Input
                  type="date"
                  name="manufacturingDate"
                  value={carData.manufacturingDate}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              {/* Odometer Reading */}
              <FormGroup className="mb-3">
                <label>Odometer Reading:</label>
                <Input
                  type="number"
                  name="odometerReading"
                  value={carData.odometerReading}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              {/* Manufacturer */}
              <FormGroup className="mb-3">
                <label>Manufacturer:</label>
                <Input
                  type="text"
                  name="manufacturer"
                  value={carData.manufacturer}
                  onChange={handleCarDataChange}
                />
              </FormGroup>
              {/* Color */}
              <FormGroup>
                <label>Color:</label>
                <Input
                  type="text"
                  name="color"
                  value={carData.color}
                  onChange={handleCarDataChange}
                />
              </FormGroup>
              {/* Seating Capacity */}
              <FormGroup>
                <label>Seating Capacity:</label>
                <Input
                  type="number"
                  name="seating"
                  value={carData.seating}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Transmission</label>
                <Input
                  type="select"
                  name="transmission"
                  value={carData.transmission}
                  onChange={handleCarDataChange}
                >
                  <option value="">Select an option</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </Input>
              </FormGroup>

              {/* Wheel Base */}
              <FormGroup>
                <label>Wheel Base (in meters):</label>
                <Input
                  type="number"
                  name="wheelBase"
                  step="0.01"
                  value={carData.wheelBase}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Drive Type:</label>
                <Input
                  as="select"
                  name="driveType"
                  value={carData.driveType}
                  onChange={handleCarDataChange}
                >
                  <option value="">Select an option</option>
                  <option value="Front Wheel">Front Wheel</option>
                  <option value="Rear Wheel">Rear Wheel</option>
                  <option value="All Wheel">All Wheel</option>
                </Input>
              </FormGroup>
              {/* Ground Clearance */}
              <FormGroup>
                <label>Ground Clearance (in meters):</label>
                <Input
                  type="number"
                  name="groundClearance"
                  step="0.01"
                  value={carData.groundClearance}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              {/* Fuel Type */}
              <FormGroup>
                <label>Fuel:</label>
                <Input
                  as="select"
                  name="fuelType"
                  value={carData.fuelType}
                  onChange={handleCarDataChange}
                >
                  <option value="">Select an option</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                </Input>
              </FormGroup>

              {/* Car Class */}
              <FormGroup>
                <label>Class:</label>
                <Input
                  type="text"
                  name="carClass"
                  value={carData.carClass}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              {/* Car Model */}
              <FormGroup>
                <label>Model:</label>
                <Input
                  type="text"
                  name="model"
                  value={carData.model}
                  onChange={handleCarDataChange}
                />
              </FormGroup>

              {/* Submit Button */}
              <Button
                variant="primary"
                className="blue-bordered-button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );
}

export default CreateCarEntry;
