import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./ErrorPage"

import Home from "./routes/Home"
import Categories from "./routes/Categories"
import TheCrew from "./routes/TheCrew"

export const router = createBrowserRouter([
  {
    path: "/boardgame-nomad",
    element: <App />, 
    errorElement: <ErrorPage />, 
    children: [
      {   
        path: "/boardgame-nomad/",
        element: <Home />, 
      },
      {
        path: "/boardgame-nomad/categories",
        element: <Categories />, 
      },
      {
        path: "/boardgame-nomad/the-crew",
        element: <TheCrew />,
      },
    ],
  }
])
