import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./ErrorPage"

import Home from "./routes/Home"
import Categories from "./routes/Categories"
import TheCrew from "./routes/TheCrew"
import JustOne from "./routes/JustOne"

const basepath = "/boardgame-nomad"

export const router = createBrowserRouter([
  {
    path: basepath,
    element: <App />, 
    errorElement: <ErrorPage />, 
    children: [
      {   
        path: basepath + "/",
        element: <Home />, 
      },
      {
        path: basepath + "/categories",
        element: <Categories />, 
      },
      {
        path: basepath + "/the-crew",
        element: <TheCrew />,
      },
      {
        path: basepath + "/just-one",
        element: <JustOne />,
      },
    ],
  }
])
