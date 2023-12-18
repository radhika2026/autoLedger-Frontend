/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            {/* <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
              >
                Creative Tim
              </a>
            </li> */}
            <li>
              <a
                href="https://radhika2026.github.io/autoLedgerBlog/"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://radhika2026.github.io/autoLedgerBlog/"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "} UC Davis Students
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
