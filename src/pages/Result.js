import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

function Result() {
  return (
    <Card>
      <Button>
        Result <Link to="/">Add</Link>
      </Button>
    </Card>
  );
}

export default Result;
