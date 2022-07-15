import { Col } from "react-bootstrap";

const ScoopTopping = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
};

export default ScoopTopping;
