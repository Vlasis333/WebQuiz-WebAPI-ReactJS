import { Home } from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/quiz",
    element: <Quiz />
  },
  {
    path: "/result",
    element: <Result />
  }
];

export default AppRoutes;
