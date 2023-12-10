import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import FitShop from "./pages/FitShop";
import ShakeFactory from "./pages/ShakeFactory";
import Exercises from "./pages/Exercises";
import Cart from "./components/FitShop/Cart";
import ItemPage from "./components/FitShop/ItemPage";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/shake-factory",
        element: <ShakeFactory />,
      },
      {
        path: "/fit-shop",
        element: <FitShop />,
      },
      {
        path: "/fit-shop/:id",
        element: <ItemPage />,
      },
      {
        path: "/exercises",
        element: <Exercises />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "*",
        element: (
          <div className="min-h-screen min-w-full pt-96 text-center">
            Could not find requested page.
            <br />
            <Link className="inline-block border border-brand p-2 " to="/">
              Go Home
            </Link>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
