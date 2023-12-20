import React, { useState } from "react";
import {
    Form, 
    FormGroup,
    Input,
    Button
  } from "reactstrap";

import { sendRequest } from "utils/resdbApi";
import { FETCH_CAR } from "utils/resdb";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submit action
    var numberPlate = searchTerm;

    try {
      sendRequest(FETCH_CAR(numberPlate)).then((res) => {
        if (Object.keys(res).length !== 0){
            let ownerHistory = res.data.getCarTransaction.ownerHistory;
            let lastOwner =
              ownerHistory.length > 0 ? ownerHistory[ownerHistory.length - 1] : "";
            res.data.getCarTransaction.currentOwner = lastOwner;
            console.log("added successfully ", res);
            navigate("/vehicleinfopage", {
              state: { carDetails: res.data.getCarTransaction },
            });
        } else {
          setToastMessage("No car found with the provided number plate.");
          setShowToast(true);
        }
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      setToastMessage("Error fetching data. Please try again.");
      setShowToast(true);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}>
        <FormGroup>
          <label htmlFor="exampleInputEmail1">Search</label>
          <Input
            aria-describedby="emailHelp"
            id="exampleInputEmail1"
            placeholder="Enter Licence Plate"
            type="text"
          ></Input>
        </FormGroup>
        </Form>

        <Button
            block
            className="btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg">
                Search
            </Button>
    </>
  );
}

export default SearchComponent;
