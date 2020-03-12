import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

function Vote() {
  return (
    <Card>
      <Button>
        Vote <Link to="/result">Result</Link>
      </Button>
    </Card>
  );
}

export default Vote;
