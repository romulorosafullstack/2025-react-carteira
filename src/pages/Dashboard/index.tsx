import React from "react";
import Signin from "../Signin";
import List from "../List";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Signin />
      <List />
    </div>
  );
}

export default Dashboard;