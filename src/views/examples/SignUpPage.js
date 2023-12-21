import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "utils/resdbApi";
import { POST_TRANSACTION } from "utils/resdb";
import Cookies from 'js-cookie';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
  } from "reactstrap";

  // core components
  import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
  import TransparentFooter from "components/Footers/TransparentFooter.js";


  const metadata = {
    signerPublicKey: "HvNRQznqrRdCwSKn6R8ZoQE4U3aobQShajK1NShQhGRn",
    signerPrivateKey: "2QdMTdaNj8mJjduXFAsHieVmcsBcqeWQyW9v891kZEXC",
    recipientPublicKey: "HvNRQznqrRdCwSKn6R8ZoQE4U3aobQShajK1NShQhGRn",
  };

  function SignUpPage() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [formData, setFormData] = useState({
      userName: "",
      userRole: "",
      idNo: "",
      email: "",
      password: "",
      drivingLicense: "",
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
  
    const validateStepOne = () => {
      let errors = {};
      let isValid = true;
  
      if (!formData.userName) {
        isValid = false;
        errors.userName = "Name is required";
      }
  
      if (!formData.email.includes("@")) {
        isValid = false;
        errors.email = "Invalid email";
      }
  
      const passwordRegex = /^[a-zA-Z0-9]{10,15}$/;
      if (!passwordRegex.test(formData.password)) {
        isValid = false;
        errors.password = "Password must be 10-15 alphanumeric characters";
      }
  
      setErrors(errors);
      return isValid;
    };
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const timestamp = Date.now();
      const dataWithTimestamp = {
        ...formData,
        timestamp: timestamp,
        asset_type: "user",
      };
      const payload = JSON.stringify(dataWithTimestamp);
      console.log(payload);
      console.log(payload);
      navigate("/home");
        console.log("added successfully ");
  
      try {
        sendRequest(POST_TRANSACTION(metadata, payload)).then((res) => {
          navigate("/home");
          console.log("added successfully ", res);
        });
      } catch (error) {
        setToastMessage("Error! Check Entries!");
        setShowToast(true);
      }
    };  

    React.useEffect(() => {
      document.body.classList.add("login-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("login-page");
        document.body.classList.remove("sidebar-collapse");
      };
    }, []);
  
    const imageStyle = {
      height: "100px",
      width: "100px",
    };
    return (
      <>
        <ExamplesNavbar />
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/hero-bg.png") + ")",
            }}
          ></div>
          <div className="content">
            <Container>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="logo-container" style={imageStyle}>
                        <img alt="..." src={require("assets/img/logo.png")}></img>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}                          
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="text"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (lastFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="text"
                          value={formData.password}
                          onChange={handleInputChange}
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Drivers Licence"
                          type="text"
                          value={formData.drivingLicense}
                          onChange={handleInputChange}
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (lastFocus ? " input-group-focus" : "")
                        }
                      >
                        <UncontrolledDropdown>
                            <DropdownToggle
                            aria-expanded={false}
                            aria-haspopup={true}
                            caret
                            color="secondary"
                            data-toggle="dropdown"
                            id="dropdownMenuButton"
                            type="button"
                            >
                            {formData.userRole || "Role"}
                            </DropdownToggle>
                            <DropdownMenu aria-labelledby="dropdownMenuButton">
                                <DropdownItem href="#pablo"  onClick={(e) => {e.preventDefault(); setFormData({ ...formData, userRole: 'Owner' });}}>
                                    Owner
                                </DropdownItem>
                                <DropdownItem href="#pablo"  onClick={(e) => { e.preventDefault(); setFormData({ ...formData, userRole: 'User' });}}>
                                    User
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => { e.preventDefault(); setFormData({ ...formData, userRole: 'DMV' });}}>
                                    DMV
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => { e.preventDefault(); setFormData({ ...formData, userRole: 'Insurance' });}}>
                                    Insurance
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => { e.preventDefault(); setFormData({ ...formData, userRole: 'Service Center' });}}>
                                    Service Center
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                      </InputGroup>
                      {['DMV', 'Service Center', 'Insurance'].includes(formData.userRole) && (
                        <InputGroup
                        className={
                            "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
                        }
                        >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Center Number" // change the placeholder to match the intended use
                            type="text"
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                        ></Input>
                        </InputGroup>
                    )}
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={handleSubmit}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
          <TransparentFooter />
        </div>
      </>
    );
  }
  
export default SignUpPage;
