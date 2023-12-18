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

function ServiceCenter() {
    const [formData, setFormData] = useState({
        serviceCenter: "",
        serviceDate: "",
        serviceDescription: "",
        odometerReading: "",
      });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    console.log("Hello", e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var numberPlate = formData.numberPlate;
    try {
      var newServiceObject = {};
      newServiceObject["serviceCenter"] = formData.serviceCenter;
      newServiceObject["serviceDate"] = formData.serviceDate;
      newServiceObject["serviceDescription"] = formData.serviceDescription;
      sendRequest(FETCH_CAR(numberPlate)).then((res) => {
        if (res != {}) {
          console.log("fetch res", res);
          // if (res.data.getCarTransaction.servicingHistory) {
          var servicingHistory = res.data.getCarTransaction.servicingHistory;
          servicingHistory.push(newServiceObject);
          res.data.getCarTransaction.servicingHistory = servicingHistory;
          res.data.getCarTransaction.odometerReading = formData.odometerReading;
          var payload = res.data.getCarTransaction;
          const timestamp = Date.now();
          payload.timestamp = timestamp;
          payload.asset_type = "car";
          payload = JSON.stringify(payload);
          try {
            sendRequest(UPDATE_CAR(metadata, payload)).then((response) => {
              console.log("updated successfully", response);
            });
          } catch (error) {
            console.log("error");
          }
        } else {
          //TODO: pop up no car found
        }
      });
    } catch (error) {}
    //CRITICAL: ADD Update Car API
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
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
                  value={formData.numberPlate}
                  type="text"
                  name="numberPlate"
                  onChange={handleChange}
                  placeholder="Number Plate"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputPassword1">
                  Date of Service
                </label>
                <Input
                  placeholder="Date of Service"
                  type="date"
                  name="serviceDate"
                  value={formData.serviceDate}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputEmail1">Service Center Name</label>
                <Input
                  placeholder="Service Center Name"
                  value={formData.serviceCenter}
                  type="text"
                  name="serviceCenter"
                  onChange={handleChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputEmail1">Odometer Reading</label>
                <Input
                  placeholder="Odometer Reading"
                  value={formData.odometerReading}
                  type="number"
                  name="odometerReading"
                  onChange={handleChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputEmail1">Notes</label>
                <Input
                  placeholder="Add description of the incident"
                  value={formData.serviceDescription}
                  type="textarea"
                  onChange={handleChange}
                  name="serviceDescription"
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Confirm
                </Label>
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default ServiceCenter;
