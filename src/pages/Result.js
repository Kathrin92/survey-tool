import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { getPoll } from "../api/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);
      setPoll(poll);
    }

    doGetPoll();
  }, [pollId]);

  return (
    <Card>
      <Button></Button>
    </Card>
  );
}

export default Result;
