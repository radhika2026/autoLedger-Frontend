import React, { useState } from "react";
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

  function SignUpPage() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dlNumber, setDlNumber] = useState('');
    const [role, setRole] = useState('');
    const [centerNumber, setCenterNumber] = useState('');

    const handleRoleChange = (event) => {
        setRole(event.target.value);
        // Clear center number if role is not DMV, Service Center, or Owner
        if (!['DMV', 'Service Center', 'Insurance'].includes(event.target.value)) {
          setCenterNumber('');
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}                          
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
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
                            {role || "Role"}
                            </DropdownToggle>
                            <DropdownMenu aria-labelledby="dropdownMenuButton">
                                <DropdownItem href="#pablo" onClick={(e) => { e.preventDefault(); setRole('Owner'); }}>
                                    Owner
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => { e.preventDefault(); setRole('User'); }}>
                                    User
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => { e.preventDefault(); setRole('DMV'); }}>
                                    DMV
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => { e.preventDefault(); setRole('Insurance'); }}>
                                    Insurance
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => { e.preventDefault(); setRole('Service Center'); }}>
                                    Service Center
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                      </InputGroup>
                      {['DMV', 'Service Center', 'Insurance'].includes(role) && (
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
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        Get Started
                      </Button>
                      <div className="pull-left">
                        <h6>
                          <a
                            className="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Create Account
                          </a>
                        </h6>
                      </div>
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
