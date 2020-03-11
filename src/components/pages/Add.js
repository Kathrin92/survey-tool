import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import Button from "../../Button";

function Add() {
  return (
    <Card>
      <Button>
        Add <Link to="/vote">Vote</Link>
      </Button>
    </Card>
  );
}
export default Add;
