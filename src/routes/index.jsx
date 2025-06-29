import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import Register from "../pages/Register.jsx";
import Profile from "../pages/Profile.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Halaman tidak ditemukan</div>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>Halaman tidak ditemukan</div>,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <div>Halaman tidak ditemukan</div>,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <div>Halaman tidak ditemukan</div>,
  },
]);
