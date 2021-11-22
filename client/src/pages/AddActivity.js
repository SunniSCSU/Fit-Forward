import React from "react";
import { Link } from "react-router-dom";

import ActivitySearch from "../components/ActivitySearch";
import ActivityForm from "../components/ActivityForm";
import { Layout } from "../UI/Layout";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const AddActivity = () => {
  return (
    <Layout>
      <Link to="/dashboard">
        <FaArrowAltCircleLeft /> Return to Dashboard
      </Link>
      <Row>
        <Col>
          <ActivitySearch />
        </Col>
        <Col>
          <ActivityForm />
        </Col>
      </Row>
    </Layout>
  );
};

export default AddActivity;
