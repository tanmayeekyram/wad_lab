import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Rootlayout from "./root";
import Home from "./home";
import Signin from "./signin";
import Regi from "./regi";
import Cat from "./cat";
import Kart from "./kart";
import Contact from "./contact";
import About from "./about";
import "./App.css";
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Rootlayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "register",
          element: <Regi />,
        },
        {
          path: "catalogue",
          element: <Cat />,
        },
        {
          path: "kart",
          element: <Kart />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
