import React from "react";
import Logo from "./Logo";
import Title from "./Title";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AppHeader() {
  return (
    <Header>
      <Logo />
      <Title>Survey-Tool</Title>
      <Logo />
    </Header>
  );
}

export default AppHeader;
