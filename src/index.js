import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FuelUp from './components/FuelUp/Fuelup';
import Index2 from "../src/components/LandingPage/Index2"
// import ActDashBoard from './components/Dashboard/ActDashBoard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <FuelUp />,
  },
  {
    path: "/",
    element: <Index2 />,
  },
  {
    path: "/Drivein",
    element: <FuelUp /> // replace with actual component
  },
  {
    path: "/HomeBootcamp",
    element: <FuelUp /> // replace with actual component
  },
  // {
  //   path: "/ActDashBoard", 
  //   element: <ActDashBoard /> // replace with actual component
  // },
  {
    path: "/FuelUp",
    element: <FuelUp /> // replace with actual component
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
