import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        body {
          margin: 0;
          background: ${theme.colors.backgroundPrimary};
          height: 100px;
          font-family: "Sen", sans-serif;
          font-size: 50px;
          color: cornflowerblue;
        }
      `}
    />
  );
}

export default GlobalStyles;
