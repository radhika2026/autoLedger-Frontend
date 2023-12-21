import React from "react";
import { useState } from "react";
import { FETCH_USER } from "utils/resdb";
import { sendRequest } from "utils/resdbApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


// reactstrap components
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
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendRequest(FETCH_USER(email, password));

      console.log("added successfully ", email, password);

      Cookies.set("isLoggedIn", "true", { expires: 1 }); // Expires in 1 day
      Cookies.set("userName", "Arvind");
      Cookies.set("userRole", "DMV");
      Cookies.set("idNo", "123456789");
      Cookies.set("email", "arvind@dmv.com");
      Cookies.set("drivingLicense", "123456789996");

      if (Object.keys(res).length !== 0) {
        Cookies.set("isLoggedIn", "true", { expires: 1 }); // Expires in 1 day
        Cookies.set("userName", res.data.getUserTransaction.userName);
        Cookies.set("userRole", res.data.getUserTransaction.userRole);
        Cookies.set("idNo", res.data.getUserTransaction.idNo);
        Cookies.set("email", res.data.getUserTransaction.email);
        Cookies.set(
          "drivingLicense",
          res.data.getUserTransaction.drivingLicense
        );

        console.log(
          "Log In: ",
          Cookies.get("isLoggedIn"),
          "Role:",
          Cookies.get("userRole"),
          "ID: ",
          Cookies.get("idNo"),
          "Email:",
          Cookies.get("email"),
          "Driving License",
          Cookies.get("drivingLicense")
        );
        navigate("/search");
      } else {
        setToastMessage("Invalid credentials!");
        setShowToast(true);
      }
    } catch (error) {
      // Handle error
      setToastMessage("Error Login, check later!");
      setShowToast(true);
    }
  };

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
                        placeholder="Email"
                        type="email"
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
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
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
                      Login
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

export default LoginPage;
