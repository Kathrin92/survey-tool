import React from "react";
import styled from "@emotion/styled";
import Circle from "./logo.png";

const Img = styled.img`
  margin-right: 10px;
  height: 50px;
  width: 50px;
`;

function Logo(props) {
  return <Img src={Circle} alt="Circle" {...props} />;
}

export default Logo;
