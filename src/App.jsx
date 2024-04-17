import React from 'react'
import Add_details from './components/Add_details'
import Show_details from './components/Show_details'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Update_details from './components/Update_details';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Show_details />,
    },
    {
      path: "/add",
      element: <Add_details />,
    },
    {
      path: "/update",
      element: <Update_details />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
