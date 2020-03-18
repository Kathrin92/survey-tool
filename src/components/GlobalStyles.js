import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          background-color: #918d8d;
          height: 100px;
          font-family: "Sen", sans-serif;
          font-size: 50px;
          color: #a0eaa3;
        }
      `}
    />
  );
}

export default GlobalStyles;
