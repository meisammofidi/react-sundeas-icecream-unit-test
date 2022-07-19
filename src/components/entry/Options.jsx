import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ScoopTopping from "./ScoopTopping";
import { Row } from "react-bootstrap";
import AlertBanner from '../common/AlertBanner'


const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError]= useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((err) => setError(true));
  }, [optionType]);

  if(error) {
    return <AlertBanner />
  }

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
