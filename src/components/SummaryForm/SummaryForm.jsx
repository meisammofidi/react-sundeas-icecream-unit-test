import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SummaryForm = () => {
  const [tcCheck, setTcCheck] = useState(false);
  const tcLable = (
    <span>
      I agree to <span style={{ color: "blue" }}> Term and Conditions</span>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={tcLable}
          checked={tcCheck}
          onChange={(e) => setTcCheck(e.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcCheck}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
