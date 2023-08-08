import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.d";

const router = createBrowserRouter(routes);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
