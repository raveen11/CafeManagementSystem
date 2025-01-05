import React, { useMemo } from "react";
import { PrivateRouteList } from "./PrivateRouteList";
import { useRoutes } from "react-router";
import localDb from "../global/localStorage";
import { PublicRouteList } from "./PublicRouteList";

export default function MainRoutingComponent() {
  const RoutesList = () => {
    return useRoutes(
      localDb.getSessions() ? PrivateRouteList : PublicRouteList
    );
  };
  return useMemo(() => {
    return (
      <>
        <RoutesList />
      </>
    );
  }, []);
}
