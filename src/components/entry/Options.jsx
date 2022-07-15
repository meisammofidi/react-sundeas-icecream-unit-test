import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ScoopTopping from "./ScoopTopping";
import { Row } from "react-bootstrap";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(`${error}`));
  }, [optionType]);

  // TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : ScoopTopping;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
