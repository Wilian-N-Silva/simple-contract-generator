import { createBrowserRouter } from "react-router-dom"
import { Root } from "../pages/Root"
import { NotFound } from "../pages/NotFound"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        // element: <StepOne />,
      },
    ],
  },
])
