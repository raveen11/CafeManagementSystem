import { Layout } from "../containers/Layout";
import Login from "../containers/Login";

export const PrivateRouteList = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/layout",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <>Home</>,
  },
  {
    path: "/profile",
    element: <>Profile</>,
  },
];
