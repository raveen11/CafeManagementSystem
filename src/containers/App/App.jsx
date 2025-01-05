import React from "react";
import MainRoutingComponent from "../../routes/MainRoutingComponent";
import { AppLayoutWrapper } from "./style";

const App = () => {
  return (
    <AppLayoutWrapper>
      App
      <MainRoutingComponent />
    </AppLayoutWrapper>
  );
};

export default App;
