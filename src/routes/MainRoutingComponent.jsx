import React, { useMemo } from "react";
import { PrivateRouteList } from "./PrivateRouteList";
import { useRoutes } from "react-router";
import localDb from "../global/localStorage";
import { PublicRouteList } from "./PublicRouteList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../containers/Navbar";
const queryClient = new QueryClient();
export default function MainRoutingComponent() {
  const RoutesList = () => {
    return useRoutes(
      localDb.getSessions() ? PrivateRouteList : PublicRouteList
    );
  };
  return useMemo(() => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <RoutesList />
        </QueryClientProvider>
      </>
    );
  }, []);
}
