import React from "react";
import MainRoutingComponent from "../../routes/MainRoutingComponent";
import { AppLayoutWrapper } from "./style";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <AppLayoutWrapper>
        App
        <MainRoutingComponent />
      </AppLayoutWrapper>
    </QueryClientProvider>
  );
};

export default App;
