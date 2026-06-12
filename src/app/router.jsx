import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import ScrollToTopWrapper from "../utils/ScrollToTopWrapper";

export const router = createBrowserRouter([
  {
    element: <ScrollToTopWrapper />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/product/:id",
            element: <ProductDetailsPage />,
          },
          {
            path: "/cart",
            element: <CartPage />,
          },
          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);
