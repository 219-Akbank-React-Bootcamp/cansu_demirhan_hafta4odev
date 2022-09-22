import React from "react";
import { Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Filter = () => {
  return (
    <>
      <Row>
        <Form.Select size="sm" className="filter-select">
          <option>Categories</option>
        </Form.Select>

        <Form.Select size="sm" className="filter-select">
          <option>status</option>
        </Form.Select>

        <Button className="filter-button">Filter</Button>
        <Button className="filter-button">Clean Filters</Button>
      </Row>
    </>
  );
};

export default Filter;
