import App from "@/App";
import WaitListPage from "@/pages/WaitListPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/tracker", element: <App /> },
  { path: "/affiliate", element: <App /> },
  { path: "/waitlist", element: <WaitListPage /> },
]);

export default router;
