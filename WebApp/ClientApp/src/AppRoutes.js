import { Home } from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import MainLayout from "./components/MainLayout";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/quiz",
        element: <Quiz />
      },
      {
        path: "/result",
        element: <Result />
      }
    ]
  }
];

export default AppRoutes;
