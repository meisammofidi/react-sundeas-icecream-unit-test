import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

const SummaryForm = () => {
  const [tcCheck, setTcCheck] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        If not accept the term and conditions then no Ice cream will be
        delivered
      </Popover.Content>
    </Popover>
  );

  const tcLabel = (
    <span>
      I agree to
      <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Term and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={tcLabel}
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
