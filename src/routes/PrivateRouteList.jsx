import { Layout } from "../containers/Layout";

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
    path: "/home",
    element: <>Home</>,
  },
  {
    path: "/profile",
    element: <>Profile</>,
  },
];
