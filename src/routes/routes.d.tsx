import { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Author from "../pages/Author/Author";
import Layout from "../components/layout/Layout";

const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/author/:author",
    element: <Author />,
  },
  {
    path: "*",
    element: <>No Page</>,
  },
];

const layout: RouteObject[] = [
  {
    element: <Layout />,
    path: "/",
    children: routes,
  },
];

export default layout;
