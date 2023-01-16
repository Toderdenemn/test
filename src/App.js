import "./App.css";
import SignIn from "./components/auth/SignIn";
import AuthDetails from "./components/AuthDetails";
import LoggedIn from "./components/logged";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/logged",
    element: <LoggedIn />,
  },
  {
    path: "/details",
    element: <AuthDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
