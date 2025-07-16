import React from "react";
import LeaderboardContainer from "./Containers/LeaderboardContainer";
import Heading from "./Components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Heading></Heading>
      <LeaderboardContainer />;
    </>
  );
}

export default App;
