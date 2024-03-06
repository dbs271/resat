import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Main from "../pages/main/Main";
import Timer from "../pages/timer/Timer";
import Todo from "../pages/todo/Todo";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/resat",
        element: <Main />,
      },
      {
        path: "/resat/day1",
        element: <Timer />,
      },
      {
        path: "/resat/day2",
        element: <Todo />,
      },
    ],
  },
]);

export default router;