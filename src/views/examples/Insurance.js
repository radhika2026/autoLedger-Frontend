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

function Insurance() {
  const [formData, setFormData] = useState({
    cost: "",
    date: "",
    description: "",
    numberPlate: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    console.log("Hello", e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let numberPlate = formData.numberPlate;

    try {
      var newInsuranceObject = {};
      newInsuranceObject["date"] = formData.date;
      newInsuranceObject["cost"] = formData.cost;
      newInsuranceObject["description"] = formData.description;
      sendRequest(FETCH_CAR(numberPlate)).then((res) => {
        if (res != {}) {
          // if (res.data.getCarTransaction.servicingHistory) {
          console.log("response form fetch", res);
          var insuranceHistory = res.data.getCarTransaction.insuranceHistory;
          insuranceHistory.push(newInsuranceObject);
          res.data.getCarTransaction.insuranceHistory = insuranceHistory;
          var payload = res.data.getCarTransaction;
          const timestamp = Date.now();
          payload.timestamp = timestamp;
          payload.asset_type = "car";
          payload = JSON.stringify(payload);
          console.log("payload for update", payload);
          try {
            sendRequest(UPDATE_CAR(metadata, payload)).then((response) => {
              console.log("updated successfully", response);
              setToastMessage("Updated SUccessfully");
              setShowToast(true);
            });
          } catch (error) {
            console.log("error");
            setToastMessage("Error fetching data. Please try again.");
            setShowToast(true);
          }
        } else {
          //TODO: pop up no car found
          setToastMessage("Error fetching data. Please try again.");
          setShowToast(true);
        }
      });
    } catch (error) {}
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
                  Date of Insurance Claim
                </label>
                <Input
                  placeholder="Insurance Claim Date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputEmail1">Cost</label>
                <Input
                  placeholder="Cost of the Claim"
                  value={formData.cost}
                  type="text"
                  name="cost"
                  onChange={handleChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputEmail1">Notes</label>
                <Input
                  placeholder="Add description of the incident"
                  value={formData.description}
                  type="textarea"
                  onChange={handleChange}
                  name="description"
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

export default Insurance;
