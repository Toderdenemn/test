import "./App.css";
import SignIn from "./components/auth/SignIn";
// import AuthDetails from "./components/AuthDetails";
import LoggedIn from "./components/logged";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },

  {
    path: "/logged",
    element: <LoggedIn />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
