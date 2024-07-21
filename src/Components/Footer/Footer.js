import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer"
      style={{
        background: "black",
        opacity: "0.7",
        padding: "0",
        marginTop: "2vh",
        color: "white",
        zIndex: 1000,
        position:"relative",
        width: "100%",
      }}
    >
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 style={{ fontSize: "14px" }}>Designed and Developed by Aman Bhakar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{ fontSize: "14px" }}>Copyright © {year} Aman Bhakar</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <li className="social-icons">
              <a
                href="https://github.com/gitaman69"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aman-bhakar/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/Ninja_Gaming_Y?t=VrisVAqMJf8aaNk97co-OQ&s=09"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ig__aman?igsh=OHB4eTk0dXZrMGVw"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
