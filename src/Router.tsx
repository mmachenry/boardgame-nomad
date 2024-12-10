import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./ErrorPage"
import { games } from "./lib/games"

import Home from "./routes/Home"

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
      ...
      games.map((game) => { return {
          path: basepath + "/" + game.path,
          element: game.element,
        }})
    ],
  }
])
