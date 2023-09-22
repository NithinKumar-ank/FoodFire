import { RouterProvider } from "react-router-dom";
import React from "react";
import  ReactDOM  from "react-dom/client";
import { appRouter } from "./App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
