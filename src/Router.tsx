import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./ErrorPage"

import Home from "./routes/Home"
import Categories from "./routes/Categories"
import TheCrew from "./routes/TheCrew"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <ErrorPage />, 
    children: [
      {   
        path: "/",
        element: <Home />, 
      },
      {
        path: "/categories",
        element: <Categories />, 
      },
      {
        path: "/the-crew",
        element: <TheCrew />,
      },
    ],
  }
])
