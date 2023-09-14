import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/error.jsx";
import Home from "./pages/home.jsx";
import Destination from "./pages/destination/destination.jsx";
import Crew from "./pages/crew/crew.jsx";
import Technology from "./pages/technology/technology.jsx";
import Moon from "./pages/destination/lunes/moon.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/destination",
                element: <Destination />,
            },
            {
                path: "/destination/:id",
                element: <Destination />,
            },
            {
                path: "/crew",
                element: <Crew />,
            },
            {
                path: "/technology",
                element: <Technology />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
